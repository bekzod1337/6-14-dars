import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Suspense
          fallback={
            <div className="text-center mt-8 text-xl font-semibold text-blue-500">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <div className="container mx-auto px-4 py-8">
                  <Home />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="container mx-auto px-4 py-8">
                  <About />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="container mx-auto px-4 py-8">
                  <Contact />
                </div>
              }
            />
            <Route
              path="/products"
              element={
                <div className="container mx-auto px-4 py-8">
                  <Products />
                </div>
              }
            />
            <Route
              path="/products/:id"
              element={
                <div className="container mx-auto px-4 py-8">
                  <Product />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
