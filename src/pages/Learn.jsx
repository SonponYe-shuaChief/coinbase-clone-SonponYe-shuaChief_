import bestTimeInvestCryptoImage from "../assets/images/best time to invest in crypto.png";
import canCryptoReplaceBankImage from "../assets/images/can crypto replace you rbacnk account.png";
import usdcDigitalImage from "../assets/images/USDC the digital image.webp";
import advancedToolsCard from "../assets/images/imgi_53_Advanced.png";
import learnPromoImage from "../assets/images/imgi_39_CB_LOLP__1_.png";
import baseAppEarnWays from "../assets/images/countless ways to earn crypto with base app image.png";
import coinbaseOneRewards from "../assets/images/imgi_54_zero_fees_us.png";

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

function LearnCard({ image, kicker, title, description, large = false }) {
  return (
    <article>
      <div className="overflow-hidden rounded-sm bg-slate-200">
        <img
          src={image}
          alt={title}
          className={large ? "h-[220px] w-full object-cover" : "h-[180px] w-full object-cover"}
        />
      </div>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">{kicker}</p>
      <h3 className="mt-1 text-3xl font-semibold leading-tight tracking-tight text-slate-950">{title}</h3>
      {description ? <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p> : null}
    </article>
  );
}

function Learn() {
	const popularLinks = [
		"What is cryptocurrency?",
		"How to earn crypto rewards",
		"How to add crypto to your Coinbase Wallet",
		"Tax forms, explained: A guide to U.S. tax forms and crypto reports",
		"Beginner's guide to dapps",
		"Everything you need to know about the first-ever U.S. Bitcoin ETF",
	];

	const cryptoBasicsLarge = [
		{
			image: bestTimeInvestCryptoImage,
			kicker: "Beginner's guide",
			title: "What is Bitcoin?",
			description:
				"Bitcoin is the world's first widely adopted cryptocurrency and allows secure peer-to-peer transactions.",
		},
		{
			image: usdcDigitalImage,
			kicker: "Beginner's guide",
			title: "Guide to DeFi tokens and altcoins",
			description: "From Aave to Zcash, decide what to trade with our beginner's guide.",
		},
	];

	const cryptoBasicsSmall = [
		{ image: canCryptoReplaceBankImage, kicker: "Beginner's guide", title: "What is Ethereum?" },
		{ image: learnPromoImage, kicker: "Key term", title: "What is DeFi?" },
		{ image: baseAppEarnWays, kicker: "Beginner's guide", title: "What is a stablecoin?" },
		{ image: advancedToolsCard, kicker: "Glossary", title: "FOMO or you'll end up REKT - crypto slang, explained" },
	];

	const topicTags = [
		"Bitcoin",
		"Blockchain",
		"Cardano",
		"Crypto wallet",
		"DeFi",
		"Ethereum",
		"Fork",
		"Inflation",
		"Market cap",
		"NFT",
		"Private key",
		"Protocol",
		"Smart contract",
		"Token",
		"Volatility meme coin",
	];

	const tipsCards = [
		{ image: usdcDigitalImage, kicker: "Getting started", title: "How to donate crypto" },
		{ image: baseAppEarnWays, kicker: "Video tutorial", title: "How to set up a crypto wallet" },
		{ image: bestTimeInvestCryptoImage, kicker: "Video tutorial", title: "When is the best time to invest in crypto?" },
		{ image: learnPromoImage, kicker: "Your crypto", title: "How to invest in crypto via your retirement account" },
	];

	const advancedCards = [
		{ image: canCryptoReplaceBankImage, kicker: "Key term", title: "What is technical analysis?" },
		{ image: advancedToolsCard, kicker: "Advanced guide", title: "How can I use crypto futures market data for spot trading?" },
		{ image: baseAppEarnWays, kicker: "Advanced guide", title: "How to read advanced trading charts" },
		{ image: learnPromoImage, kicker: "Key term", title: "What is an order book?" },
	];

	const futuresCards = [
		{ image: advancedToolsCard, title: "Futures: Introductions and origins" },
		{ image: learnPromoImage, title: "Futures fundamentals: Understanding the basics" },
		{ image: canCryptoReplaceBankImage, title: "Opening, holding, and closing a position in the futures market" },
		{ image: bestTimeInvestCryptoImage, title: "Trading strategies: Speculating, hedging, and spreading in the futures market" },
	];

	const walletCards = [
		{
			image: usdcDigitalImage,
			kicker: "",
			title: "What's the difference between Coinbase and Coinbase Wallet?",
			description: "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered.",
		},
		{
			image: baseAppEarnWays,
			kicker: "Video tutorial",
			title: "How to set up a crypto wallet",
			description: "Learn how to setup and get started with a crypto wallet.",
		},
		{
			image: coinbaseOneRewards,
			kicker: "Getting started",
			title: "How to add crypto to your Coinbase Wallet",
			description: "A quick guide on how to add crypto to your Coinbase self-custody wallet.",
		},
		{
			image: bestTimeInvestCryptoImage,
			kicker: "",
			title: "How to send or receive crypto using Coinbase Wallet",
			description: "Coinbase Wallet helps you unlock one of the most significant features of crypto: peer-to-peer transfers.",
		},
	];

	return (
		<section>
			<div className="mx-auto w-full max-w-[1240px] px-4 py-10 lg:px-8">
				<SectionHeader
					title="Crypto questions, answered"
					subtitle="Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between"
				/>

				<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
					<div>
						<p className="mb-2 text-xs font-semibold text-slate-500">Featured</p>
						<LearnCard
							image={bestTimeInvestCryptoImage}
							kicker="Video tutorial"
							title="When is the best time to invest in crypto?"
							description="When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging."
							large
						/>
					</div>

					<div>
						<p className="mb-2 text-xs font-semibold text-slate-500">Popular</p>
						<div className="space-y-3">
							{popularLinks.map((item) => (
								<p key={item} className="text-sm font-semibold text-slate-900">{item}</p>
							))}
						</div>
					</div>
				</div>

				<div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
					{["Crypto basics", "Tips and tutorials", "Advanced trading", "Futures"].map((name) => (
						<div key={name} className="flex items-center gap-2 border-t border-slate-200 pt-3">
							<div className="h-8 w-8 rounded-full bg-slate-200" />
							<div>
								<p className="text-sm font-semibold text-slate-900">{name}</p>
								<p className="text-xs text-slate-500">See more</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="border-t border-slate-200 bg-white py-12">
				<div className="mx-auto w-full max-w-[1240px] px-4 lg:px-8">
					<SectionHeader title="Crypto basics" subtitle="New to crypto? Not for long - start with these guides and explainers" />
					<div className="grid gap-5 md:grid-cols-2">
						{cryptoBasicsLarge.map((card) => (
							<LearnCard key={card.title} {...card} large />
						))}
					</div>

					<div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{cryptoBasicsSmall.map((card) => (
							<LearnCard key={card.title} image={card.image} kicker={card.kicker} title={card.title} />
						))}
					</div>

					<div className="mt-7 text-center">
						<button type="button" className="rounded-sm bg-[#1652f0] px-4 py-2 text-sm font-semibold text-white">
							See more crypto basics
						</button>
					</div>
				</div>
			</div>

			<div className="border-t border-slate-200 bg-[#e5e8ed] py-12">
				<div className="mx-auto w-full max-w-[1240px] px-4 text-center lg:px-8">
					<h2 className="text-5xl font-semibold tracking-tight text-slate-950">What is...</h2>
					<div className="mx-auto mt-5 flex max-w-[920px] flex-wrap justify-center gap-2">
						{topicTags.map((tag) => (
							<button key={tag} type="button" className="bg-white px-4 py-2 text-xs font-semibold text-slate-700">
								{tag}
							</button>
						))}
					</div>
					<button type="button" className="mt-5 rounded-sm bg-[#1652f0] px-4 py-2 text-sm font-semibold text-white">See more</button>
				</div>
			</div>

			<div className="border-t border-slate-200 bg-white py-12">
				<div className="mx-auto w-full max-w-[1240px] px-4 lg:px-8">
					<SectionHeader title="Tips and tutorials" subtitle="Get practical, step-by-step answers to all things crypto" />
					<div className="mx-auto grid max-w-[780px] gap-5 md:grid-cols-2">
						{tipsCards.map((card) => (
							<LearnCard key={card.title} image={card.image} kicker={card.kicker} title={card.title} />
						))}
					</div>
					<div className="mt-7 text-center">
						<button type="button" className="rounded-sm bg-[#1652f0] px-4 py-2 text-sm font-semibold text-white">
							See more tips and tutorials
						</button>
					</div>
				</div>
			</div>

			<div className="border-t border-slate-200 bg-white py-12">
				<div className="mx-auto w-full max-w-[1240px] px-4 lg:px-8">
					<SectionHeader title="Advanced trading" subtitle="Ready to advance? Learn the tools and terminology you need to take control of your trades." />
					<div className="mx-auto grid max-w-[780px] gap-5 md:grid-cols-2">
						{advancedCards.map((card) => (
							<LearnCard key={card.title} image={card.image} kicker={card.kicker} title={card.title} />
						))}
					</div>
					<div className="mt-7 text-center">
						<button type="button" className="rounded-sm bg-[#1652f0] px-4 py-2 text-sm font-semibold text-white">
							See more advanced trading
						</button>
					</div>
				</div>
			</div>

			<div className="border-t border-slate-200 bg-white py-12">
				<div className="mx-auto w-full max-w-[1240px] px-4 lg:px-8">
					<SectionHeader title="Futures" subtitle="New to futures trading? Get up to speed on the basics." />
					<div className="mx-auto grid max-w-[780px] gap-5 md:grid-cols-2">
						{futuresCards.map((card) => (
							<article key={card.title}>
								<div className="overflow-hidden rounded-sm bg-slate-200">
									<img src={card.image} alt={card.title} className="h-[170px] w-full object-cover" />
								</div>
								<h3 className="mt-2 text-[32px] font-semibold leading-tight tracking-tight text-slate-950">{card.title}</h3>
							</article>
						))}
					</div>
					<div className="mt-7 text-center">
						<button type="button" className="rounded-sm bg-[#1652f0] px-4 py-2 text-sm font-semibold text-white">
							See more about futures
						</button>
					</div>
				</div>
			</div>

			<div className="border-t border-slate-200 bg-white py-12">
				<div className="mx-auto w-full max-w-[1240px] px-4 lg:px-8">
					<SectionHeader title="All Things Wallet" subtitle="Earn yield, dive into crypto apps, control your holdings, and much more" />
					<div className="mx-auto grid max-w-[780px] gap-5 md:grid-cols-2">
						{walletCards.map((card) => (
							<article key={card.title}>
								<div className="overflow-hidden rounded-sm bg-slate-200">
									<img src={card.image} alt={card.title} className="h-[170px] w-full object-cover" />
								</div>
								{card.kicker ? <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">{card.kicker}</p> : null}
								<h3 className="mt-1 text-[32px] font-semibold leading-tight tracking-tight text-slate-950">{card.title}</h3>
								<p className="mt-1 text-sm leading-6 text-slate-600">{card.description}</p>
							</article>
						))}
					</div>
					<div className="mt-7 text-center">
						<button type="button" className="rounded-sm bg-[#1652f0] px-4 py-2 text-sm font-semibold text-white">
							See more Wallet articles
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Learn;
