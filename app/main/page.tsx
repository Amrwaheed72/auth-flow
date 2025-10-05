// 'use client';

// import { useState } from 'react';
// import {
//     ChevronLeft,
//     ChevronRight,
//     Heart,
//     Minus,
//     Plus,
//     ShoppingCart,
//     Star,
// } from 'lucide-react';
// import Image from 'next/image';

// const productImages = [
//     '/placeholder-hoodie-blue.jpg',
//     '/placeholder-hoodie-white.jpg',
//     '/placeholder-hoodie-red.jpg',
//     '/placeholder-hoodie-gray.jpg',
// ];

// const colors = [
//     { name: 'Red', hex: '#DC2626' },
//     { name: 'Blue', hex: '#3B82F6' },
//     { name: 'Gold', hex: '#CA8A04' },
//     { name: 'Sky', hex: '#0EA5E9' },
//     { name: 'Gray', hex: '#6B7280' },
// ];

// const reviews = [
//     {
//         name: 'Alex Daewn',
//         rating: 5,
//         date: '4 months ago',
//         comment:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
//     },
//     {
//         name: 'Alex Daewn',
//         rating: 5,
//         date: '4 months ago',
//         comment:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
//     },
//     {
//         name: 'Alex Daewn',
//         rating: 5,
//         date: '4 months ago',
//         comment:
//             'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
//     },
//     // ... more reviews
// ];

// const similarItems = [
//     // ... mock data for similar items
// ];

// // --- HELPER COMPONENTS ---

// const StarRating = ({ rating, count }: { rating: number; count?: number }) => (
//     <div className="flex items-center">
//         {[...Array(5)].map((_, i) => (
//             <Star
//                 key={i}
//                 className={`h-4 w-4 ${
//                     i < Math.floor(rating)
//                         ? 'fill-rose-400 text-rose-400'
//                         : 'text-gray-300'
//                 }`}
//             />
//         ))}
//         {count && <span className="ml-2 text-sm text-gray-500">({count})</span>}
//     </div>
// );


// const ProductDetailPage = () => {
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//     const [selectedColor, setSelectedColor] = useState(colors[1]);
//     const [quantity, setQuantity] = useState(1);

//     const handlePrevImage = () => {
//         setSelectedImageIndex((prev) =>
//             prev === 0 ? productImages.length - 1 : prev - 1,
//         );
//     };

//     const handleNextImage = () => {
//         setSelectedImageIndex((prev) =>
//             prev === productImages.length - 1 ? 0 : prev + 1,
//         );
//     };

//     const basePrice = 300.0;

//     return (
//         <div className="bg-white">
//             <div className="bg-gray-50 py-4">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <span>Home</span>
//                         <ChevronRight className="h-4 w-4" />
//                         <span>Our Category</span>
//                         <ChevronRight className="h-4 w-4" />
//                         <span className="font-medium text-gray-700">
//                             Product Details
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//                     {/* Image Gallery */}
//                     <div>
//                         <div className="relative aspect-square w-full overflow-hidden rounded-lg">
//                             <Image
//                                 src={productImages[selectedImageIndex]}
//                                 alt="Product Image"
//                                 fill
//                                 className="object-cover"
//                                 // Using a placeholder as a fallback
//                                 onError={(e) => {
//                                     e.currentTarget.src =
//                                         'https://placehold.co/600x600/e2e8f0/e2e8f0?text=.';
//                                 }}
//                             />
//                             <button
//                                 onClick={handlePrevImage}
//                                 className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/60 p-2 transition hover:bg-white"
//                             >
//                                 <ChevronLeft className="h-6 w-6" />
//                             </button>
//                             <button
//                                 onClick={handleNextImage}
//                                 className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/60 p-2 transition hover:bg-white"
//                             >
//                                 <ChevronRight className="h-6 w-6" />
//                             </button>
//                         </div>
//                         <div className="mt-4 grid grid-cols-4 gap-4">
//                             {productImages.map((img, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setSelectedImageIndex(index)}
//                                     className={`relative aspect-square w-full overflow-hidden rounded-md ring-2 ${selectedImageIndex === index ? 'ring-rose-500' : 'ring-transparent'}`}
//                                 >
//                                     <Image
//                                         src={img}
//                                         alt={`Thumbnail ${index + 1}`}
//                                         fill
//                                         className="object-cover"
//                                         onError={(e) => {
//                                             e.currentTarget.src =
//                                                 'https://placehold.co/150x150/e2e8f0/e2e8f0?text=.';
//                                         }}
//                                     />
//                                     {index === 3 && ( // Overlay for the "+2" image
//                                         <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-lg font-bold text-white">
//                                             +2
//                                         </div>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Product Info */}
//                     <div className="space-y-4">
//                         <div className="flex items-start justify-between">
//                             <div>
//                                 <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
//                                     T-Shirt
//                                 </span>
//                                 <h1 className="mt-2 text-2xl font-bold text-gray-800">
//                                     J.VER Man Shirts Solid Long Sleeve Stretch
//                                     Wrinkle-Free With Blue
//                                 </h1>
//                             </div>
//                             <div className="flex items-center gap-4">
//                                 <button className="rounded-full border p-2 hover:bg-gray-100">
//                                     <ShoppingCart className="h-5 w-5 text-gray-600" />
//                                 </button>
//                                 <button className="rounded-full border p-2 hover:bg-gray-100">
//                                     <Heart className="h-5 w-5 text-gray-600" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="flex items-baseline gap-2">
//                             <span className="text-3xl font-bold text-gray-900">
//                                 ${basePrice.toFixed(2)}
//                             </span>
//                             <span className="text-xl text-gray-400 line-through">
//                                 $360.00
//                             </span>
//                         </div>
//                         <p className="text-sm text-gray-500">
//                             This price is exclusive of taxes.
//                         </p>
//                         <p className="text-gray-600">
//                             Lorem ipsum dolor sit, consectetuer adipiscing elit,
//                             sed diam nonummy Lorem ipsum dolor sit amet, diam
//                             nonummy.
//                         </p>

//                         <div className="grid grid-cols-2 gap-4 pt-4">
//                             <div>
//                                 <label className="text-sm font-medium text-gray-700">
//                                     Type
//                                 </label>
//                                 <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-rose-500 focus:ring-rose-500 focus:outline-none">
//                                     <option>Cotton</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="text-sm font-medium text-gray-700">
//                                     Size
//                                 </label>
//                                 <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-rose-500 focus:ring-rose-500 focus:outline-none">
//                                     <option>2xl</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className="text-sm font-medium text-gray-700">
//                                 Colors
//                             </h3>
//                             <div className="mt-2 flex items-center gap-3">
//                                 {colors.map((color) => (
//                                     <button
//                                         key={color.name}
//                                         onClick={() => setSelectedColor(color)}
//                                         className={`h-8 w-8 rounded-full ring-2 ring-offset-2 ${selectedColor.name === color.name ? 'ring-rose-500' : 'ring-transparent'}`}
//                                         style={{ backgroundColor: color.hex }}
//                                         aria-label={color.name}
//                                     />
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between pt-4">
//                             <div className="flex items-center rounded-lg border border-gray-300">
//                                 <button
//                                     onClick={() =>
//                                         setQuantity((q) => Math.max(1, q - 1))
//                                     }
//                                     className="px-4 py-2 text-gray-600"
//                                 >
//                                     <Minus className="h-4 w-4" />
//                                 </button>
//                                 <span className="px-4 font-semibold">
//                                     {quantity.toString().padStart(2, '0')}
//                                 </span>
//                                 <button
//                                     onClick={() => setQuantity((q) => q + 1)}
//                                     className="px-4 py-2 text-gray-600"
//                                 >
//                                     <Plus className="h-4 w-4" />
//                                 </button>
//                             </div>
//                             <span className="text-xl font-semibold">
//                                 ${(basePrice * quantity).toFixed(2)}
//                             </span>
//                         </div>

//                         <button className="hover:bg-opacity-90 w-full rounded-lg bg-[#bc9b98] py-3 text-center font-semibold text-white transition">
//                             Add To Cart
//                         </button>
//                     </div>
//                 </div>

//                 {/* Rating & Reviews Section */}
//                 <div className="mt-16">
//                     <h2 className="mb-6 text-2xl font-bold text-gray-800">
//                         Rating & Reviews
//                     </h2>
//                     <div className="grid grid-cols-1 items-center gap-8 rounded-lg bg-gray-50 p-8 md:grid-cols-3">
//                         <div className="flex flex-col items-center justify-center">
//                             <span className="text-6xl font-bold text-gray-800">
//                                 4,5
//                             </span>
//                             <span className="text-gray-500">/5</span>
//                         </div>
//                         <div className="col-span-1 space-y-2 md:col-span-2">
//                             {/* Dummy rating bars */}
//                             {[
//                                 { stars: 5, percent: 67 },
//                                 { stars: 4, percent: 15 },
//                                 { stars: 3, percent: 6 },
//                                 { stars: 2, percent: 3 },
//                                 { stars: 1, percent: 9 },
//                             ].map((item) => (
//                                 <div
//                                     key={item.stars}
//                                     className="flex items-center gap-4"
//                                 >
//                                     <span className="flex items-center gap-1 text-sm">
//                                         {item.stars}{' '}
//                                         <Star className="h-4 w-4 text-yellow-400" />
//                                     </span>
//                                     <div className="h-2.5 w-full rounded-full bg-gray-200">
//                                         <div
//                                             className="h-2.5 rounded-full bg-yellow-400"
//                                             style={{
//                                                 width: `${item.percent}%`,
//                                             }}
//                                         ></div>
//                                     </div>
//                                     <span className="w-12 text-right text-sm text-gray-500">
//                                         %{item.percent}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 {/* Individual Reviews */}
//                 <div className="mt-8">
//                     {reviews.map((review, index) => (
//                         <div key={index} className="border-b py-6">
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-3">
//                                     <span className="font-semibold">
//                                         {review.name}
//                                     </span>
//                                     <StarRating rating={review.rating} />
//                                 </div>
//                                 <span className="text-sm text-gray-500">
//                                     {review.date}
//                                 </span>
//                             </div>
//                             <p className="mt-3 text-gray-600">
//                                 {review.comment}
//                             </p>
//                         </div>
//                     ))}
//                     <div className="mt-8 text-center">
//                         <button className="rounded-lg bg-gray-100 px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-200">
//                             View More Comments
//                         </button>
//                     </div>
//                 </div>

//                 {/* Similar Items Section */}
//                 <div className="mt-16">
//                     <h2 className="mb-6 text-2xl font-bold text-gray-800">
//                         Similar Items
//                     </h2>
//                     {/* Simplified for brevity, a real implementation would use a carousel library */}
//                     <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
//                         {/* Placeholder for similar item cards */}
//                         {[...Array(5)].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="space-y-2 rounded-lg border p-4"
//                             >
//                                 <div className="aspect-square rounded-md bg-gray-100"></div>
//                                 <h3 className="text-sm font-semibold">
//                                     J.VER Women's Dress
//                                 </h3>
//                                 <StarRating rating={4.5} count={2193} />
//                                 <div className="flex items-baseline gap-2">
//                                     <span className="font-bold">AED 900</span>
//                                     <span className="text-sm text-gray-400 line-through">
//                                         AED 1300
//                                     </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetailPage;
