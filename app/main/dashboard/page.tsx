'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const DashboardPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const user = localStorage.getItem('UserData');
    const username = user ? JSON.parse(user).name.split(' ')[0] : '';
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/auth/login');
            return;
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-lg text-gray-600">Loading Dashboard...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Welcome, {username}
            </h1>
            <p className="mt-2 text-gray-500">
                This is your main dashboard content.
            </p>
        </div>
    );
};

export default DashboardPage;
