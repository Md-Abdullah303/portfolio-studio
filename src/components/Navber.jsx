import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <header className="w-full">
            <nav className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Brand / Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3 focus:outline-none"
                >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-950 shadow-sm transition-transform duration-200 group-hover:scale-105">
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
                        <h1 className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Portfolio
                        </h1>
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                            Studio
                        </span>
                    </div>
                </Link>

                {/* Right Action Button */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Add new project</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navber;
