import { Link } from "react-router-dom";
import Card from "../common/Card";

function CryptoCard({ coin }) {
  const up = coin.change24h >= 0;

  return (
    <Link to={`/asset/${coin.id}`}>
      <Card className="hover:-translate-y-0.5 hover:shadow-md transition">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-500">{coin.symbol}</p>
            <h3 className="text-lg font-semibold text-slate-900">{coin.name}</h3>
          </div>
          <span className={`rounded-full px-2 py-1 text-xs font-semibold ${up ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
            {up ? "+" : ""}
            {coin.change24h}%
          </span>
        </div>
        <p className="mt-3 text-2xl font-bold text-slate-900">${coin.price.toLocaleString()}</p>
      </Card>
    </Link>
  );
}

export default CryptoCard;