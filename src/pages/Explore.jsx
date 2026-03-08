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
		<section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[1fr_280px]">
			<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
				<div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<Input
						id="search"
						label="Search asset"
						placeholder="Search by name or symbol"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						className="sm:w-72"
					/>

					<label className="block">
						<span className="mb-1 block text-sm font-medium text-slate-700">Sort by</span>
						<select
							value={sortBy}
							onChange={(event) => setSortBy(event.target.value)}
							className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-blue-600 focus:ring-2"
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
							<tr className="text-xs uppercase tracking-wide text-slate-500">
								<th className="px-3 py-2 text-left">#</th>
								<th className="px-3 py-2 text-left">Asset</th>
								<th className="px-3 py-2 text-right">Price</th>
								<th className="px-3 py-2 text-right">24h</th>
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
		</section>
	);
}

export default Explore;
