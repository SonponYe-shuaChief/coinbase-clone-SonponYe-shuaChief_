import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignIn() {
	const navigate = useNavigate();
	const { user, loading, signIn } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [navigate, user]);

	async function handleSubmit(event) {
		event.preventDefault();
		setError("");
		setSubmitting(true);

		try {
			await signIn({ email, password });
			navigate("/");
		} catch (authError) {
			setError(authError.status === 401 ? "Invalid credentials" : authError.message);
		} finally {
			setSubmitting(false);
		}
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
				<h1 className="text-5xl font-semibold tracking-tight text-white">Sign in to Coinbase</h1>
				<form className="mt-8" onSubmit={handleSubmit}>
					{error ? <p className="mb-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p> : null}
					<label htmlFor="signin-email" className="block text-sm font-semibold text-white">
						Email
					</label>
					<input
						id="signin-email"
						type="email"
						placeholder="Your email address"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
						className="mt-2 h-16 w-full rounded-2xl border border-[#2b3548] bg-transparent px-5 text-3xl font-medium text-white placeholder:text-slate-500 outline-none ring-[#2f63f2] focus:ring-2"
					/>

					<label htmlFor="signin-password" className="mt-5 block text-sm font-semibold text-white">
						Password
					</label>
					<input
						id="signin-password"
						type="password"
						placeholder="Your password"
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
						{submitting ? "Signing in..." : "Continue"}
					</button>

					<div className="mt-7 flex items-center gap-4 text-xl text-slate-400">
						<div className="h-px flex-1 bg-[#2b3548]" />
						<span>OR</span>
						<div className="h-px flex-1 bg-[#2b3548]" />
					</div>

					<div className="mt-7 space-y-4">
						<button type="button" className="h-16 w-full rounded-full bg-[#2a2f3a] px-6 text-2xl font-semibold text-white">
							Sign in with Passkey
						</button>
						<button type="button" className="h-16 w-full rounded-full bg-[#2a2f3a] px-6 text-2xl font-semibold text-white">
							Sign in with Google
						</button>
						<button type="button" className="h-16 w-full rounded-full bg-[#2a2f3a] px-6 text-2xl font-semibold text-white">
							Sign in with Apple
						</button>
					</div>

					<p className="mt-9 text-center text-2xl font-semibold text-white">
						Don't have an account? {" "}
						<Link to="/signup" className="text-[#2f63f2]">
							Sign up
						</Link>
					</p>

					<p className="mt-8 text-center text-lg text-slate-500">
						Not your device? Use a private window. See our Privacy Policy for more info.
					</p>

					<p className="mt-10 text-center text-4xl font-medium text-[#2f63f2]">Cancel signing in</p>
				</form>
			</div>
		</section>
	);
}

export default SignIn;
