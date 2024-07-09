import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/img/logo.png'; // asegúrate de tener un logo en la carpeta assets

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div className="hidden md:flex space-x-4 font-family: 'PP Hatton', sans-serif ">
          <Link to="/" className="hover:text-orange-500 ">Inicio</Link>
          <Link to="/nosotros" className="hover:text-orange-500">Nosotros</Link>
          <Link to="/servicios" className="hover:text-orange-500">Servicios</Link>
          <Link to="/normativa" className="hover:text-orange-500">Normativa</Link>
          <Link to="/contactenos" className="hover:text-orange-500">Contáctenos</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white font-family: 'PP Hatton', sans-serif" >
          <Link to="/" className="block px-4 py-2 hover:bg-orange-500">Inicio</Link>
          <Link to="/nosotros" className="block px-4 py-2 hover:bg-orange-500">Nosotros</Link>
          <Link to="/servicios" className="block px-4 py-2 hover:bg-orange-500">Servicios</Link>
          <Link to="/normativa" className="block px-4 py-2 hover:bg-orange-500">Normativa</Link>
          <Link to="/contactenos" className="block px-4 py-2 hover:bg-orange-500">Contáctenos</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
