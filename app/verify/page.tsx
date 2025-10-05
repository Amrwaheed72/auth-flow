'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { KeyRound } from 'lucide-react';
import { ResendCode, verifyUser } from '../services/api';
import { toast } from 'sonner';

const VerifyPage = () => {
    const router = useRouter();
    const [code, setCode] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);
        try {
            await verifyUser({ code });
            router.push('/login');
            toast('Email Verified successfully, please login');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(
                    err.message ||
                        'Verification failed. Please check the code and try again.',
                );
            } else {
                setError('Verification failed. Please check the code and try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };
    const handleResendCode = async () => {
        await ResendCode();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="relative m-6 flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-8 shadow-2xl md:p-14">
                <div className="text-center">
                    <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                        <KeyRound className="h-10 w-10 text-blue-600" />
                    </div>
                    <h1 className="mb-3 text-4xl font-bold">
                        Verify Your Account
                    </h1>
                    <p className="mb-8 font-light text-gray-500">
                        Enter the 6-digit code sent to your email
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col space-y-4"
                >
                    <div className="flex flex-col">
                        <label
                            htmlFor="verificationCode"
                            className="sr-only mb-1 text-sm font-medium text-gray-600"
                        >
                            Verification Code
                        </label>
                        <input
                            id="verificationCode"
                            name="verificationCode"
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="_ _ _ _ _ _"
                            maxLength={6}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-2xl tracking-[.5em] shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {error && (
                        <p className="text-center text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="focus:ring-opacity-50 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-400"
                    >
                        {isLoading ? 'Verifying...' : 'Verify Account'}
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-400">
                    Didn&apos;t receive a code?
                    <button
                        type="button"
                        onClick={handleResendCode}
                        className="ml-1 font-bold text-blue-600 hover:underline"
                    >
                        Resend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyPage;
