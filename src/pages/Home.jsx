import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { cryptoData } from "../data/cryptoData";
import heroPhoneDashboard from "../assets/images/imgi_33_Hero__4_.png";
import learnPromoImage from "../assets/images/imgi_39_CB_LOLP__1_.png";
import advancedToolsCard from "../assets/images/imgi_53_Advanced.png";
import coinbaseOneRewards from "../assets/images/imgi_54_zero_fees_us.png";
import baseAppEarnWays from "../assets/images/countless ways to earn crypto with base app image.png";
import usdcDigitalImage from "../assets/images/USDC the digital image.webp";
import canCryptoReplaceBankImage from "../assets/images/can crypto replace you rbacnk account.png";
import bestTimeInvestCryptoImage from "../assets/images/best time to invest in crypto.png";
import TakeControl from "../assets/images/take control of your money image.png";
import feature from "../assets/images/featured section image.png";

function Home() {
	const market = cryptoData.slice(0, 6);
	const learnCards = [
		{
			id: "usdc",
			title: "USDC: The digital dollar for the global crypto economy",
			description:
				"Coinbase believes crypto will be part of the solution for creating an open financial system.",
			image: usdcDigitalImage,
		},
		{
			id: "bank-account",
			title: "Can crypto really replace your bank account?",
			description:
				"If you're a big enough fan of crypto, you've probably heard the phrase 'be your own bank'.",
			image: canCryptoReplaceBankImage,
		},
		{
			id: "invest-time",
			title: "When is the best time to invest in crypto?",
			description:
				"Cryptocurrencies like Bitcoin can experience daily volatility, as with any investment.",
			image: bestTimeInvestCryptoImage,
		},
	];

	return (
		<section>
			<div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 pb-16 pt-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10 lg:px-8">
				<div className="order-2 lg:order-1">
					<div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
						<img
							src={heroPhoneDashboard}
							alt="Coinbase mobile dashboard"
							className="h-[520px] w-full object-cover"
						/>
					</div>
				</div>

				<div className="order-1 lg:order-2">
					<h1 className="max-w-[520px] text-5xl font-semibold leading-[1] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
						The future of
						<br />
						finance is here.
					</h1>
					<p className="mt-6 text-2xl text-slate-800">Trade crypto and more on a platform you can trust.</p>
					<form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
						<input
							type="email"
							placeholder="satoshi@nakamoto.com"
							className="h-14 w-full max-w-[470px] rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<Link to="/signup" className="inline-flex">
							<Button className="h-14 rounded-full px-9 text-xl font-semibold">Sign up</Button>
						</Link>
					</form>
				</div>
			</div>

			<div className="bg-[#e5e8ed]">
				<div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12 lg:px-8">
					<div>
						<h2 className="max-w-[520px] text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
							Explore crypto like Bitcoin, Ethereum, and Dogecoin.
						</h2>
						<p className="mt-6 text-2xl text-slate-600">
							Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
						</p>
						<Link to="/explore" className="mt-8 inline-flex">
							<Button className="rounded-full bg-slate-950 px-9 py-3 text-xl font-semibold hover:bg-slate-800">
								See more assets
							</Button>
						</Link>
					</div>

					<div className="rounded-[40px] bg-[#050a12] px-5 py-6 text-white shadow-2xl sm:px-8 sm:py-8">
						<div className="mb-7 flex flex-wrap gap-3 text-base font-semibold sm:text-lg">
							<span className="rounded-full bg-slate-700 px-5 py-2">Tradable</span>
							<span className="px-3 py-2 text-slate-200">Top gainers</span>
							<span className="px-3 py-2 text-slate-200">New on Coinbase</span>
						</div>

						<div className="space-y-7">
							{market.map((coin) => (
								<div key={coin.id} className="flex items-center justify-between gap-4">
									<div className="flex items-center gap-4">
										<span className="grid h-11 w-11 place-items-center rounded-full bg-slate-800 text-sm font-bold uppercase text-slate-200">
											{coin.symbol.slice(0, 1)}
										</span>
										<p className="text-4xl font-medium tracking-tight">{coin.name}</p>
									</div>
									<div className="text-right">
										<p className="text-4xl font-medium tracking-tight">GHS {coin.ghsPrice}</p>
										<p className={`text-2xl ${coin.change24h >= 0 ? "text-emerald-400" : "text-red-400"}`}>
											{coin.change24h >= 0 ? "/" : "\\"} {Math.abs(coin.change24h).toFixed(2)}%
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto w-full max-w-[1240px] px-4 py-16 lg:px-8">
				<div className="mx-auto grid max-w-[900px] gap-12">
					<div className="grid items-center gap-7 md:grid-cols-2">
						<div className="overflow-hidden rounded-3xl bg-slate-950">
							<img
								src={advancedToolsCard}
								alt="Advanced trading tools preview"
								className="h-64 w-full object-cover"
							/>
						</div>
						<div>
							<h3 className="text-5xl font-semibold tracking-tight text-slate-950">Powerful tools, designed for the advanced trader.</h3>
							<p className="mt-3 text-slate-600">
								Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience.
							</p>
							<button type="button" className="mt-4 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white">
								Start trading
							</button>
						</div>
					</div>

					<div className="grid items-center gap-7 md:grid-cols-2">
						<div>
							<p className="inline-block rounded-full border border-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-500">COINBASE ONE</p>
							<h3 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">Zero trading fees, more rewards.</h3>
							<p className="mt-3 text-slate-600">
								Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
							</p>
							<button type="button" className="mt-4 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white">
								Claim free trial
							</button>
						</div>
						<div className="overflow-hidden rounded-3xl bg-slate-100">
							<img
								src={coinbaseOneRewards}
								alt="Coinbase One mobile benefits"
								className="h-64 w-full object-cover"
							/>
						</div>
					</div>

					<div className="grid items-center gap-7 md:grid-cols-2">
						<div className="order-2 overflow-hidden rounded-3xl bg-slate-100 md:order-1">
							<img
								src={baseAppEarnWays}
								alt="Base app mobile preview"
								className="h-64 w-full object-cover"
							/>
						</div>
						<div className="order-1 md:order-2">
							<p className="inline-block rounded-full border border-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-500">BASE APP</p>
							<h3 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">Countless ways to earn crypto with the Base App.</h3>
							<p className="mt-3 text-slate-600">
								An everything app to trade, create, discover, and chat, all in one place.
							</p>
							<button type="button" className="mt-4 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white">
								Learn more
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#e5e8ed]">
				<div className="mx-auto w-full max-w-[1240px] px-4 py-12 lg:px-8">
					<div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
						<h3 className="max-w-[480px] text-5xl font-semibold leading-tight tracking-tight text-slate-950">
							New to crypto?
							<br />
							Learn some crypto basics
						</h3>
						<div>
							<p className="max-w-[500px] text-base text-slate-600">
								Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.
							</p>
							<Link to="/learn" className="mt-4 inline-flex">
								<Button className="rounded-full bg-slate-950 px-6 py-2 text-sm hover:bg-slate-800">Read More</Button>
							</Link>
						</div>
					</div>

					<div className="mt-6 grid gap-4 md:grid-cols-3">
						{learnCards.map((card) => (
							<article key={card.id} className="rounded-2xl">
								<div className="overflow-hidden rounded-2xl border border-slate-300/70 bg-white">
									<img src={card.image} alt={card.title} className="h-44 w-full object-cover" />
								</div>
								<h4 className="mt-3 text-[31px] font-medium leading-[1.05] tracking-[-0.01em] text-slate-950">
									{card.title}
								</h4>
								<p className="mt-2 text-xs leading-5 text-slate-600">{card.description}</p>
							</article>
						))}
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
					<div>
						<h3 className="max-w-[520px] text-6xl font-semibold leading-[0.97] tracking-tight text-slate-950 sm:text-7xl">
							Take control
							<br />
							of your money
						</h3>
						<p className="mt-3 text-sm text-slate-600">Start your portfolio today and discover crypto</p>
						<form className="mt-4 flex max-w-[460px] flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
							<input
								type="email"
								placeholder="satoshi@nakamoto.com"
								className="h-12 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none ring-[#1652f0] placeholder:text-slate-400 focus:ring-2"
							/>
							<Link to="/signup" className="inline-flex">
								<Button className="h-12 rounded-full px-7 text-sm">Sign up</Button>
							</Link>
						</form>
					</div>

					<div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
						<img src={TakeControl} alt="Cryptocurrency asset cluster" className="h-[290px] w-full object-cover" />
					</div>
				</div>
				<div className="mx-auto w-full max-w-[1240px] px-4 pb-12 lg:px-8">
					<p className="mx-auto max-w-[900px] text-center text-[10px] leading-5 text-slate-400">
						DNC trading is offered by Coinbase Derivatives LLC, a CFTC-regulated futures commission merchant. Products and features may not be available in all regions.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Home;
