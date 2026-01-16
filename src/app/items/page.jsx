import ProductCard from '@/components/ProductCard';
import React from 'react';

const getProducts = async () => {
  const res = await fetch(`${process.env.PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });
  return res.json();
};

// const products = [
//   {
//     name: 'Smartphone Pro X',
//     price: 899,
//     category: 'Electronics',
//     description:
//       'High-performance smartphone with AMOLED display, powerful processor, and long-lasting battery.',
//     image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
//   },
//   {
//     name: 'Wireless Headphones',
//     price: 199,
//     category: 'Electronics',
//     description:
//       'Noise-cancelling wireless headphones with crystal clear sound and comfort fit.',
//     image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
//   },
//   {
//     name: 'Smart Watch Series 5',
//     price: 299,
//     category: 'Wearables',
//     description:
//       'Track your fitness, heart rate, and notifications with this modern smart watch.',
//     image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
//   },
//   {
//     name: 'Gaming Laptop',
//     price: 1499,
//     category: 'Electronics',
//     description:
//       'High-end gaming laptop with RTX graphics and ultra-fast performance.',
//     image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
//   },
//   {
//     name: 'Bluetooth Speaker',
//     price: 129,
//     category: 'Accessories',
//     description:
//       'Portable Bluetooth speaker with deep bass and 12-hour battery life.',
//     image: 'https://images.unsplash.com/photo-1585386959984-a41552231693',
//   },
//   {
//     name: 'Wireless Keyboard & Mouse',
//     price: 79,
//     category: 'Accessories',
//     description:
//       'Ergonomic wireless keyboard and mouse combo for productivity.',
//     image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
//   },
// ];

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold my-10">SmartMart Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
