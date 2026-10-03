import Navber from '@/components/Navber';
import { session } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';

const Layout = async ({ children }) => {

    const sessionData = await session()
    const userData = sessionData?.user;
    if (!userData) {
        return redirect("/login")
    }

    return (
        <>
            <div className="flex min-h-screen ">
                <Navber />
                <main className="flex-1 min-w-0 p-6 md:p-8 lg:p-10 overflow-y-auto">
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;
