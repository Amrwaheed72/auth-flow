'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) router.push('/login');
        if (token) router.push('/dashboard');
    });
};

export default Page;
