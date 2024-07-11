import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 text-xs">
      <div className="container mx-auto flex justify-between">
        <div className='flex mx-auto space-x-3 px-4 justify-between items-center'>
          <p> Teléfono: 44333305</p>
          <p> Email: jointcommercesrl@gmail.com</p>
          <p> Celular: (+591)68168668</p>
          <p> Correo: jointcommercesrl@gmail.com</p>
          <p> Dirección: Av. Ballivián N# 688 P.5 Of.7</p>
          <p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Facebook</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
