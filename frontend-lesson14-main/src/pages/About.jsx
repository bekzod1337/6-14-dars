import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our company! We are dedicated to providing high-quality products and services that make a difference in the lives of our customers. Our mission is to innovate, improve, and exceed expectations in every project we undertake.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-4">
        We strive to lead the industry by providing exceptional customer service, innovative solutions, and a commitment to sustainability. Our goal is to create long-lasting relationships with our clients and continuously improve our products to meet their evolving needs.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Innovation: We embrace creativity and new ideas to solve problems.</li>
        <li>Integrity: We uphold transparency and honesty in everything we do.</li>
        <li>Quality: We never compromise on the quality of our products and services.</li>
        <li>Customer Focus: We are committed to understanding and exceeding customer expectations.</li>
      </ul>
    </div>
  );
}
