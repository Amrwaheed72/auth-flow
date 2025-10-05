'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { similarItems } from '../lib/constants';
import React from 'react';
import ItemCard from './ItemCard';

const SimilarItems = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="mt-16 border-t pt-8">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                    Similar Items
                </h2>
                <div className="hidden items-center gap-2 lg:flex">
                    <button className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button className="hover:bg-opacity-90 rounded-full bg-rose-400 p-2 text-white transition disabled:cursor-not-allowed disabled:opacity-50">
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="grid grid-cols-2 gap-6 transition-transform duration-500 ease-in-out md:grid-cols-3 lg:grid-cols-4">
                    {similarItems.map((item) => (
                        <div key={item.id} className="">
                            <ItemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimilarItems;
