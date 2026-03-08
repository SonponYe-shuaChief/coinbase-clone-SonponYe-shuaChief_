import { Link } from "react-router-dom";
import CryptoCard from "../components/crypto/CryptoCard";
import Button from "../components/common/Button";
import { cryptoData } from "../data/cryptoData";

function Home() {
	const featured = cryptoData.slice(0, 3);

	return (
		<section>
			<div className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-10 pt-12 md:grid-cols-2 md:items-center">
				<div>
					<p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
						Trusted Crypto Platform
					</p>
					<h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
						Buy and sell crypto in minutes.
					</h1>
					<p className="mt-4 max-w-xl text-slate-600">
						Build your portfolio with a Coinbase-inspired app. Fast onboarding,
						responsive UI, and clean market views.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Link to="/signup">
							<Button>Get Started</Button>
						</Link>
						<Link to="/learn">
							<Button variant="ghost">Learn Crypto</Button>
						</Link>
					</div>
				</div>

				<div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white shadow-xl">
					<p className="text-sm text-blue-100">Image Placeholder</p>
					<p className="mt-2 text-2xl font-bold">hero-dashboard.png</p>
					<p className="mt-3 text-blue-100">
						Replace this with your preferred screenshot or Coinbase-style hero image.
					</p>
				</div>
			</div>

			<div className="mx-auto w-full max-w-6xl px-4 pb-4">
				<h2 className="text-2xl font-bold text-slate-900">Top Assets</h2>
				<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{featured.map((coin) => (
						<CryptoCard key={coin.id} coin={coin} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Home;
