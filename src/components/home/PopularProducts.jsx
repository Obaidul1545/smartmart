import Link from 'next/link';
import React from 'react';
import ProductCard from '../ProductCard';

const PopularProducts = () => {
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product Card */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
