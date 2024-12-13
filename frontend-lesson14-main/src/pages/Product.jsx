import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", description: "Bu mahsulot 1" },
  { id: 2, name: "Product 2", description: "Bu mahsulot 2" },
  { id: 3, name: "Product 3", description: "Bu mahsulot 3" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto mt-8 p-6 bg-red-100 border-l-4 border-red-500 text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Product Not Found</h2>
        <p className="text-lg">Sorry, the product you are looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
