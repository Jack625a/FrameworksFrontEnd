import logo from './logo.svg';
import './App.css';

import React from 'react';
import ListaProductos from './ListaProductos';

/*
const titulo=<h1 className='saludar'>PRIMER WEB</h1>;
const nombre='kevin arroyo';
const saludar=()=>'Bienvenido al modulo';

const elemento=(
  <div>
    <h1>{titulo}</h1>
    <p>hola, {nombre}</p>
    <p>{saludar}</p>
  </div>
);


//Introduccion JSX
//condicionales en JSX -- operadores terminrarios

const asistencia=true;

const control=(
  <diV>
    <h1>
      {asistencia ? 'Asistencia registrada': 'Asistencia no registrada'}
    </h1>
  </diV>
);

//Operadores de conectividad && 
const bienvenidad=true;

const elementosBienvenidad=(
  <div>
    {bienvenidad && <h1>Bienvenido al modulo</h1>}
  </div>
);


//estrductura de listas JSX
const colores=['Rojo', 'Verde', 'Azul', 'Amarillo'];

const listaColores=(
  <ul>
    {colores.map((color,index)=>(
      <li key={colores}>{color}</li>
    ))}
  </ul>
  );


  const estilo={
    color:'red',
    fontSize: '30px'
  }


  const diplomado=<h1 style={estilo}>Diplomado en diseno y desarrollo web</h1>

//manejo de eventos en JSX
function boton() {
  alert('Realizo un click');
}


const boton=<button onClick={boton}>boton de prueba</button>
*/

function App() {
    return (
     <div className='App'>
      <ListaProductos>
        
      </ListaProductos>
     </div>
    );
  }

export default App;
