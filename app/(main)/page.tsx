'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Minus,
    Plus,
    ShoppingCart,
} from 'lucide-react';
import Image from 'next/image';
import RatingReviews from '../ui/RatingReviews';
import IndividualReviews from '../ui/IndividualReviews';
import { colors, productImages } from '../lib/constants';
import SimilarItems from '../ui/SimilarItems';
import ProductImages from '../ui/ProductImages';
import ProductDetails from '../ui/ProductDetails';

const ProductDetailPage = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/login');
        }
    }, [router]);
    return (
        <div className="bg-white">
            <div className="bg-gray-50">
                <div className="relative container mx-auto flex h-[20vh] flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-4xl font-bold text-gray-800">
                        Product Details
                    </h1>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-sm text-gray-500 sm:left-6 lg:left-8">
                        <span>Home</span>
                        <ChevronRight className="h-4 w-4" />
                        <span>Our Category</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="font-medium text-gray-700">
                            Product Details
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <ProductImages />
                    <ProductDetails />
                </div>
                <RatingReviews />
                <IndividualReviews />
                <SimilarItems />
            </div>
        </div>
    );
};

export default ProductDetailPage;
