import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUp() {
	const navigate = useNavigate();
	const { user, loading, signUp } = useAuth();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [notice, setNotice] = useState("");
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [navigate, user]);

	async function handleSubmit(event) {
		event.preventDefault();
		setError("");
		setNotice("");
		setSubmitting(true);

		try {
			await signUp({ name, email, password });
			navigate("/");
		} catch (authError) {
			setError(authError.message);
		} finally {
			setSubmitting(false);
		}
	}

	function handleUnsupportedSignUp(provider) {
		setError("");
		setNotice(`${provider} sign-up is not enabled in this coursework demo. Use the form fields below to create a test account.`);
	}

	if (loading) {
		return (
			<section className="mx-auto flex min-h-screen w-full max-w-[560px] items-start px-5 py-14 sm:items-center">
				<div className="w-full text-white">Loading session...</div>
			</section>
		);
	}

	return (
		<section className="mx-auto flex min-h-screen w-full max-w-[560px] items-start px-5 py-14 sm:items-center">
			<div className="w-full">
				<h1 className="text-5xl font-semibold tracking-tight text-white">Create your account</h1>
				<p className="mt-4 text-xl text-slate-400">Access all that Coinbase has to offer with a single account.</p>
				<p className="mt-4 rounded-2xl border border-[#2b3548] bg-white/5 px-4 py-3 text-sm leading-6 text-slate-300">
					Educational demo only. This page is part of a student project and is not affiliated with Coinbase.
					Use only test or classroom credentials here.
				</p>
				<form className="mt-8" onSubmit={handleSubmit}>
					{notice ? <p className="mb-4 rounded-2xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-sm text-sky-200">{notice}</p> : null}
					{error ? <p className="mb-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}
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

					<label htmlFor="signup-password" className="mt-5 block text-sm font-semibold text-white">
						Password
					</label>
					<input
						id="signup-password"
						type="password"
						placeholder="Create a password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						required
						className="mt-2 h-16 w-full rounded-2xl border border-[#2b3548] bg-transparent px-5 text-3xl font-medium text-white placeholder:text-slate-500 outline-none ring-[#2f63f2] focus:ring-2"
					/>

					<button
						type="submit"
						disabled={submitting}
						className="mt-6 h-16 w-full rounded-full bg-[#2f4a85] text-3xl font-semibold text-[#0b1225] transition hover:bg-[#385696] disabled:cursor-not-allowed disabled:opacity-60"
					>
						{submitting ? "Creating account..." : "Continue"}
					</button>

					<div className="mt-7 flex items-center gap-4 text-xl text-slate-400">
						<div className="h-px flex-1 bg-[#2b3548]" />
						<span>OR</span>
						<div className="h-px flex-1 bg-[#2b3548]" />
					</div>

					<div className="mt-7 space-y-4">
						<button type="button" onClick={() => handleUnsupportedSignUp("Google")} className="h-16 w-full rounded-full bg-[#2a2f3a] px-6 text-2xl font-semibold text-white transition hover:bg-[#323846]">
							Sign up with Google
						</button>
						<button type="button" onClick={() => handleUnsupportedSignUp("Apple")} className="h-16 w-full rounded-full bg-[#2a2f3a] px-6 text-2xl font-semibold text-white transition hover:bg-[#323846]">
							Sign up with Apple
						</button>
					</div>

					<p className="mt-9 text-center text-2xl font-semibold text-white">
						Already have an account? {" "}
						<Link to="/signin" className="text-[#2f63f2]">
							Sign in
						</Link>
					</p>

					<p className="mt-8 text-center text-xs text-slate-400 leading-5">
						By creating an account you certify that you are over the age of 18 and agree to our{" "}
						<a href="#" className="text-[#2f63f2] hover:underline">Privacy Policy</a>
						{" "}and{" "}
						<a href="#" className="text-[#2f63f2] hover:underline">Cookie Policy</a>.
					</p>
				</form>
			</div>
		</section>
	);
}

export default SignUp;
