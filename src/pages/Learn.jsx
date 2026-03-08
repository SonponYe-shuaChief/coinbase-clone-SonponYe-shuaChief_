import Card from "../components/common/Card";
import { learnTopics } from "../data/constants";

function Learn() {
	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-10">
			<p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Learn</p>
			<h1 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl">Build your crypto confidence</h1>
			<p className="mt-3 max-w-2xl text-slate-600">
				Explore beginner-friendly explainers and security-first best practices.
			</p>

			<div className="mt-6 grid gap-4 md:grid-cols-3">
				{learnTopics.map((topic) => (
					<Card key={topic.id}>
						<p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Guide</p>
						<h3 className="mt-2 text-lg font-bold text-slate-900">{topic.title}</h3>
						<p className="mt-2 text-sm text-slate-600">{topic.description}</p>
					</Card>
				))}
			</div>
		</section>
	);
}

export default Learn;
