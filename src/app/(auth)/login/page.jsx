'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GoMail, GoLock, GoEye, GoEyeClosed, GoArrowLeft } from 'react-icons/go';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Form Data:', formData);
        console.log('Login Email:', formData.email);
        console.log('Login Password:', formData.password);
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center px-4 py-12">
            {/* Top Back link */}
            <div className="w-full max-w-md mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                    <GoArrowLeft className="text-base" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Main Card */}
            <div className="w-full max-w-md bg-white rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-200/50 p-8 sm:p-10">
                {/* Header / Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 text-white shadow-sm mb-4">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-sm text-neutral-500 mt-1">
                        Enter your credentials to access your studio account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                <GoMail className="text-lg" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label
                                htmlFor="password"
                                className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                            >
                                Password
                            </label>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                <GoLock className="text-lg" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-700 transition-colors"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <GoEyeClosed className="text-lg" />
                                ) : (
                                    <GoEye className="text-lg" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 active:scale-[0.99] shadow-md shadow-neutral-900/10 transition-all duration-200 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Footer link to Register */}
                <div className="mt-8 text-center pt-6 border-t border-neutral-100">
                    <p className="text-sm text-neutral-500">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/register"
                            className="font-semibold text-neutral-900 hover:underline transition-all"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
