'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../services/api';
import { ShoppingBasket } from 'lucide-react';
import { Spinner } from '../ui/spinner';
import { toast } from 'sonner';

const Page = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [mobile_country_code, setCountryCode] = useState('971');

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== passwordConfirmation) {
            setError('Passwords do not match.');
            return;
        }

        setIsLoading(true);

        try {
            const { data } = await registerUser({
                name,
                email,
                mobile,
                password,
                password_confirmation: passwordConfirmation,
                mobile_country_code,
            });
            if (data && data.token) {
                const { token, ...userData } = data;
                localStorage.setItem('authToken', token);
                localStorage.setItem('UserData', JSON.stringify(userData));
            }
            toast('Please verify your Email Address, check your inbox');
            router.push('/verify');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="relative m-6 flex flex-col space-y-8 rounded-2xl bg-white shadow-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">
                        Create Account
                    </span>
                    <span className="mb-8 font-light text-gray-400">
                        Please enter your details to register
                    </span>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-4"
                    >
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="mb-1 text-sm font-medium text-gray-600"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="mb-1 text-sm font-medium text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex w-1/3 flex-col">
                                <label
                                    htmlFor="countryCode"
                                    className="mb-1 text-sm font-medium text-gray-600"
                                >
                                    Code
                                </label>
                                <input
                                    id="countryCode"
                                    name="countryCode"
                                    type="text"
                                    value={mobile_country_code}
                                    onChange={(e) =>
                                        setCountryCode(e.target.value)
                                    }
                                    placeholder="+971"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex w-2/3 flex-col">
                                <label
                                    htmlFor="mobile"
                                    className="mb-1 text-sm font-medium text-gray-600"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    placeholder="e.g., 0501231100"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="password"
                                className="mb-1 text-sm font-medium text-gray-600"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="passwordConfirmation"
                                className="mb-1 text-sm font-medium text-gray-600"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                type="password"
                                value={passwordConfirmation}
                                onChange={(e) =>
                                    setPasswordConfirmation(e.target.value)
                                }
                                placeholder="Confirm your password"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="focus:ring-opacity-50 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <Spinner size="sm" variant="ring" />
                                    <span>Registering</span>
                                </div>
                            ) : (
                                'Register'
                            )}
                        </button>
                    </form>
                    <div className="mt-4 text-center text-gray-400">
                        Already have an account?
                        <a
                            href="/login"
                            className="ml-1 font-bold text-blue-600 hover:underline"
                        >
                            Login
                        </a>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="h-full w-[400px] rounded-r-2xl bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white md:p-14">
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <div className="mb-8">
                                <div className="inline-block animate-bounce rounded-full bg-white/30 p-4">
                                    <ShoppingBasket className="h-16 w-16 text-white" />
                                </div>
                            </div>
                            <h3 className="mb-4 text-4xl font-bold">
                                Welcome!
                            </h3>
                            <p className="max-w-xs text-indigo-100">
                                Join our community and start your journey.
                                Create an account to get access to all our
                                amazing features and services. We&apos;re happy
                                to have you with us!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
