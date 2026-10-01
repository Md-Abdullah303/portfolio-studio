import Navber from '@/components/Navber';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <div className="w-[80%] mx-auto px-6 py-10 ">
                <Navber />
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;
