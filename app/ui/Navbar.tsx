'use client';

import { useState } from 'react';
import {
    Bell,
    Boxes,
    ChevronDown,
    Cloudy,
    Headset,
    Heart,
    House,
    LogOut,
    Menu,
    MessageCircleQuestionMark,
    User,
    UserRoundSearch,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import MobileNav from './MobileNav';
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
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
            localStorage.removeItem('UserData'); // Ensure this matches the key you set
            router.push('/login');
        }
    };

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between p-4">
                    {/* --- THIS IS THE FIX --- */}
                    <Link
                        href="/" // Changed from "/main" to "/"
                        className="flex items-center gap-2 text-xl font-bold text-gray-800"
                    >
                        <Cloudy className="h-8 w-8 text-rose-400" />
                        <span className="">Tinytales</span>
                    </Link>

                    <nav className="hidden items-center gap-6 xl:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-2 text-gray-500 hover:text-gray-900 ${pathname === link.href ? 'font-semibold text-gray-900' : ''}`}
                            >
                                {React.cloneElement(link.icon, {
                                    className: 'h-5 w-5',
                                })}
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-4 md:flex">
                        <Link
                            href="/notifications"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <Bell className="h-6 w-6" />
                        </Link>
                        <Link
                            href="/favorites"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <Heart className="h-6 w-6" />
                        </Link>
                        <button
                            type="button"
                            className="flex items-center gap-1 text-gray-500 hover:text-gray-900"
                        >
                            <span>EN</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                        <button
                            title="logout"
                            type="button"
                            className="flex items-center gap-1 text-gray-500 hover:text-gray-900"
                        >
                            <User className="h-6 w-6" />
                        </button>
                        <button
                            title="logout"
                            type="button"
                            onClick={handleLogout}
                            className="hidden cursor-pointer items-center gap-1 text-gray-500 hover:text-gray-900 md:flex"
                        >
                            <LogOut />
                        </button>
                    </div>

                    <div className="flex space-x-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-gray-800"
                            aria-label="Open menu"
                        >
                            <Menu className="h-7 w-7" />
                        </button>
                        <button
                            type="button"
                            title="logout"
                            onClick={handleLogout}
                            className="cursor-pointer items-center gap-1 text-gray-500 hover:text-gray-900"
                        >
                            <LogOut />
                        </button>
                    </div>
                </div>
            </header>

            <MobileNav
                isOpen={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
            />
        </>
    );
};

export default Navbar;
