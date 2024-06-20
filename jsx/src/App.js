import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ListaProductos from "./listaProductos";

//JSX
//Todo en react se maneja con COMPONENTES
//Atributos - Variables and Funciones
/*
const titulo = <h1 className="saludar">Mi primer sitio Web en React ... Bienvenidos</h1>
const nombre = 'Jhimy Fuentes Rojas';
const saludar=()=>'Bienvenido al Modulo'

const elemento=(
  <div>
    <h1>{titulo}</h1>
    <h2>Hola, {nombre}</h2>
    <p>{saludar()}</p>
  </div>
);

// Condicionales en JSX -- no permiete utilizar if 

//OPERADORES TERNARIOS
const asistencia = true;
//CREAMOS NUESTRA CONDICIONAL
const control = (
  <div>
    <h1>{asistencia ? 'Asistio registrada': 'Asistencia No Registrada'}</h1>
  </div>
)

//OPERADORES DE CONECTIVIDAD  
const bienvenida = true;

const elementoBienveenida = (
  <div>
    {bienvenida && <h1>Bienvenido al Modulo</h1>}
  </div>
)

//LISTAS EN JSX
const colores=['Rojo', 'Verde', 'Azul', 'Amarillo'];

const listaColores=(
  <ul>
    {colores.map((color,index)=>(
      <li key={index}>{color}</li>
    ))}
  </ul>
);

//ESTILO
const estilo={
  color:'red',
  fontSize:'30px'
}

const diplimado=<h1 style={estilo}>Diplomado en Diseño y Desarrollo Web</h1>

//MANEJO DE EVENTOS EN JSX similar en js
function boton(){
  alert('Realizo un CLICK');
}

const boton=<button onClick={boton}>Boton Prueba</button>;
*/
function App() {
  return (
    <div className="App">
        <ListaProductos>

        </ListaProductos>
    </div>
  );
}

export default App;
