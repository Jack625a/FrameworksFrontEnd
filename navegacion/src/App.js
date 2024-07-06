import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BarraNavegacion from './BarraNavegacion';
import Contactos from './Contactos';
import Detalle from './Detalle';
import Productos from './Productos';
import Inicio from './Incio';



function App() {
  return (
     <div className='App'>
      <BarraNavegacion/>
      <Routes>
        <Route
          path='/' Component={Inicio}
        />
        <Route path='/contactos' Component={Contactos}/>
        <Route path='/productos' Component={Productos}/>
        <Route path='/detalle' Component={Detalle}/>
      </Routes>

     </div>
  );
}

export default App;
