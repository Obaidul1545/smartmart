import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        alt="Laptop"
        className="w-full h-48 object-cover hover:scale-105 transition-all"
      />
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Smart Laptop Pro
        </h4>
        <p className="text-gray-600 text-sm mb-4">
          High-performance laptop for professionals.
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">$1299</span>
          <Link
            href="/items"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
