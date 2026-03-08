import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button";
import PriceChart from "../components/crypto/PriceChart";
import { cryptoData } from "../data/cryptoData";

function AssetDetail() {
	const { assetId } = useParams();
	const asset = cryptoData.find((coin) => coin.id === assetId);

	if (!asset) {
		return (
			<section className="mx-auto w-full max-w-6xl px-4 py-10">
				<h1 className="text-2xl font-bold text-slate-900">Asset not found</h1>
				<p className="mt-2 text-slate-600">Try selecting an asset from the Explore page.</p>
				<Link to="/explore" className="mt-4 inline-block">
					<Button>Back to Explore</Button>
				</Link>
			</section>
		);
	}

	return (
		<section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[1fr_300px]">
			<div>
				<p className="text-sm uppercase tracking-wide text-slate-500">Asset Detail</p>
				<h1 className="text-3xl font-black text-slate-900 sm:text-4xl">
					{asset.name} <span className="text-slate-400">{asset.symbol.toUpperCase()}</span>
				</h1>
				<p className="mt-2 text-slate-600">Current price: ${asset.price.toLocaleString()}</p>
				<div className="mt-5">
					<PriceChart points={asset.trend7d} />
				</div>
			</div>

			<aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
				<h2 className="text-lg font-semibold text-slate-900">Asset Stats</h2>
				<dl className="mt-4 space-y-3 text-sm">
					<div className="flex items-center justify-between">
						<dt className="text-slate-500">Market Cap</dt>
						<dd className="font-semibold text-slate-900">${asset.marketCap}</dd>
					</div>
					<div className="flex items-center justify-between">
						<dt className="text-slate-500">24h Change</dt>
						<dd className={`font-semibold ${asset.change24h >= 0 ? "text-emerald-600" : "text-red-600"}`}>
							{asset.change24h >= 0 ? "+" : ""}
							{asset.change24h}%
						</dd>
					</div>
					<div className="flex items-center justify-between">
						<dt className="text-slate-500">Image</dt>
						<dd className="font-semibold text-slate-900">asset-logo.png (placeholder)</dd>
					</div>
				</dl>
				<Button className="mt-5 w-full">Trade {asset.symbol.toUpperCase()}</Button>
			</aside>
		</section>
	);
}

export default AssetDetail;
