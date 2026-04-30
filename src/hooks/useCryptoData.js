import { useEffect, useMemo, useState } from "react";
import { cryptoApi, normalizeCryptoCollection } from "../api/client";

function useCryptoData(search, sortBy) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadCoins() {
      try {
        const data = await cryptoApi.getAll();
        if (active) {
          const normalized = normalizeCryptoCollection(data);
          setCoins(normalized.length > 0 ? normalized : []);
        }
      } catch (error) {
        if (active) {
          setCoins([]);
        }
        console.error("Failed to load crypto assets", error);
      }
    }

    loadCoins();

    return () => {
      active = false;
    };
  }, []);

  return useMemo(() => {
    const normalized = search.trim().toLowerCase();

    // Filter by name or ticker symbol for a Coinbase-like asset search experience.
    const filtered = coins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(normalized) ||
        coin.symbol.toLowerCase().includes(normalized)
      );
    });

    // Keep sorting strategy centralized so table components can stay purely presentational.
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "change") {
        return b.change24h - a.change24h;
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return b.price - a.price;
    });

    return sorted;
  }, [coins, search, sortBy]);
}

export default useCryptoData;