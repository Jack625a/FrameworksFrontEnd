import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import BarraNavegacion from './BarraNavegacion';
import Categorias from './Categorias';
import Galeria from './Galeria';
import ListaProductos from './ListaProductos';
import Modal from './Modal';
import PruebaEstilos from './PruebaEstilos';


/*
  Prueba useRef
import PruebaRef from './PruebaRef';
<h1>Prueba</h1>
      <PruebaRef/>*/

function App() {
  const [categoria,setCategoria]=useState(0);
  const [productoSeleccionado,setProductoSeleccionado]=useState(null);

  const categorias=[
    {id:0, nombre:'Todos'},
    {id:1, nombre:'Categoria 1'},
    {id:2, nombre:'Categoria 2'},
    {id:3, nombre:'Categoria 3'},
    {id:4, nombre:'Categoria 4'},
  ];
  return(
    <div className='App'>
      <BarraNavegacion/>
      <header>
        <h1>Tienda de Productos</h1>
        <Galeria/>
      </header>
        <Categorias
          categorias={categorias}
          setCategorias={setCategoria}
        />
        <ListaProductos
          categoria={categoria}
          seleccionarProducto={setProductoSeleccionado}
        />
        <Modal
          producto={productoSeleccionado}
          cerrarPantalla={()=>setProductoSeleccionado(null)}
        />
    </div>
  );
}
  
export default App;
