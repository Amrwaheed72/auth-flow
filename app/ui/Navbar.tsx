'use client';

import {
    Boxes,
    Headset,
    House,
    LogOut,
    MessageCircleQuestionMark,
    Shield,
    UserRoundSearch,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { logout } from '../services/api';
import { toast } from 'sonner';

export const navLinks = [
    { href: '/', label: 'Home', icon: <House /> },
    { href: '/our-category', label: 'Our Category', icon: <Boxes /> },
    { href: '/about-us', label: 'About Us', icon: <UserRoundSearch /> },
    { href: '/contact-us', label: 'Contact Us', icon: <Headset /> },
    { href: '/faqs', label: 'FAQs', icon: <MessageCircleQuestionMark /> },
];

const Navbar = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const data = await logout();
            toast.success(data.message || 'Logged out successfully');
        } catch (error: unknown) {
            const errorMessage =
                error instanceof Error ? error.message : String(error);
            toast.error(`Server logout failed. Reason: ${errorMessage}`);
        } finally {
            localStorage.removeItem('authToken');
            localStorage.removeItem('UserData');
            router.push('/login');
        }
    };

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-xl font-bold text-gray-800"
                    >
                        <Shield className="h-8 w-8 text-blue-600" />
                        <span className="">Auth Cycle</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <button
                            title="logout"
                            type="button"
                            onClick={handleLogout}
                            className="flex cursor-pointer items-center gap-1 text-gray-500 hover:text-gray-900"
                        >
                            <LogOut />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
