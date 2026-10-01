'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GoArrowLeft, GoHome, GoSearch, GoPlus } from 'react-icons/go';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white">
      {/* Ambient background glow effects */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-[140px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-sky-500/15 via-blue-500/10 to-transparent blur-[130px] rounded-full" 
      />

      {/* Subtle background grid pattern */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
      />

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-medium tracking-wide shadow-inner mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* Big 404 Display */}
        <div className="relative mb-6 select-none">
          <h1 className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700/40 drop-shadow-2xl">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500/40 border border-neutral-800/80 px-4 py-1 rounded-full backdrop-blur-xs">
              Lost in Studio
            </span>
          </div>
        </div>

        {/* Heading & Description */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          Oops! Looks like you took a wrong turn
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10">
          The page or project you are searching for might have been moved, renamed, or is temporarily unavailable in the studio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-neutral-950 bg-white hover:bg-neutral-100 shadow-lg shadow-white/5 hover:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto"
          >
            <GoHome className="text-lg transition-transform duration-200 group-hover:scale-110" />
            <span>Return to Home</span>
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-neutral-300 bg-neutral-900 hover:bg-neutral-800/80 border border-neutral-800 hover:border-neutral-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer w-full sm:w-auto"
          >
            <GoArrowLeft className="text-lg transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Help / Helpful suggestions cards */}
        <div className="mt-14 pt-10 border-t border-neutral-800/70 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <Link
            href="/"
            className="group p-4 rounded-xl bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-neutral-200 group-hover:text-white flex items-center gap-2">
                <GoSearch className="text-neutral-400 group-hover:text-indigo-400 transition-colors" />
                Browse Projects
              </span>
              <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                →
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-normal">
              Explore your portfolio showcase and created projects.
            </p>
          </Link>

          <Link
            href="/"
            className="group p-4 rounded-xl bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-neutral-200 group-hover:text-white flex items-center gap-2">
                <GoPlus className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                Create New Project
              </span>
              <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                →
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-normal">
              Start building and adding a new project to your studio.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
