import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

function SignUp() {
	const [form, setForm] = useState({
		fullName: "",
		email: "",
		password: "",
	});

	function handleChange(event) {
		setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<section className="mx-auto w-full max-w-md px-4 py-10">
			<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
				<h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
				<p className="mt-1 text-sm text-slate-600">Start your crypto journey with a free account.</p>
				<form className="mt-5 space-y-4" onSubmit={handleSubmit}>
					<Input
						id="fullName"
						label="Full Name"
						name="fullName"
						placeholder="Your name"
						value={form.fullName}
						onChange={handleChange}
						required
					/>
					<Input
						id="email"
						label="Email"
						name="email"
						type="email"
						placeholder="you@example.com"
						value={form.email}
						onChange={handleChange}
						required
					/>
					<Input
						id="password"
						label="Password"
						name="password"
						type="password"
						placeholder="Create a password"
						value={form.password}
						onChange={handleChange}
						required
					/>
					<Button type="submit" className="w-full">
						Sign Up
					</Button>
				</form>
			</div>
		</section>
	);
}

export default SignUp;
