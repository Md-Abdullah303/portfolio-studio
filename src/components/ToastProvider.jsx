"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // সার্ভারে কিছু রেন্ডার করবে না
    }

    return <Toaster />;
}
