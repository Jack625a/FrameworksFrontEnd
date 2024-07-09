import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
return(
    <nav className='navbar'>
      <div >
        
        <div className='divbar' >
          <Link to="/" className="divbar">Inicio</Link>
          <Link to="/About" className="divbar">Nosotros</Link>
          <Link to="/Contact" className="divbar">Contáctenos</Link>
        </div>
        
      </div>
      
    </nav>
);

};

export default NavBar;
