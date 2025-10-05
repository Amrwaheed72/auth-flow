import { MessageCircle, Star } from 'lucide-react';

const ratings = [
    { stars: 5, percent: 67 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 9 },
];

const RatingReviews = () => {
    return (
        <div className="mt-16 pt-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Rating & Reviews
            </h2>

            <div className="grid grid-cols-1 items-center gap-8 rounded-lg p-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center border-b pb-4 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0">
                    <span className="text-6xl font-bold text-gray-800">
                        4,5
                    </span>
                    <span className="text-gray-500">/5</span>
                </div>

                <div className="col-span-1 space-y-2">
                    {ratings.map((item) => (
                        <div
                            key={item.stars}
                            className="flex items-center gap-4"
                        >
                            <span className="flex items-center gap-1 text-sm">
                                {item.stars}{' '}
                                <Star className="h-4 w-4 fill-rose-300 text-rose-300" />
                            </span>
                            <div className="h-2.5 w-full rounded-full bg-gray-200">
                                <div
                                    className="h-2.5 rounded-full bg-rose-300"
                                    style={{
                                        width: `${item.percent}%`,
                                    }}
                                ></div>
                            </div>
                            <span className="w-12 text-right text-sm text-gray-500">
                                %{item.percent}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 border-t pt-4 md:border-t-0 md:pt-0 lg:pl-8">
                    <div className="text-center">
                        <p className="font-semibold text-gray-600">
                            Total Reviews
                        </p>
                        <p className="text-4xl font-bold text-gray-800">3.0K</p>
                    </div>
                    <button className="hover:bg-opacity-90 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-rose-400 py-3 text-center font-semibold text-white transition md:w-48">
                        Add Comment <MessageCircle className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingReviews;
