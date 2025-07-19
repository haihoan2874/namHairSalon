// src/components/Prices.jsx
import React from "react";

const services = [
  { name: "DĚTSKÝ KLASIC (1–10 LET)", price: "170 Kč" },
  { name: "PÁNSKÉ KLASIC STŘIH", price: "220 Kč" },
  { name: "PÁNSKÉ DŮCHODCE", price: "170 Kč" },
  { name: "DÁMSKÉ STŘIH", price: "200–250 Kč" },
  { name: "STŘIH BABER (FADE)", price: "270–320 Kč" },
  { name: "STŘIH A ÚPRAVA VOUSŮ", price: "320–420 Kč" },
  { name: "ÚPRAVA VOUSŮ", price: "150 Kč" },
  { name: "BARVENÍ VLASŮ", price: "500–700 Kč" },
  { name: "BARVENÍ VOUSŮ", price: "200 Kč" },
  { name: "TRVALÁ ONDULACE", price: "1200–1500 Kč" },
  { name: "MYTÍ HLAVY", price: "70 Kč" },
  { name: "BOČNÍ LINKO VE STŘIHU", price: "ZDARMO" },
  { name: "ZAROVNÁNÍ OBOČÍ", price: "ZDARMO" },
  { name: "STYLING VLASU", price: "ZDARMO" },
];

const Prices = () => (
  <section id="prices" className="section-padding bg-white">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-display">
          Ceník Služeb
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-gray-800 mx-auto"></div>
      </div>
      <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8">
        <table className="w-full text-left">
          <tbody>
            {services.map((service, idx) => (
              <tr
                key={service.name}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4 font-medium text-gray-700">
                  {service.name}
                </td>
                <td className="py-3 px-4 text-red-600 font-semibold text-right">
                  {service.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-400 mt-4">
          * Ceny se mohou lišit podle délky a stavu vlasů
        </p>
      </div>
    </div>
  </section>
);

export default Prices;
