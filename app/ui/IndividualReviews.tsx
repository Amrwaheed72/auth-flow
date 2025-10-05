import { reviews } from "../lib/constants";
import StarRating from "./StarRating";

const IndividualReviews = () => {
    return (
        <div className="mt-8">
            {reviews.map((review, index) => (
                <div key={index} className="border-b-1 border-gray-300 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold">{review.name}</span>
                            <StarRating rating={review.rating} />
                        </div>
                        <span className="text-sm text-gray-500">
                            {review.date}
                        </span>
                    </div>
                    <p className="mt-3 text-gray-600">{review.comment}</p>
                </div>
            ))}
            <div className="mt-8 text-center">
                <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-gray-200">
                    View More Comments
                </button>
            </div>
        </div>
    );
};

export default IndividualReviews;
