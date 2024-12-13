import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

export default function Products() {
  return (
    <div className="container mx-auto mt-8 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h2>
            <Link
              to={`/products/${product.id}`}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
