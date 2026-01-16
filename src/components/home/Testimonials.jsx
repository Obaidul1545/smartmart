import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h3>
            <p className="text-gray-600">
              Trusted by developers and shoppers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <p className="text-gray-600 mb-4">
                “SmartMart has a clean UI and smooth experience. Very well
                built.”
              </p>
              <h4 className="font-semibold text-gray-900">— John Doe</h4>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <p className="text-gray-600 mb-4">
                “I really liked the product structure and admin features.”
              </p>
              <h4 className="font-semibold text-gray-900">— Sarah Ahmed</h4>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <p className="text-gray-600 mb-4">
                “Perfect example of a modern Next.js application.”
              </p>
              <h4 className="font-semibold text-gray-900">— Michael Lee</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
