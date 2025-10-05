'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    name: string;
}

const DashboardPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        const userString = localStorage.getItem('UserData');
        const token = localStorage.getItem('authToken');

        if (!token) {
            router.push('/login');
            return;
        }

        if (userString) {
            try {
                const user: User = JSON.parse(userString);
                setName(user.name.split(' ')[0]);
            } catch (e) {
                console.error(
                    'Failed to parse user data from localStorage, logging out.',
                    e,
                );
                localStorage.clear();
                router.push('/login');
            }
        } else {
            console.warn(
                'Auth token found but no user data. Redirecting to login.',
            );
            localStorage.removeItem('authToken');
            router.push('/login');
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

    return (
        <div className="container mx-auto h-[49.7vh] p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Welcome, {name || 'User'}
            </h1>
            <p className="mt-2 text-gray-500">
                This is your main dashboard content.
            </p>
        </div>
    );
};

export default DashboardPage;
