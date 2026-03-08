import Card from "../components/common/Card";
import { learnTopics } from "../data/constants";

function Learn() {
	return (
		<section className="mx-auto w-full max-w-[1240px] px-4 py-10 lg:px-8">
			<p className="text-sm font-semibold uppercase tracking-wide text-[#1652f0]">Learn</p>
			<h1 className="mt-1 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Build your crypto confidence</h1>
			<p className="mt-3 max-w-2xl text-lg text-slate-600">
				Explore beginner-friendly explainers and security-first best practices.
			</p>

			<div className="mt-8 grid gap-5 md:grid-cols-3">
				{learnTopics.map((topic) => (
					<Card key={topic.id} className="rounded-3xl p-6">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1652f0]">Guide</p>
						<h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{topic.title}</h3>
						<p className="mt-3 text-sm text-slate-600">{topic.description}</p>
						<p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Image Placeholder: learn-card-{topic.id}.png</p>
					</Card>
				))}
			</div>
		</section>
	);
}

export default Learn;
