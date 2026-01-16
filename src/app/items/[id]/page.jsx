import Link from 'next/link';
import React from 'react';

const getProduct = async (id) => {
  const res = await fetch(`${process.env.PUBLIC_BASE_URL}/api/products/${id}`, {
    cache: 'no-store',
  });
  return res.json();
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Link
          href="/items"
          className="inline-block mb-6 text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to Products
        </Link>

        <div className="bg-white shadow-md rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div>
              <span className="inline-block my-4 text-sm bg-blue-100 text-gray-700 px-4 pt-1 rounded-full">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              <p className="text-2xl font-semibold text-gray-900 mb-6">
                ${product.price}
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                  Add to Cart
                </button>

                <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
