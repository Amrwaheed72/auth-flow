import { useState } from 'react';
import { colors } from '../lib/constants';
import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
    const [selectedColor, setSelectedColor] = useState(colors[1]);
    const [quantity, setQuantity] = useState(1);

    const basePrice = 120.0;

    return (
        <div className="space-y-8">
            <div className="flex items-start justify-between">
                <div>
                    <span className="rounded-full border border-blue-400 bg-white px-4 py-2 text-xs text-blue-600">
                        T-Shirt
                    </span>
                    <h1 className="mt-2 text-2xl font-bold text-gray-800">
                        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free
                        With Blue
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className="rounded-full border border-blue-400 p-2 hover:bg-blue-100">
                        <ShoppingCart className="h-5 w-5 text-blue-600" />
                    </button>
                    <button className="rounded-full border border-blue-400 p-2 hover:bg-blue-100">
                        <Heart className="h-5 w-5 text-blue-600" />
                    </button>
                </div>
            </div>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                    ${basePrice.toFixed(2)}
                </span>
                <span className="text-xl text-gray-400 line-through">
                    $360.00
                </span>
            </div>
            <p className="text-sm text-gray-500">
                This price is exclusive of taxes.
            </p>
            <p className="text-gray-600">
                Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam
                nonummy Lorem ipsum dolor sit amet, diam nonummy.
            </p>

            <div className="flex max-w-sm flex-col gap-4 md:gap-6">
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-blue-700 focus:outline-none">
                        <option>Cotton</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Size
                    </label>
                    <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-blue-700 focus:outline-none">
                        <option>2xl</option>
                    </select>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Colors</h3>
                <div className="mt-2 flex items-center gap-3">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            className={`h-8 w-8 rounded-full ring-2 ring-offset-2 ${selectedColor.name === color.name ? 'ring-blue-600' : 'ring-transparent'}`}
                            style={{ backgroundColor: color.hex }}
                            aria-label={color.name}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-semibold">Quantity</h1>
                        <span className="text-gray-400">
                            (${basePrice} for piece)
                        </span>
                    </div>
                    <div className="flex items-center gap-2 pt-4">
                        <div className="flex items-center rounded-lg border border-gray-300">
                            <button
                                onClick={() =>
                                    setQuantity((q) => Math.max(1, q - 1))
                                }
                                className="px-4 py-2 text-gray-600"
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 font-semibold">
                                {quantity.toString().padStart(2, '0')}
                            </span>
                            <button
                                onClick={() => setQuantity((q) => q + 1)}
                                className="px-4 py-2 text-gray-600"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                        <span className="text-xl font-semibold">
                            ${(basePrice * quantity).toFixed(2)}
                        </span>
                    </div>
                </div>
                <button className="flex h-12 w-full items-center justify-center gap-4 rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition md:w-60">
                    Add To Cart <ShoppingCart className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
