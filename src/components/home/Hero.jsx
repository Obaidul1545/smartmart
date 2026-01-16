import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Discover Smart Shopping <br />
              with <span className="text-blue-600">SmartMart</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Your one-stop destination for modern, reliable, and affordable
              tech products. Browse, compare, and shop smarter.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="/items"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Browse Products
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Smart shopping"
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
