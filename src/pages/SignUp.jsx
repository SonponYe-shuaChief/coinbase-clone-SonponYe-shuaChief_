import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
	const [email, setEmail] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<section className="mx-auto flex min-h-screen w-full max-w-[560px] items-start px-5 py-14 sm:items-center">
			<div className="w-full">
				<h1 className="text-5xl font-semibold tracking-tight text-white">Create your account</h1>
				<p className="mt-4 text-3xl text-slate-400">Access all that Coinbase has to offer with a single account.</p>
				<form className="mt-8" onSubmit={handleSubmit}>
					<label htmlFor="signup-email" className="block text-sm font-semibold text-white">
						Email
					</label>
					<input
						id="signup-email"
						type="email"
						placeholder="Your email address"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
						className="mt-2 h-16 w-full rounded-2xl border border-[#2b3548] bg-transparent px-5 text-3xl font-medium text-white placeholder:text-slate-500 outline-none ring-[#2f63f2] focus:ring-2"
					/>

					<button
						type="submit"
						className="mt-6 h-16 w-full rounded-full bg-[#2f4a85] text-3xl font-semibold text-[#0b1225] transition hover:bg-[#385696]"
					>
						Continue
					</button>

					<div className="mt-7 flex items-center gap-4 text-xl text-slate-400">
						<div className="h-px flex-1 bg-[#2b3548]" />
						<span>OR</span>
						<div className="h-px flex-1 bg-[#2b3548]" />
					</div>

					<div className="mt-7 space-y-4">
						<button type="button" className="h-16 w-full rounded-full bg-[#2a2f3a] px-6 text-2xl font-semibold text-white">
							Sign up with Google
						</button>
						<button type="button" className="h-16 w-full rounded-full bg-[#2a2f3a] px-6 text-2xl font-semibold text-white">
							Sign up with Apple
						</button>
					</div>

					<p className="mt-9 text-center text-2xl font-semibold text-white">
						Already have an account? {" "}
						<Link to="/signin" className="text-[#2f63f2]">
							Sign in
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}

export default SignUp;
