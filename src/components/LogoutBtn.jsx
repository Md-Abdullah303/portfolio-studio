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
            type="button"
            onClick={handelLogoout}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 min-h-[38px] text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/50 rounded-xl transition-all duration-150 active:scale-[0.98] cursor-pointer"
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
