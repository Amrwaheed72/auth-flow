'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/main');
    }, [router]);
};

export default Page;
