import React,{useEffect,useState} from "react";
import Producto from './Producto';
import axios from 'axios';


function Productos(){
    const [productos,setProductos]=useState([]);
    const [filtro,setFiltro]=useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response=>{
                setProductos(response.data.slice(0,50));
            })
            .catch(error=>{
                console.error('Error al obtener los productos: ',error);
            });
    },[]);
    const productosFiltrados=filtro ? productos.filter(producto=>producto.title.includes(filtro)):productos;
    return(
        <div className="p-5">
            <h1 className="text-3xl font-bold mt-3 mb-4">Lista de Productos</h1>
            <input
                type="text"
                placeholder="Filtrar por titulo"
                value={filtro}
                className="mb-4 p-2 border border-gray-400 rounded-md w-56"
                onChange={(e)=>setFiltro(e.target.value)}
            />
            <div className="grid grid-cols-3 mt-4">
                {productosFiltrados.map(producto=>{
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                })}
            </div>
        </div>
    );
}
export default Productos;