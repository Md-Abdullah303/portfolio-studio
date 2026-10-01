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
        <button onClick={handelLogoout} className='text-sm text-red-400 p-3 border border-red-500 rounded-xl cursor-pointer'>Logout</button>
    );
}

export default LogoutBtn;
