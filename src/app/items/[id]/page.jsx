import Link from 'next/link';
import React from 'react';

const getProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: 'no-store',
  });
  return res.json();
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
        <Link
          href="/items"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-95 object-cover rounded-md"
            />
          </div>

          {/* Info */}
          <div>
            <span className="inline-block text-sm bg-gray-200 px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

            <p className="text-2xl font-semibold text-gray-900 mb-4">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800">
                Add to Cart
              </button>

              <button className="border border-gray-900 px-6 py-3 rounded hover:bg-gray-100">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
