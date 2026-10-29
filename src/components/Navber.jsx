import { session } from '@/lib/core/session';
import React from 'react';
import NavbarClient from './NavbarClient';

const Navber = async () => {
    const sessionData = await session();
    const userData = sessionData?.user;

    return <NavbarClient userData={userData} />;
};

export default Navber;

