"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const LogoutBtn = () => {
    const router = useRouter()

    const handelLogoout = async () => {
        await authClient.signOut()
        router.push("/")
        router.refresh("/")
        toast("logout Successfull!")
    }
    return (
        <button
            onClick={handelLogoout}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-red-500 hover:text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 border border-red-200 dark:border-red-900/40 rounded-xl transition-all duration-150 cursor-pointer"
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
