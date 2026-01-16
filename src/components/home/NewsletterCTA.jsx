import React from 'react';

const NewsletterCTA = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl p-12 text-center shadow-md">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with SmartMart
            </h3>

            <p className="text-gray-600 mb-8">
              Subscribe to get updates on new products and features.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterCTA;
