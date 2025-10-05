'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    name: string;
}

const DashboardPage = () => {
    const router = useRouter();
    const [userName, setUserName] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userDataString = localStorage.getItem('UserData');

        if (!token) {
            router.push('/auth/login');
            return;
        }

        if (userDataString) {
            try {
                const user: User = JSON.parse(userDataString);
                const firstName = user.name.split(' ')[0];
                setUserName(firstName);
            } catch (error) {
                console.error(
                    'Failed to parse user data from localStorage',
                    error,
                );
                router.push('/auth/login');
            }
        } else {
            console.warn(
                'Auth token found but no user data. Redirecting to login.',
            );
            router.push('/auth/login');
        }

        setIsLoading(false);
    }, [router]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-lg text-gray-600">Loading Dashboard...</p>
            </div>
        );
    }

    if (userName) {
        return (
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                    Welcome, {userName}
                </h1>
                <p className="mt-2 text-gray-500">
                    This is your main dashboard content.
                </p>
            </div>
        );
    }
};

export default DashboardPage;
