// src/components/Banner.jsx
import React from "react";

const Banner = () => {
  const handleBookingClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const handlePricesClick = () => {
    document.getElementById("prices")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-8 h-32 bg-gradient-to-b from-red-500 via-white to-blue-500 rounded-full opacity-30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 bg-opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 bg-opacity-20 rounded-full blur-xl"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-wide drop-shadow-lg">
          Nam HairSalon
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-light">
          Profesionální péče o vlasy a vousy
        </p>
        <p className="text-lg mb-8 opacity-90">
          Kvalita • Profesionalita • Tradice
        </p>
        <div className="space-x-4">
          <button className="btn-primary" onClick={handleBookingClick}>
            Rezervovat
          </button>
          <button className="btn-secondary" onClick={handlePricesClick}>
            Ceník služeb
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
