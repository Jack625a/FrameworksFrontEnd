import React from 'react';
import ComponenteHijo from './componenteHijo';
import ListaTareas from './ListaTareas';
import './App.css';

function App(){
  const producto={
    nombre:'Producto 1',
    precio: 20,
    descripcion:'Descripcion 1'
  };
  const tareas=[
    {id:1,titulo:'Tarea 1',completada:false},
    {id:2,titulo:'Tarea 2',completada:true},
    {id:3,titulo:'Tarea 3',completada:false},
  ];
  return(
    <div className='App'>
      <h1>Lista de Productos</h1>
      <ComponenteHijo
        nombre={producto.nombre}
        precio={producto.precio}
        descripcion={producto.descripcion}
      />
      <h2>Lista de Tareas</h2>
      <ListaTareas
      tareas={tareas}
      />
    </div>
  );
}

export default App;