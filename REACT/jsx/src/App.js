import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListaProductos from './ListaProductos';
import ListaTareas from './ListaTareas';
import ListaNotas from './ListaNotas';


//Introduccion JSX
//Componentes
// Atributos - Variables - Funciones
/*
const titulo=<h1 className="saludar">Primer Sitio Web en React... Bienvenidos</h1>;
const nombre='Kevin Arroyo';
const saludar=()=>'Bienvenido al Modulo';

const elemento=(
  <div>
    <h1>{titulo}</h1>
    <p>Hola, {nombre}</p>
    <p>{saludar}</p>
  </div>
);

//Condicionales en JSX -- OPERADORES TERNARIOS 
//Operadores ternarios
const asistencia=true;

const control=(
  <div>
    <h1>{asistencia ? 'Asistencia registrada': 'Asistencia no registrada'}</h1>
  </div>
);
//Operadores de Conectividad &&
const bienvenida=true;

const elementosBienvenida=(
  <div>
    {bienvenida && <h1>Bienvenido al Modulo</h1>}
  </div>
);

//Listas en JSX
const colores=['Rojo','Verde','Azul','Amarillo'];

const listaColores=(
  <ul>
    {colores.map((color,indice)=>(
      <li key={indice}>{color}</li>
    ))}
  </ul>
);

const estilo={
  color:'red',
  fontSize:'30px'
};

const diplomado=<h1 style={estilo}>Diplomado en Diseño y Desarrollo Web</h1>



//Manejo de eventos en JSX 
function boton(){
  alert('REALIZO UN CLICK');
}

const boton=<button onClick={boton}>Boton Prueba</button>;

*/


function App() {
  return (
    <div className='App'>
      <ListaProductos/>
      <ListaTareas/>
      <ListaNotas/>
    </div>
  );
}

export default App;
