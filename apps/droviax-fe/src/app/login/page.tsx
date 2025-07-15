"use client";
import React, { useState } from "react";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@repo/ui/card";
import { Eye, EyeOff, Palette } from "lucide-react";
import Link from "next/link";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [loginData, setLoginData] = useState({ email: "", password: "" });

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login attempt:", loginData);
		// Login logic would go here
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				{/* Logo/Brand */}
				<div className="text-center mb-8">
					<div className="flex items-center justify-center mb-4">
						<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
							<Palette className="h-6 w-6 text-white" />
						</div>
					</div>
					<h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
						Droviax
					</h1>
					<p className="text-gray-400 mt-2">Your infinite creative canvas</p>
				</div>

				<Card className="shadow-xl border border-gray-700 bg-gray-800/80 backdrop-blur-sm">
					<CardHeader>
						<CardTitle className="text-center text-gray-100">
							Welcome Back
						</CardTitle>
						<CardDescription className="text-center text-gray-400">
							Sign in to your account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleLogin} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email" className="text-gray-200">
									Email
								</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email"
									value={loginData.email}
									onChange={(e) =>
										setLoginData({ ...loginData, email: e.target.value })
									}
									className="border-gray-600 bg-gray-700/50 text-gray-100 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password" className="text-gray-200">
									Password
								</Label>
								<div className="relative">
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
										value={loginData.password}
										onChange={(e) =>
											setLoginData({ ...loginData, password: e.target.value })
										}
										className="border-gray-600 bg-gray-700/50 text-gray-100 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500 pr-10"
										required
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
									>
										{showPassword ? (
											<EyeOff className="h-4 w-4" />
										) : (
											<Eye className="h-4 w-4" />
										)}
									</button>
								</div>
							</div>
							<div className="flex items-center justify-between text-sm">
								<a
									href="#"
									className="text-green-400 hover:text-green-300 hover:underline"
								>
									Forgot password?
								</a>
							</div>
							<Button
								type="submit"
								className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
							>
								Sign In
							</Button>
						</form>

						<div className="mt-6 text-center">
							<p className="text-gray-400 text-sm">
								Don't have an account?{" "}
								<Link
									href="/signup"
									className="text-green-400 hover:text-green-300 hover:underline"
								>
									Sign up here
								</Link>
							</p>
						</div>

						<div className="mt-4 text-center">
							<Link
								href="/"
								className="text-green-400 hover:text-green-300 hover:underline text-sm"
							>
								← Back to Home
							</Link>
						</div>
					</CardContent>
				</Card>

				<div className="text-center mt-6 text-sm text-gray-500">
					By signing in, you agree to our{" "}
					<a
						href="#"
						className="text-green-400 hover:text-green-300 hover:underline"
					>
						Terms of Service
					</a>{" "}
					and{" "}
					<a
						href="#"
						className="text-green-400 hover:text-green-300 hover:underline"
					>
						Privacy Policy
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
