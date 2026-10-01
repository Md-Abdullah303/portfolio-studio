'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GoPerson, GoMail, GoLock, GoEye, GoEyeClosed, GoArrowLeft } from 'react-icons/go';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await authClient.signUp.email({
                email: formData.email,
                password: formData.password,
                name: formData.name,
                callbackURL: "/"
            });
            if (error) {
                toast.error(error)
                console.log(error);
            } else {
                toast.success("Registration successful")
                router.push("/")
                router.refresh("/")
                console.log(data);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }

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
                        Create an account
                    </h1>
                    <p className="text-sm text-neutral-500 mt-1">
                        Enter your information to get started with Portfolio Studio
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                        >
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                <GoPerson className="text-lg" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                            />
                        </div>
                    </div>

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
                        <label
                            htmlFor="password"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                        >
                            Password
                        </label>
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

                    {/* Confirm Password Field */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                <GoLock className="text-lg" />
                            </div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-700 transition-colors"
                                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            >
                                {showConfirmPassword ? (
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
                            Create Account
                        </button>
                    </div>
                </form>

                {/* Footer link to Login */}
                <div className="mt-8 text-center pt-6 border-t border-neutral-100">
                    <p className="text-sm text-neutral-500">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="font-semibold text-neutral-900 hover:underline transition-all"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
