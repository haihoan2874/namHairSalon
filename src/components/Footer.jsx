// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 mt-12">
    <div className="container-custom flex flex-col md:flex-row justify-between items-center">
      <div>© {new Date().getFullYear()} Nam HairSalon</div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a
          href="https://www.facebook.com/profile.php?id=61553426511195"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Facebook
        </a>
        <a
          href="https://maps.app.goo.gl/bxDAuBpeHg19vn7g9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          Google Maps
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
