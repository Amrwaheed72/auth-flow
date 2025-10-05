'use client';
import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBasket } from 'lucide-react';
import { toast } from 'sonner';
import { loginUser } from '@/app/services/api';
import { Spinner } from '@/app/ui/spinner';

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            router.push('/main/dashboard');
        }
    }, [router]);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        setIsLoading(true);

        try {
            const data = await loginUser({
                email,
                password,
            });
            console.log(data);

            localStorage.setItem('UserData', JSON.stringify(data.data));
            localStorage.setItem('authToken', data.data.token);
            router.push('/main/dashboard');
            toast.success(data.message || 'logged in successfully');
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
                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="focus:ring-opacity-50 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <Spinner size="sm" variant="ring" />
                                    <span>Logging</span>
                                </div>
                            ) : (
                                'Login'
                            )}
                        </button>
                    </form>
                    <div className="mt-4 text-center text-gray-400">
                        don&apos;t have an account?
                        <a
                            href="/register"
                            className="ml-1 font-bold text-blue-600 hover:underline"
                        >
                            create now
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
                                Welcome Back!
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
