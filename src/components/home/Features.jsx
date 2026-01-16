import React from 'react';

const Features = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Why Choose SmartMart?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SmartMart is built using modern technologies to ensure speed,
              security, and a smooth user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Performance
              </h4>
              <p className="text-gray-600 text-sm">
                Optimized with Next.js App Router for blazing-fast load times.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Secure Authentication
              </h4>
              <p className="text-gray-600 text-sm">
                Protected admin routes using cookie-based authentication.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">📦</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Dynamic Products
              </h4>
              <p className="text-gray-600 text-sm">
                Products fetched and managed through API endpoints.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Clean UI Design
              </h4>
              <p className="text-gray-600 text-sm">
                Minimal and professional interface built with Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
