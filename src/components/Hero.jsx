/*eslint-disable */
import React from "react";
import { FaPaintBrush, FaBolt, FaTools } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to the QR Code Generator
        </h1>
        <p className="text-lg mb-6">
          Create dynamic QR codes effortlessly for your business, events, and more!
        </p>
        <a
          href="/qrCode"
          className="bg-white text-blue-600 py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Our QR Code Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaPaintBrush className="text-blue-500 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customizable Designs</h3>
              <p>
                Tailor your QR codes with custom colors, logos, and sizes to suit
                your brand.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaBolt className="text-yellow-500 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p>
                Generate QR codes instantly with a user-friendly interface.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaTools className="text-green-500 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Versatile Uses</h3>
              <p>
                Perfect for URLs, Wi-Fi access, contact information, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Generate Your QR Code?</h2>
        <p className="mb-6">
          Click the button below to start creating custom QR codes for all your needs.
        </p>
        <a
          href="/qrCode"
          className="bg-white text-blue-600 py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Start Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Dynamic QR Code Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Hero;
