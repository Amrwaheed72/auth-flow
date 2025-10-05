'use client';
import Image from 'next/image';
import { productImages } from '../lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductImages = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const handlePrevImage = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? productImages.length - 1 : prev - 1,
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prev) =>
            prev === productImages.length - 1 ? 0 : prev + 1,
        );
    };
    return (
        <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                    src={productImages[selectedImageIndex]}
                    alt="Product Image"
                    fill
                    className="object-cover"
                />
                <button
                    onClick={handlePrevImage}
                    className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/60 p-2 transition hover:bg-white"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={handleNextImage}
                    className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/60 p-2 transition hover:bg-white"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
                {productImages.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative aspect-square w-full overflow-hidden rounded-md ring-2 ${selectedImageIndex === index ? 'ring-blue-600' : 'ring-transparent'}`}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        {index === 3 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-lg font-bold text-white">
                                +2
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
