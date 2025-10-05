import {
    Cloudy,
    Facebook,
    Instagram,
    Linkedin,
    Send,
    Twitter,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#443837] text-white">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold"
                        >
                            <Cloudy className="h-8 w-8 text-rose-300" />
                            <span>Tinytales</span>
                        </Link>
                        <p className="text-sm text-gray-300">
                            Ipsam in eos qui consequatur ab cum maxime. Soluta
                            dolor quae Ipsam in eos qui consequatur ab dolor
                            quae. Soluta dolor quae Ipsam in eos quiconsequatur
                            ab cum maxime.
                        </p>
                    </div>

                    {/* Column 2: Let Us Help */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Let Us Help</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <Link href="#" className="hover:text-white">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    All Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Policies */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Policies</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Cancellation Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Send Email & Follow Us */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Send Email</h3>
                        <form className="flex items-center rounded-lg bg-white p-1">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-transparent px-3 py-1 text-gray-700 placeholder-gray-400 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="hover:bg-opacity-90 rounded-md bg-[#bc9b98] px-6 py-2 font-semibold text-white transition"
                            >
                                Send
                            </button>
                        </form>
                        <div className="space-y-2 pt-2">
                            <h4 className="font-semibold text-gray-200">
                                Follow Us
                            </h4>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <Facebook className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <Twitter className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <Instagram className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <Send className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
