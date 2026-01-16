import Link from 'next/link';
import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover hover:scale-105 transition-all"
      />
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          {item.name}
        </h4>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-gray-900">${item.price}</span>
          <Link
            href={`/items/${item._id}`}
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
