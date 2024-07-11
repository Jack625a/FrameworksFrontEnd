import React from 'react';

const Contactenos = () => {
  return (
    <section id="contactenos" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Contáctenos</h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around">
          <div className="w-full md:w-1/2 p-4">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=AVENIDA%20JOSE%20BALLIVIAN+(JOINT%20COMMERCE)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
            <div className="mt-4 text-left">
              <p><strong>Teléfono:</strong> 44333305</p>
              <p><strong>Celular:</strong> (+591)68168668</p>
              <p><strong>Correo electrónico:</strong> jointcommercesrl@gmail.com</p>
              <p><strong>Dirección:</strong> Av. Ballivián N# 688 P.5 Of.7</p>
              <p><strong>Sitio web:</strong> www.xxxx.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <form action="https://formspree.io/f/yourFormId" method="POST" className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-left mb-2">Nombre:</label>
                <input type="text" id="name" name="name" className="w-full p-2 rounded border" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-left mb-2">Correo Electrónico:</label>
                <input type="email" id="email" name="email" className="w-full p-2 rounded border" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-left mb-2">Mensaje:</label>
                <textarea id="message" name="message" className="w-full p-2 rounded border" required></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white py-2 rounded">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactenos;
