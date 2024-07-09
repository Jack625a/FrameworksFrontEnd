import React from 'react';

const Contactenos = () => {
  return (
    <section id="contactenos" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Contáctenos</h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around">
          <div className="w-full md:w-1/2 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799193797!2d-74.25987568762116!3d40.69714942213459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2467d22ff0f63%3A0x1c42b9926f66c31!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620322353981!5m2!1sen!2sus"
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
