import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />             
            <Route path="/contactenos" element={<Contactenos />} />   
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
