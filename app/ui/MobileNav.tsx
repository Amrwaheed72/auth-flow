'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Boxes,
    House,
    X,
    MessageCircleQuestionMark,
    UserRoundSearch,
    Headset,
} from 'lucide-react';
import React from 'react';

const navLinks = [
    { href: '/main', label: 'Home', icon: <House /> },
    { href: '/main/our-category', label: 'Our Category', icon: <Boxes /> },
    { href: '/main/about-us', label: 'About Us', icon: <UserRoundSearch /> },
    { href: '/main/contact-us', label: 'Contact Us', icon: <Headset /> },
    { href: '/main/faqs', label: 'FAQs', icon: <MessageCircleQuestionMark /> },
];

interface MobileNavProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 transform bg-white ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out md:hidden`}
        >
            <div className="flex items-center justify-between border-b p-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    <X className="h-7 w-7" />
                </button>
            </div>
            <nav className="flex flex-col space-y-4 p-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-4 rounded-lg p-2 text-lg ${
                            pathname === link.href
                                ? 'bg-gray-100 font-semibold text-gray-900'
                                : 'text-gray-600'
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.icon &&
                            React.cloneElement(link.icon, {
                                className: 'h-6 w-6',
                            })}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default MobileNav;
