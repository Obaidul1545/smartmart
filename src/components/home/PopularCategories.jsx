import React from 'react';

const PopularCategories = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h3>
            <p className="text-gray-600">
              Explore products from our most popular categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-8 text-center cursor-pointer hover:shadow-lg transition">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-lg font-semibold text-gray-900">
                Electronics
              </h4>
            </div>

            <div className="bg-white shadow-md rounded-xl p-8 text-center cursor-pointer hover:shadow-lg transition">
              <div className="text-4xl mb-4">⌚</div>
              <h4 className="text-lg font-semibold text-gray-900">Wearables</h4>
            </div>

            <div className="bg-white shadow-md rounded-xl p-8 text-center cursor-pointer hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎧</div>
              <h4 className="text-lg font-semibold text-gray-900">
                Accessories
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCategories;
