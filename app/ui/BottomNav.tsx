'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Bell,
    Heart,
    User,
    House,
    Boxes,
    UserRoundSearch,
    Headset,
    MessageCircleQuestionMark,
} from 'lucide-react';
import React from 'react';

const mainNavLinks = [
    { href: '/main', label: 'Home', icon: <House /> },
    { href: '/main/our-category', label: 'Category', icon: <Boxes /> },
    { href: '/main/about-us', label: 'About', icon: <UserRoundSearch /> },
    { href: '/main/contact-us', label: 'Contact', icon: <Headset /> },
    { href: '/main/faqs', label: 'FAQs', icon: <MessageCircleQuestionMark /> },
];

const personalNavLinks = [
    { href: '/main/notifications', label: 'Alerts', icon: <Bell /> },
    { href: '/main/favorites', label: 'Favorites', icon: <Heart /> },
    { href: '/main/dashboard', label: 'Profile', icon: <User /> },
];

const BottomNav = () => {
    const pathname = usePathname();

    return (
        <footer className="fixed bottom-0 z-40 w-full border-t bg-white xl:hidden">
            <nav className="flex h-16 items-center justify-around">
                <div className="hidden w-full items-center justify-around md:flex">
                    {mainNavLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex flex-col items-center gap-1 text-xs transition-colors hover:text-rose-400 ${pathname === link.href ? 'text-rose-500' : 'text-gray-500'}`}
                        >
                            {React.cloneElement(link.icon, {
                                className: 'h-6 w-6',
                            })}
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>

                <div className="flex w-full items-center justify-around md:hidden">
                    {personalNavLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex flex-col items-center gap-1 text-xs transition-colors hover:text-rose-400 ${pathname === link.href ? 'text-rose-500' : 'text-gray-500'}`}
                        >
                            {React.cloneElement(link.icon, {
                                className: 'h-6 w-6',
                            })}
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </footer>
    );
};

export default BottomNav;
