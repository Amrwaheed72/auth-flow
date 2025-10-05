import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import StarRating from './StarRating';

const ItemCard = ({ item }) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-xl bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            {item.discount && (
                <div className="absolute top-3 left-3 z-10 rounded-md bg-white px-2 py-1 text-xs font-semibold text-rose-500 shadow-sm">
                    {item.discount}
                </div>
            )}
            <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100">
                    <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <button className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100">
                    <ShoppingCart className="h-4 w-4 text-gray-600" />
                </button>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="space-y-2 p-4">
                <p className="text-xs text-gray-500">Dresses</p>
                <h3 className="truncate text-sm font-semibold text-gray-800">
                    {item.title}
                </h3>
                <StarRating rating={item.rating} count={item.reviews} />
                <div className="flex items-baseline gap-2">
                    <span className="font-bold text-gray-800">
                        AED {item.price}
                    </span>
                    {item.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                            AED {item.oldPrice}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2 pt-1">
                    {item.colors.map((color) => (
                        <span
                            key={color}
                            className="h-5 w-5 rounded-full border"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                    <span className="text-xs text-gray-500">+2</span>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
