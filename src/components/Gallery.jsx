// src/components/Gallery.jsx
import React, { useState } from "react";

const images = [
  import.meta.env.BASE_URL + "gallery/1.png",
  import.meta.env.BASE_URL + "gallery/2.png",
  import.meta.env.BASE_URL + "gallery/3.png",
  import.meta.env.BASE_URL + "gallery/4.png",
  import.meta.env.BASE_URL + "gallery/5.png",
  import.meta.env.BASE_URL + "gallery/6.png",
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const openLightbox = (src) => {
    setCurrentImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-display">
            Galerie
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-gray-800 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              className="overflow-hidden rounded-xl shadow group focus:outline-none"
              onClick={() => openLightbox(src)}
              aria-label={`Xem ảnh tóc đẹp ${idx + 1}`}
            >
              <div className="relative">
                <img
                  src={src}
                  alt={`Tóc đẹp ${idx + 1}`}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                  <svg
                    className="opacity-0 group-hover:opacity-100 w-8 h-8 text-white transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553 4.553a1.5 1.5 0 01-2.121 2.121L13 12.121m-2.121 2.121a1.5 1.5 0 01-2.121-2.121L9 10m6 0V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v4m0 0l-4.553 4.553a1.5 1.5 0 002.121 2.121L11 12.121"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-all">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
              onClick={closeLightbox}
              aria-label="Đóng ảnh lớn"
            >
              &times;
            </button>
            <img
              src={currentImg}
              alt="Ảnh lớn gallery"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg border-4 border-white"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
