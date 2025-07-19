// src/components/About.jsx
import React from "react";

const About = () => (
  <section id="about" className="section-padding bg-gray-100">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-display">
          O Nás
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-gray-800 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Nam HairSalon - Profesionální péče o muže
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Vítejte v Nam HairSalon, kde se specializujeme na mužské střihy,
            úpravu vousů a kompletní péči o mužský vzhled. Naše zkušenosti a
            tradiční techniky kombinujeme s moderními trendy pro dokonalý
            výsledek.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Náš tým profesionálních barberů má dlouholeté zkušenosti a neustále
            se vzdělává v nejnovějších technikách. Používáme kvalitní produkty a
            dbáme na každý detail, aby každý klient odcházel spokojený a
            sebevědomý.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">5+</div>
              <div className="text-gray-600">Let zkušeností</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-600">Spokojených klientů</div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-br from-red-500 to-gray-800 p-1 rounded-2xl">
            <img
              src="/gallery/about.jpg"
              alt="Nam HairSalon"
              className="rounded-2xl object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
