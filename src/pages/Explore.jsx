import { useState } from "react";
import Input from "../components/common/Input";
import CryptoRow from "../components/crypto/CryptoRow";
import Sidebar from "../components/layout/Sidebar";
import useCryptoData from "../hooks/useCryptoData";

function Explore() {
	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState("price");
	const coins = useCryptoData(search, sortBy);

	return (
		<section className="mx-auto w-full max-w-[1240px] px-4 py-10 lg:px-8">
			<div className="mb-6">
				<p className="text-sm font-semibold uppercase tracking-wide text-[#1652f0]">Markets</p>
				<h1 className="mt-1 text-4xl font-semibold tracking-tight text-slate-950">Explore crypto assets</h1>
			</div>

			<div className="grid gap-6 lg:grid-cols-[1fr_320px]">
				<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
					<div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
						<Input
							id="search"
							label="Search"
							placeholder="Search by name or symbol"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							className="sm:w-80"
						/>

						<label className="block">
							<span className="mb-1 block text-sm font-medium text-slate-700">Sort by</span>
							<select
								value={sortBy}
								onChange={(event) => setSortBy(event.target.value)}
								className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-[#1652f0] focus:ring-2"
							>
								<option value="price">Price</option>
								<option value="change">24h Change</option>
								<option value="name">Name</option>
							</select>
						</label>
					</div>

					<div className="overflow-x-auto">
						<table className="min-w-full">
							<thead>
								<tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-500">
									<th className="px-3 py-3 text-left">#</th>
									<th className="px-3 py-3 text-left">Name</th>
									<th className="px-3 py-3 text-right">Price</th>
									<th className="px-3 py-3 text-right">24h</th>
								</tr>
							</thead>
							<tbody>
								{coins.map((coin, index) => (
									<CryptoRow key={coin.id} coin={coin} rank={index + 1} />
								))}
							</tbody>
						</table>
					</div>
				</div>

				<Sidebar />
			</div>
		</section>
	);
}

export default Explore;
