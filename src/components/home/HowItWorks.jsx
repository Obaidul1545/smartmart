import React from 'react';

const HowItWorks = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How SmartMart Works
            </h3>
            <p className="text-gray-600">
              Shopping made simple in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl font-bold mb-4">1</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Browse Products
              </h4>
              <p className="text-gray-600 text-sm">
                Explore a wide range of tech products curated for you.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl font-bold mb-4">2</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                View Details
              </h4>
              <p className="text-gray-600 text-sm">
                Check product details, pricing, and specifications.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl font-bold mb-4">3</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Manage Products
              </h4>
              <p className="text-gray-600 text-sm">
                Admins can securely add and manage products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
