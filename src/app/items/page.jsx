import Link from 'next/link';
import React from 'react';

const getProducts = async () => {
  const res = await fetch('', {
    cache: 'no-store',
  });
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">SmartMart Products</h1>

      <div className="grid grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border p-4 shadow-sm">
            <img src={item.image} className="h-40 w-full object-cover mb-3" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>

            <Link
              href={`/items/${item.id}`}
              className="text-blue-600 mt-2 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
