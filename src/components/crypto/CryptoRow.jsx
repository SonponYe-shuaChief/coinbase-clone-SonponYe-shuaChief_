import { Link } from "react-router-dom";

function CryptoRow({ coin, rank }) {
  const up = coin.change24h >= 0;

  return (
    <tr className="border-t border-slate-100 text-sm">
      <td className="px-3 py-3 text-slate-500">{rank}</td>
      <td className="px-3 py-3">
        <Link to={`/asset/${coin.id}`} className="font-semibold text-slate-900 hover:text-blue-700">
          {coin.name}
        </Link>
        <span className="ml-2 text-xs uppercase text-slate-500">{coin.symbol}</span>
      </td>
      <td className="px-3 py-3 text-right font-semibold text-slate-900">
        ${coin.price.toLocaleString()}
      </td>
      <td className={`px-3 py-3 text-right font-semibold ${up ? "text-emerald-600" : "text-red-600"}`}>
        {up ? "+" : ""}
        {coin.change24h}%
      </td>
    </tr>
  );
}

export default CryptoRow;