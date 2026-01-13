import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="p-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Discover Smart Shopping with SmartMart
        </h2>
        <p className="text-lg">
          Your one-stop destination for modern tech products
        </p>
      </section>

      {/* 2. Features */}
      <section className="p-16">
        <h3 className="text-2xl font-bold mb-6">Why Choose SmartMart?</h3>
        <ul className="grid grid-cols-2 gap-4">
          <li>⚡ Fast & Secure Platform</li>
          <li>🎨 Modern UI with Next.js</li>
          <li>📦 Real-time Product Data</li>
          <li>🔒 Protected Admin Routes</li>
        </ul>
      </section>

      {/* 3. Categories */}
      <section className="p-16 bg-gray-100">
        <h3 className="text-2xl font-bold mb-6">Popular Categories</h3>
        <div className="flex gap-6">
          <div>💻 Electronics</div>
          <div>⌚ Wearables</div>
          <div>🎧 Accessories</div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="p-16">
        <h3 className="text-2xl font-bold mb-6">How It Works</h3>
        <ol className="list-decimal ml-6">
          <li>Browse Products</li>
          <li>View Product Details</li>
          <li>Admin Login</li>
          <li>Add New Products</li>
        </ol>
      </section>

      {/* 5. Popular Products */}
      <section className="p-16 bg-gray-100">
        <h3 className="text-2xl font-bold mb-6">Popular Products</h3>
        <p>Top trending products from SmartMart</p>
      </section>

      {/* 6. Testimonials */}
      <section className="p-16">
        <h3 className="text-2xl font-bold mb-6">What Our Users Say</h3>
        <p>“SmartMart is simple and powerful!”</p>
      </section>

      {/* 7. Call To Action */}
      <section className="p-16 bg-gray-900 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Start Your Smart Shopping Today
        </h3>
        <p>Explore products and manage inventory easily</p>
      </section>
    </div>
  );
}
