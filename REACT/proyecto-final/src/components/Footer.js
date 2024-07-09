import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <h4 className="font-bold mb-4">Secciones</h4>
          <ul>
            <li><Link to="/" className="hover:text-orange-500">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-orange-500">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-orange-500">Servicios</Link></li>
            <li><Link to="/normativa" className="hover:text-orange-500">Normativa</Link></li>
            <li><Link to="/contactenos" className="hover:text-orange-500">Contáctenos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contacto</h4>
          <p>Teléfono: 44333305</p>
          <p>Celular: (+591)68168668</p>
          <p>Correo: jointcommercesrl@gmail.com</p>
          <p>Dirección: Av. Ballivián N# 688 P.5 Of.7</p>
          <p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Facebook</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
