import Link from 'next/link';
import React from 'react';
import ProductCard from '../ProductCard';

const getProducts = async () => {
  const res = await fetch(`${process.env.PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });
  return res.json();
};

const PopularProducts = async () => {
  const products = await getProducts();
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Products
            </h3>
            <p className="text-gray-600">
              Top trending products handpicked for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/items"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularProducts;
