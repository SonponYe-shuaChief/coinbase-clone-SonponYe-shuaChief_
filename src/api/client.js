const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");

function buildUrl(path) {
  return `${API_BASE ?? ""}${path}`;
}

async function parseResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json().catch(() => ({}));
  }

  const text = await response.text().catch(() => "");
  return text ? { message: text } : {};
}

export async function api(path, options = {}) {
  const response = await fetch(buildUrl(path), {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await parseResponse(response);

  if (!response.ok) {
    const error = new Error(data.message || "Request failed");
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

function toNumber(value, fallback = 0) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function normalizeTrend(source) {
  if (Array.isArray(source) && source.length > 0) {
    return source.map((point) => toNumber(point));
  }

  return [50, 52, 51, 54, 53, 56, 58];
}

export function normalizeCryptoRecord(record, index = 0) {
  const price = toNumber(record.price ?? record.currentPrice ?? record.marketPrice ?? record.latestPrice);
  const change24h = toNumber(record.change24h ?? record.change ?? record.percentChange24h ?? record.dailyChange);
  const id = record.id ?? record._id ?? record.slug ?? record.symbol?.toLowerCase() ?? `asset-${index}`;
  const symbol = String(record.symbol ?? record.ticker ?? record.code ?? "").toLowerCase();

  return {
    id,
    name: record.name ?? record.assetName ?? record.title ?? (symbol ? symbol.toUpperCase() : `Asset ${index + 1}`),
    symbol: symbol || String(id).toLowerCase(),
    price,
    ghsPrice: record.ghsPrice ?? record.priceGhs ?? record.price_in_ghs ?? record.localPrice ?? price.toLocaleString(),
    marketCap: record.marketCap ?? record.market_cap ?? record.cap ?? "0.00",
    volume: record.volume ?? record.volume24h ?? record.tradingVolume ?? "0.00",
    change24h,
    logoColor: record.logoColor ?? record.color ?? "#1652f0",
    trend7d: normalizeTrend(record.trend7d ?? record.trend ?? record.sparkline ?? record.sparkline7d),
  };
}

export function normalizeCryptoCollection(data) {
  const source = Array.isArray(data)
    ? data
    : data?.data ?? data?.items ?? data?.cryptos ?? data?.results ?? data?.coins ?? [];

  return source.map((record, index) => normalizeCryptoRecord(record, index));
}

export function normalizeAuthUser(data) {
  const user = data?.user ?? data?.data ?? data;

  if (!user || typeof user !== "object") {
    return null;
  }

  return {
    id: user.id ?? user._id ?? user.userId ?? null,
    name: user.name ?? user.fullName ?? user.username ?? user.email ?? "User",
    email: user.email ?? user.username ?? "",
  };
}

export const authApi = {
  register: (payload) => api("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  }),
  login: (payload) => api("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  }),
  profile: () => api("/auth/profile"),
  logout: () => api("/auth/logout", { method: "POST" }),
};

export const cryptoApi = {
  getAll: () => api("/crypto"),
  getGainers: () => api("/crypto/gainers"),
  getNew: () => api("/crypto/new"),
  create: (payload) => api("/crypto", {
    method: "POST",
    body: JSON.stringify(payload),
  }),
};
