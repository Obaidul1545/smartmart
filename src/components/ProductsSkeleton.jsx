import React from 'react';

const ProductsSkeleton = () => {
  return (
    <div className="p-4 shadow-sm animate-pulse">
      <div className="h-40 w-full bg-gray-300 mb-3" />

      <div className="h-5 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />

      <div className="h-4 bg-gray-200 rounded w-1/3" />
    </div>
  );
};

export default ProductsSkeleton;
