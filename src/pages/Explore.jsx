import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cryptoData } from "../data/cryptoData";

function Sparkline({ points, color = "#ef4444", height = 28 }) {
	const width = 92;
	const max = Math.max(...points);
	const min = Math.min(...points);
	const span = max - min || 1;

	const polyline = points
		.map((point, index) => {
			const x = (index / (points.length - 1)) * width;
			const y = height - ((point - min) / span) * height;
			return `${x},${y}`;
		})
		.join(" ");

	return (
		<svg viewBox={`0 0 ${width} ${height}`} className="h-7 w-[92px]" aria-hidden="true">
			<polyline
				fill="none"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				points={polyline}
			/>
		</svg>
	);
}

function Explore() {
	const [search, setSearch] = useState("");

	const filteredCoins = useMemo(() => {
		const query = search.trim().toLowerCase();
		return cryptoData.filter(
			(coin) =>
				coin.name.toLowerCase().includes(query) ||
				coin.symbol.toLowerCase().includes(query)
		);
	}, [search]);

	const topMovers = useMemo(() => {
		return [...cryptoData]
			.sort((a, b) => Math.abs(b.change24h) - Math.abs(a.change24h))
			.slice(0, 2);
	}, []);

	const statsCards = [
		{
			label: "Total market cap",
			value: "GHS 2.45T",
			change: "-1.29%",
			points: [84, 81, 80, 79, 76, 74, 73],
		},
		{
			label: "Trade volume",
			value: "GHS 104.7B",
			change: "-42.58%",
			points: [92, 90, 88, 82, 77, 72, 71],
		},
		{
			label: "Buy-sell ratio",
			value: "0.76",
			change: "-3.57%",
			points: [70, 74, 78, 81, 79, 74, 67],
		},
		{
			label: "BTC dominance",
			value: "0.02%",
			change: "-0.30%",
			points: [62, 67, 64, 68, 63, 66, 65],
		},
	];

	return (
		<section className="mx-auto w-full max-w-[1240px] border-x border-slate-200 bg-white px-4 py-4 lg:px-6">
			<div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_270px]">
				<div>
					<div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
						<div>
							<h1 className="text-[38px] font-medium leading-[1.05] tracking-[-0.02em] text-[#0a0b0d]">
								Explore crypto
							</h1>
							<p className="mt-2 text-[12px] text-slate-500">
								Coinbase 50 Index is down 1.20% (24hrs)
							</p>
						</div>
						<label className="relative w-full md:w-[320px]">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">Q</span>
							<input
								type="search"
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder="Search for an asset"
								className="w-full rounded-full border border-slate-200 bg-slate-100 py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none ring-[#1652f0] placeholder:text-slate-400 focus:ring-2"
							/>
						</label>
					</div>

					<section className="border-b border-slate-200 pb-6">
						<h2 className="text-[30px] font-medium tracking-[-0.02em] text-[#0a0b0d]">Market stats</h2>
						<p className="mt-2 max-w-4xl text-[12px] text-slate-500">
							The overall crypto market is shrinking this week. As of today, the total crypto market
							capitalization is 2.45T, representing a 4.03% decrease from last week.
						</p>
						<button type="button" className="mt-1 text-[12px] font-semibold text-[#1652f0]">Read more</button>

						<div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
							{statsCards.map((card) => (
								<article key={card.label} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
									<p className="text-[11px] text-slate-500">{card.label}</p>
									<p className="mt-1 text-[13px] font-semibold text-slate-800">{card.value}</p>
									<p className="mt-0.5 text-[11px] font-semibold text-red-500">{card.change}</p>
									<div className="mt-1">
										<Sparkline points={card.points} color="#ef4444" />
									</div>
								</article>
							))}
						</div>
					</section>

					<section className="py-6">
						<div className="flex flex-wrap items-end justify-between gap-3">
							<div>
								<h2 className="text-[30px] font-medium tracking-[-0.02em] text-[#0a0b0d]">Crypto market prices</h2>
								<p className="mt-2 max-w-4xl text-[12px] text-slate-500">
									The overall crypto market is shrinking this week. As of today, the total crypto market
									capitalization is 2.45T, representing a 4.03% decrease from last week.
								</p>
								<button type="button" className="mt-1 text-[12px] font-semibold text-[#1652f0]">Read more</button>
							</div>
						</div>

						<div className="mt-4 flex flex-wrap gap-2">
							{[
								"All assets",
								"1D",
								"GHS",
								"10 rows",
							].map((chip) => (
								<button
									key={chip}
									type="button"
									className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
								>
									{chip}
								</button>
							))}
						</div>

						<div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
							<table className="min-w-full bg-white">
								<thead>
									<tr className="border-b border-slate-200 text-left text-[11px] font-semibold text-slate-500">
										<th className="px-3 py-3">Asset</th>
										<th className="px-3 py-3">Market price</th>
										<th className="hidden px-3 py-3 lg:table-cell">Chart</th>
										<th className="px-3 py-3">Change</th>
										<th className="hidden px-3 py-3 md:table-cell">Mkt cap</th>
										<th className="hidden px-3 py-3 md:table-cell">Volume</th>
										<th className="px-3 py-3 text-right">Actions</th>
									</tr>
								</thead>
								<tbody>
									{filteredCoins.slice(0, 10).map((coin) => {
										const isPositive = coin.change24h >= 0;
										return (
											<tr key={coin.id} className="border-b border-slate-100 text-sm">
												<td className="px-3 py-3">
													<div className="flex items-center gap-2">
														<span className="text-slate-300">☆</span>
														<span
															className="grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold text-white"
															style={{ backgroundColor: coin.logoColor }}
														>
															{coin.symbol.slice(0, 1).toUpperCase()}
														</span>
														<div>
															<Link to={`/asset/${coin.id}`} className="font-semibold text-slate-900 hover:text-[#1652f0]">
																{coin.name}
															</Link>
															<p className="text-[10px] uppercase text-slate-500">{coin.symbol}</p>
														</div>
													</div>
												</td>
												<td className="px-3 py-3 text-[13px] font-medium text-slate-800">GHS {coin.ghsPrice}</td>
												<td className="hidden px-3 py-3 lg:table-cell">
													<Sparkline
														points={coin.trend7d}
														color={isPositive ? "#10b981" : "#ef4444"}
													/>
												</td>
												<td className={`px-3 py-3 text-[12px] font-semibold ${isPositive ? "text-emerald-600" : "text-red-500"}`}>
													{isPositive ? "+" : ""}
													{coin.change24h.toFixed(2)}%
												</td>
												<td className="hidden px-3 py-3 text-[12px] text-slate-700 md:table-cell">GHS {coin.marketCap}</td>
												<td className="hidden px-3 py-3 text-[12px] text-slate-700 md:table-cell">GHS {coin.volume}</td>
												<td className="px-3 py-3 text-right">
													<button type="button" className="rounded-full bg-[#1652f0] px-3 py-1 text-xs font-semibold text-white hover:bg-[#1244cb]">
														Trade
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>

						<div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-600">
							<button type="button" className="grid h-6 w-6 place-items-center rounded-full bg-[#1652f0] text-white">1</button>
							<button type="button" className="grid h-6 w-6 place-items-center rounded-full hover:bg-slate-100">2</button>
							<button type="button" className="grid h-6 w-6 place-items-center rounded-full hover:bg-slate-100">3</button>
							<span className="px-1">...</span>
							<button type="button" className="grid h-6 w-6 place-items-center rounded-full hover:bg-slate-100">&gt;</button>
						</div>
					</section>

					<section className="rounded-none bg-[#1652f0] px-5 py-5 text-white md:flex md:items-center md:justify-between">
						<div>
							<h3 className="max-w-md text-2xl font-medium leading-tight tracking-[-0.01em]">
								Create a Coinbase account to trade crypto. It&apos;s quick, easy, and secure.
							</h3>
							<button
								type="button"
								className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0a0b0d]"
							>
								Start Trading
								<span>→</span>
							</button>
						</div>
						<div className="mt-4 rounded-lg border border-blue-300/30 bg-blue-400/20 px-6 py-5 md:mt-0">
							<p className="text-xs text-blue-100">Image placeholder: trading-cta-graphic.png</p>
						</div>
					</section>
				</div>

				<aside className="space-y-3">
					<article className="rounded-xl bg-[#1652f0] p-4 text-white">
						<p className="text-xs opacity-85">Get started</p>
						<h3 className="mt-1 text-sm font-semibold">Create your account today</h3>
						<button
							type="button"
							className="mt-3 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#1652f0]"
						>
							Sign up
						</button>
						<div className="mt-3 rounded-lg border border-blue-300/30 bg-blue-400/20 p-2">
							<p className="text-[11px] text-blue-100">Image placeholder: explore-side-promo.png</p>
						</div>
					</article>

					<article className="rounded-xl border border-slate-200 bg-slate-50 p-3">
						<h3 className="text-sm font-semibold text-slate-800">Top movers</h3>
						<p className="text-[11px] text-slate-500">24hr change</p>
						<div className="mt-2 space-y-2">
							{topMovers.map((coin) => (
								<div key={coin.id} className="rounded-lg bg-white p-2">
									<p className="text-xs font-semibold text-slate-900">{coin.symbol.toUpperCase()}</p>
									<p className={`text-xs font-semibold ${coin.change24h >= 0 ? "text-emerald-600" : "text-red-500"}`}>
										{coin.change24h >= 0 ? "+" : ""}
										{coin.change24h.toFixed(2)}%
									</p>
									<p className="text-[11px] text-slate-500">GHS {coin.ghsPrice}</p>
								</div>
							))}
						</div>
					</article>

					<article className="rounded-xl border border-slate-200 bg-slate-50 p-3">
						<h3 className="text-sm font-semibold text-slate-800">New on Coinbase</h3>
						<div className="mt-2 space-y-2">
							<div className="rounded-lg bg-white p-2">
								<p className="text-xs font-semibold text-slate-900">HYPE</p>
								<p className="text-[11px] text-slate-500">Hyperliquid Added Feb 5</p>
							</div>
							<div className="rounded-lg bg-white p-2">
								<p className="text-xs font-semibold text-slate-900">JUPITER</p>
								<p className="text-[11px] text-slate-500">Jupiter Added Dec 9</p>
							</div>
						</div>
					</article>
				</aside>
			</div>
		</section>
	);
}

export default Explore;
