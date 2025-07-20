import React from "react";

const Contact = () => (
  <section id="contact" className="section-padding bg-white">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-display">
          Kontakt
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-gray-800 mx-auto"></div>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4">
          Navštivte nás pro nový svěží vzhled!
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xl mb-6">
          <div>
            <span className="font-semibold">Místo:</span> Od permon dlouhá třída
            1228,
            <br />
            736 01 Havířov - Podlesí
          </div>
          <span className="hidden md:inline-block text-2xl">|</span>
          <div>
            <span className="font-semibold">Kontakt:</span>{" "}
            <a href="tel:776714838" className="text-red-600 hover:underline">
              776714838
            </a>
          </div>
        </div>

        {/* Otevírací doba - Chi tiết */}
        <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
          <h4 className="text-xl font-bold text-gray-800 mb-4">
            Otevírací doba
          </h4>
          <div className="space-y-2 text-lg">
            <div className="flex justify-between">
              <span className="font-medium">Po-pá:</span>
              <span className="text-gray-700">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sobota:</span>
              <span className="text-gray-700">09:00 - 12:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Ne:</span>
              <span className="text-red-600 font-semibold">zavřeno</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <iframe
          title="Mapa Nam HairSalon"
          src="https://maps.google.com/maps?q=Od%20permon%20dlouh%C3%A1%20t%C5%99%C3%ADda%201228%2C%20736%2001%20Havi%C5%99ov%20-%20Podles%C3%AD&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "1rem", maxWidth: 1000 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-center mt-4">
        <a
          href="https://maps.app.goo.gl/bxDAuBpeHg19vn7g9"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Otevřít v Google Maps
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
