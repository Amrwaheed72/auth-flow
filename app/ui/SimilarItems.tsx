'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight,  } from 'lucide-react';

import { similarItems } from '../lib/constants'; 
import React from 'react';
import ItemCard from './ItemCard';


const SimilarItems = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Desktop Carousel Logic
    const itemsPerPage = 5;
    const totalPages = Math.ceil(similarItems.length / itemsPerPage);
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < totalPages - 1;

    const handlePrev = () => {
        if (canGoPrev) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (canGoNext) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="mt-16 border-t pt-8">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                    Similar Items
                </h2>
                <div className="hidden items-center gap-2 lg:flex">
                    <button
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!canGoNext}
                        className="hover:bg-opacity-90 rounded-full bg-[#bc9b98] p-2 text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="relative hidden overflow-hidden lg:block">
                <div
                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {similarItems.map((item) => (
                        <div
                            key={item.id}
                            className="w-[calc(20%-1.2rem)] flex-shrink-0"
                        >
                            <ItemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:hidden">
                <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {similarItems.map((item) => (
                        <div
                            key={item.id}
                            className="w-3/4 flex-shrink-0 sm:w-2/5 md:w-1/3"
                        >
                            <ItemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimilarItems;
