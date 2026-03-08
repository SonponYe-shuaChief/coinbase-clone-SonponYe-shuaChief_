import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<section className="mx-auto w-full max-w-md px-4 py-10">
			<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
				<h1 className="text-2xl font-bold text-slate-900">Sign In</h1>
				<p className="mt-1 text-sm text-slate-600">Welcome back. Enter your details.</p>
				<form className="mt-5 space-y-4" onSubmit={handleSubmit}>
					<Input
						id="signin-email"
						label="Email"
						type="email"
						placeholder="you@example.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>
					<Input
						id="signin-password"
						label="Password"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						required
					/>
					<Button type="submit" className="w-full">
						Sign In
					</Button>
				</form>
			</div>
		</section>
	);
}

export default SignIn;
