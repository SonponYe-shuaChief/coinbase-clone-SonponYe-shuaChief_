import { useMemo } from "react";
import { cryptoData } from "../data/cryptoData";

function useCryptoData(search, sortBy) {
  return useMemo(() => {
    const normalized = search.trim().toLowerCase();

    const filtered = cryptoData.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(normalized) ||
        coin.symbol.toLowerCase().includes(normalized)
      );
    });

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
  }, [search, sortBy]);
}

export default useCryptoData;