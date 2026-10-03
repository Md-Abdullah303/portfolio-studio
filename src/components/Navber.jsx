import { session } from '@/lib/core/session';
import Link from 'next/link';
import React from 'react';
import { GoPlus } from 'react-icons/go';
import LogoutBtn from './LogoutBtn';
import { IoIosHome } from "react-icons/io";

const Navber = async () => {
    const sessionData = await session();
    const userData = sessionData?.user;

    const navLink = [
        {
            name: "Dashboard",
            href: "/",
            icon: IoIosHome,
        },
    ]

    return (
        <aside className="w-64 md:w-72 shrink-0 h-screen sticky top-0  bg-black backdrop-blur-xl border-r border-neutral-200/80 flex flex-col justify-between p-6 z-20">
            {/* Top Section: Brand & Navigation */}
            <div className="space-y-6">
                {/* Brand / Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3 focus:outline-none"
                >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm transition-transform duration-200 group-hover:scale-105">
                        <svg
                            className="w-5 h-5 transition-transform duration-200 group-hover:rotate-6"
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

                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Portfolio
                        </h1>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                            Studio
                        </span>
                    </div>
                </Link>

                {/* Primary CTA: Add New Project */}
                <Link
                    href="/add-project"
                    className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
                >
                    <GoPlus className="text-lg transition-transform duration-200 group-hover:rotate-90" />
                    <span>Add new Project</span>
                </Link>

                {/* Navigation Links */}
                <div className="space-y-1 pt-2">
                    <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                        Navigation
                    </p>
                    {
                        navLink.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-600 hover:bg-neutral-700 duration-200"
                                >
                                    <Icon className="text-lg" />
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>

            {/* Bottom Section: User Profile & Auth */}
            <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
                {userData ? (
                    <div className="space-y-3">
                        {/* User Card */}
                        <div className="flex items-center gap-3 p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60">
                            {userData?.image ? (
                                <img
                                    src={userData.image}
                                    alt={userData?.name || 'User'}
                                    className="w-9 h-9 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
                                />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 text-white dark:text-neutral-900 flex items-center justify-center font-bold text-sm">
                                    {userData?.name ? userData.name[0].toUpperCase() : 'U'}
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                                    {userData?.name || 'Studio Admin'}
                                </p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                                    {userData?.email || ''}
                                </p>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <div className="w-full">
                            <LogoutBtn />
                        </div>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 px-1 mb-2">Account</p>
                        <div className="flex items-center gap-2">
                            <Link
                                href="/login"
                                className="flex-1 py-2 text-center text-sm font-medium rounded-xl text-neutral-900 dark:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-200/60 dark:border-neutral-700/60 transition-all duration-150"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="flex-1 py-2 text-center text-sm font-medium rounded-xl text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-150"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Navber;
