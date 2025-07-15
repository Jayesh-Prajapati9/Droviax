"use client";
import React, { useState, useEffect } from "react";
import {
	ArrowRight,
	Palette,
	Users,
	Download,
	Zap,
	Shield,
	Star,
	Check,
	Menu,
	X,
	Pencil,
	Share2,
	Cloud,
	Github,
	Twitter,
	Mail,
	Sun,
	Moon,
	Circle,
	Square,
	Triangle,
	Minus,
	Edit3,
	MousePointer,
	Type,
	Image,
	PlayIcon,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setIsDarkMode(savedTheme === "dark");
		} else {
			setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	console.log(isDarkMode);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	console.log(isDarkMode);
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-x-hidden">
			{/* Enhanced Canvas Background Pattern */}
			<div className="fixed inset-0 opacity-20 dark:opacity-10 pointer-events-none">
				<div
					className="w-full h-full"
					style={{
						backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 2px, transparent 2px)
            `,
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			{/* Floating Drawing Elements */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				{/* Geometric Shapes */}
				<div className="absolute top-20 left-10 animate-pulse">
					<Circle
						className="w-16 h-16 text-emerald-300 dark:text-emerald-600 opacity-40"
						strokeWidth={3}
					/>
				</div>
				<div
					className="absolute top-40 right-20 animate-bounce"
					style={{ animationDelay: "1s" }}
				>
					<Square
						className="w-12 h-12 text-teal-400 dark:text-teal-500 opacity-50"
						strokeWidth={2}
					/>
				</div>
				<div
					className="absolute top-60 left-1/4 animate-pulse"
					style={{ animationDelay: "2s" }}
				>
					<Triangle
						className="w-14 h-14 text-emerald-400 dark:text-emerald-500 opacity-45"
						strokeWidth={2.5}
					/>
				</div>

				{/* Drawing Tools */}
				<div className="absolute top-32 right-1/4 animate-float">
					<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
						<Pencil className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
					</div>
				</div>
				<div
					className="absolute top-80 left-16 animate-float"
					style={{ animationDelay: "1.5s" }}
				>
					<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
						<Edit3 className="w-8 h-8 text-teal-600 dark:text-teal-400" />
					</div>
				</div>

				{/* Sketched Lines */}
				<svg
					className="absolute top-1/4 left-1/3 w-32 h-24 opacity-30"
					viewBox="0 0 128 96"
				>
					<path
						d="M10,50 Q30,20 50,50 T90,50"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
						className="text-emerald-500 dark:text-emerald-400"
						strokeLinecap="round"
					/>
				</svg>
				<svg
					className="absolute bottom-1/3 right-1/4 w-40 h-32 opacity-25"
					viewBox="0 0 160 128"
				>
					<path
						d="M20,60 L60,20 L100,60 L140,20"
						stroke="currentColor"
						strokeWidth="4"
						fill="none"
						className="text-teal-500 dark:text-teal-400"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				{/* Floating Cursors */}
				<div
					className="absolute top-1/2 left-1/5 animate-pulse"
					style={{ animationDelay: "0.5s" }}
				>
					<MousePointer className="w-6 h-6 text-emerald-500 dark:text-emerald-400 opacity-60" />
				</div>
				<div
					className="absolute bottom-1/4 right-1/3 animate-pulse"
					style={{ animationDelay: "2.5s" }}
				>
					<MousePointer className="w-6 h-6 text-teal-500 dark:text-teal-400 opacity-60" />
				</div>

				{/* Doodle Elements */}
				<div className="absolute top-1/3 right-10">
					<svg className="w-20 h-20 opacity-20" viewBox="0 0 80 80">
						<circle
							cx="40"
							cy="40"
							r="30"
							stroke="currentColor"
							strokeWidth="2"
							fill="none"
							className="text-emerald-600"
							strokeDasharray="5,5"
						/>
						<circle
							cx="40"
							cy="40"
							r="15"
							stroke="currentColor"
							strokeWidth="2"
							fill="none"
							className="text-teal-600"
						/>
					</svg>
				</div>

				{/* Sticky Notes */}
				<div
					className="absolute bottom-1/2 left-8 animate-float"
					style={{ animationDelay: "3s" }}
				>
					<div className="bg-yellow-200 dark:bg-yellow-600 w-16 h-16 rounded-lg shadow-md opacity-60 flex items-center justify-center">
						<Type className="w-6 h-6 text-yellow-800 dark:text-yellow-200" />
					</div>
				</div>
				<div
					className="absolute top-2/3 right-1/5 animate-float"
					style={{ animationDelay: "4s" }}
				>
					<div className="bg-pink-200 dark:bg-pink-600 w-14 h-14 rounded-lg shadow-md opacity-60 flex items-center justify-center">
						<Image className="w-5 h-5 text-pink-800 dark:text-pink-200" />
					</div>
				</div>

				{/* Abstract Shapes */}
				<div className="absolute bottom-20 left-1/3">
					<svg className="w-24 h-24 opacity-15" viewBox="0 0 96 96">
						<polygon
							points="48,10 70,35 55,65 25,65 10,35"
							stroke="currentColor"
							strokeWidth="3"
							fill="none"
							className="text-emerald-500"
						/>
					</svg>
				</div>
			</div>

			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
								<Pencil className="w-5 h-5 text-white" />
							</div>
							<span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
								Droviax
							</span>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#features"
								className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
							>
								Features
							</a>
							<a
								href="#pricing"
								className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
							>
								Pricing
							</a>
							<a
								href="#about"
								className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
							>
								About
							</a>

							<Link href={"/signup"}>
								<button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
									Get Started
								</button>
							</Link>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden flex items-center space-x-2">
							
							<button
								className="text-gray-600 dark:text-gray-300"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{isMenuOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
						<div className="px-4 py-2 space-y-1">
							<a
								href="#features"
								className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
							>
								Features
							</a>
							<a
								href="#pricing"
								className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
							>
								Pricing
							</a>
							<a
								href="#about"
								className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
							>
								About
							</a>
							<button className="w-full mt-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
								Get Started
							</button>
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
				<div className="max-w-7xl mx-auto">
					<div className="text-center">
						<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
							Draw, Design,{" "}
							<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
								Collaborate
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
							Droviax is the intuitive whiteboard tool that transforms your
							ideas into beautiful diagrams, wireframes, and visual stories.
							Create, share, and collaborate in real-time.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Link href={"/login"}>
								<button className="group bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center space-x-2">
									<span>Start Drawing Now</span>
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
							</Link>
							<button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-8 py-4 text-lg font-semibold transition-colors flex items-center space-x-2">
								<span>Watch Demo</span>
								<div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center ml-2">
									<PlayIcon className="ml-0.5 w-6 h-6" />
								</div>
							</button>
						</div>
					</div>

					{/* Hero Image with Floating Toolbar */}
					<div className="mt-16 relative">
						<div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
							<img
								src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
								alt="Droviax Interface Preview"
								className="w-full h-96 object-cover rounded-xl shadow-lg"
							/>
						</div>

						{/* Floating Toolbar */}
						<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 flex items-center space-x-4 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
							<div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
								<MousePointer className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
							</div>
							<div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
								<Pencil className="w-5 h-5 text-gray-600 dark:text-gray-300" />
							</div>
							<div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
								<Square className="w-5 h-5 text-gray-600 dark:text-gray-300" />
							</div>
							<div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
								<Circle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
							</div>
							<div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
								<Type className="w-5 h-5 text-gray-600 dark:text-gray-300" />
							</div>
							<div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
							<div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
								<Palette className="w-5 h-5 text-gray-600 dark:text-gray-300" />
							</div>
						</div>

						{/* Floating UI Elements */}
						<div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-pulse">
							<Palette className="w-8 h-8 text-emerald-500" />
						</div>
						<div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-pulse delay-300">
							<Users className="w-8 h-8 text-teal-500" />
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				id="features"
				className="py-20 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm relative"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
							Everything you need to create
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Powerful features that make drawing, designing, and collaborating
							effortless
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: <Palette className="w-8 h-8" />,
								title: "Intuitive Drawing Tools",
								description:
									"Sketch, annotate, and create with a comprehensive set of drawing tools designed for every use case.",
							},
							{
								icon: <Users className="w-8 h-8" />,
								title: "Real-time Collaboration",
								description:
									"Work together with your team in real-time. See cursors, changes, and comments as they happen.",
							},
							{
								icon: <Cloud className="w-8 h-8" />,
								title: "Cloud Sync",
								description:
									"Your work is automatically saved and synced across all your devices. Never lose your progress.",
							},
							{
								icon: <Download className="w-8 h-8" />,
								title: "Export Anywhere",
								description:
									"Export your creations in multiple formats - PNG, SVG, PDF, or share via link.",
							},
							{
								icon: <Zap className="w-8 h-8" />,
								title: "Lightning Fast",
								description:
									"Built for speed and performance. Start drawing instantly without any loading delays.",
							},
							{
								icon: <Shield className="w-8 h-8" />,
								title: "Private & Secure",
								description:
									"Your data is encrypted and secure. Share only what you want, when you want.",
							},
						].map((feature, index) => (
							<div
								key={index}
								className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
							>
								<div className="text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
									{feature.icon}
								</div>
								<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Social Proof Section */}
			<section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Trusted by creative teams worldwide
						</h2>
						<div className="flex justify-center items-center space-x-2 text-yellow-500 mb-4">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="w-6 h-6 fill-current" />
							))}
							<span className="text-gray-600 dark:text-gray-300 text-lg ml-2">
								4.9/5 from 2,500+ reviews
							</span>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								quote:
									"Droviax has completely transformed how our team collaborates on design concepts. The real-time features are game-changing.",
								author: "Sarah Chen",
								role: "Product Designer at TechFlow",
								avatar:
									"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
							},
							{
								quote:
									"The intuitive interface means I can focus on my ideas instead of learning complex tools. It's exactly what I needed.",
								author: "Marcus Rivera",
								role: "UX Director at Innovate Labs",
								avatar:
									"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
							},
							{
								quote:
									"We've moved our entire whiteboarding process to Droviax. The export options and collaboration features are outstanding.",
								author: "Emma Thompson",
								role: "Creative Lead at Design Studio",
								avatar:
									"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
							},
						].map((testimonial, index) => (
							<div
								key={index}
								className="bg-gray-50/90 dark:bg-gray-800/90 p-8 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
							>
								<p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
									"{testimonial.quote}"
								</p>
								<div className="flex items-center space-x-4">
									<img
										src={testimonial.avatar}
										alt={testimonial.author}
										className="w-12 h-12 rounded-full object-cover"
									/>
									<div>
										<div className="font-semibold text-gray-900 dark:text-white">
											{testimonial.author}
										</div>
										<div className="text-gray-600 dark:text-gray-400 text-sm">
											{testimonial.role}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section
				id="pricing"
				className="py-20 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm relative"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
							Choose your plan
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Start free and upgrade as your team grows. All plans include core
							features.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								name: "Free",
								price: "$0",
								period: "forever",
								description: "Perfect for personal use and small projects",
								features: [
									"Unlimited personal drawings",
									"Basic export options",
									"3 collaborators max",
									"Community support",
								],
								button: "Get Started",
								popular: false,
							},
							{
								name: "Pro",
								price: "$12",
								period: "per month",
								description: "Ideal for growing teams and businesses",
								features: [
									"Unlimited collaborators",
									"Advanced export formats",
									"Team libraries",
									"Priority support",
									"Version history",
									"Custom branding",
								],
								button: "Start Free Trial",
								popular: true,
							},
							{
								name: "Enterprise",
								price: "Custom",
								period: "pricing",
								description: "For large organizations with advanced needs",
								features: [
									"Everything in Pro",
									"SSO integration",
									"Advanced security",
									"Dedicated support",
									"Custom integrations",
									"SLA guarantee",
								],
								button: "Contact Sales",
								popular: false,
							},
						].map((plan, index) => (
							<div
								key={index}
								className={`bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-sm ${plan.popular ? "ring-2 ring-emerald-500 transform scale-105" : "hover:shadow-lg"} transition-all relative backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
											Most Popular
										</span>
									</div>
								)}
								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
										{plan.name}
									</h3>
									<div className="mb-2">
										<span className="text-4xl font-bold text-gray-900 dark:text-white">
											{plan.price}
										</span>
										<span className="text-gray-600 dark:text-gray-400 ml-1">
											/{plan.period}
										</span>
									</div>
									<p className="text-gray-600 dark:text-gray-400">
										{plan.description}
									</p>
								</div>
								<ul className="space-y-4 mb-8">
									{plan.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className="flex items-center space-x-3"
										>
											<Check className="w-5 h-5 text-green-500" />
											<span className="text-gray-700 dark:text-gray-300">
												{feature}
											</span>
										</li>
									))}
								</ul>
								<button
									className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
										plan.popular
											? "bg-emerald-600 text-white hover:bg-emerald-700"
											: "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
									}`}
								>
									{plan.button}
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Ready to bring your ideas to life?
					</h2>
					<p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
						Join thousands of creators who use Droviax to turn their imagination
						into reality.
					</p>
					<button className="bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center space-x-2 mx-auto">
						<span>Start Creating for Free</span>
						<ArrowRight className="w-5 h-5" />
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 dark:bg-black text-white py-16 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
									<Pencil className="w-5 h-5 text-white" />
								</div>
								<span className="text-2xl font-bold">Droviax</span>
							</div>
							<p className="text-gray-400 mb-4">
								The intuitive whiteboard tool for creative minds and
								collaborative teams.
							</p>
							<div className="flex space-x-4">
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
								>
									<Twitter className="w-6 h-6" />
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
								>
									<Github className="w-6 h-6" />
								</a>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors"
								>
									<Mail className="w-6 h-6" />
								</a>
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-4">Product</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Features
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Templates
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Integrations
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										About
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Blog
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Contact
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-4">Support</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Help Center
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Documentation
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										API Reference
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Status
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">
							© 2025 Droviax. All rights reserved.
						</p>
						<div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
							<a href="#" className="hover:text-white transition-colors">
								Privacy Policy
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Terms of Service
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Cookies
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
