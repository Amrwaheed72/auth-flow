'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
    const token = localStorage.getItem('authToken');
    const router = useRouter();
    useEffect(() => {
        if (!token) router.push('/login');
        if (token) router.push('/dashboard');
    });
};

export default Page;
