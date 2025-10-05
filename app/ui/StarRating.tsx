import { Star } from 'lucide-react';

const StarRating = ({ rating, count }: { rating: number; count?: number }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
            />
        ))}
        {count && <span className="ml-2 text-sm text-gray-500">({count})</span>}
    </div>
);
export default StarRating;
