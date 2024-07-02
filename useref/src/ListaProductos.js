import React,  {useState,useEffect} from 'react';

function ListaProductos({categoria, seleccionarProducto}){
    const [productos,setProductos]=useState([]);

    useEffect(()=>{
        const obtenerProductos=async ()=>{
            const respuesta=await fetch('https://jsonplaceholder.typicode.com/photos');
            const datos=await respuesta.json();
            setProductos(datos.slice(0,10));
        };
        obtenerProductos();
    },[]);

    return(
        <div className='productos'>
            {productos.filter(producto=>producto.albumId===categoria || categoria===0)
            .map(producto=>(
                <Producto
                    key={producto.id}
                    producto={producto}
                    seleccionarProducto={seleccionarProducto}
                />
            ))}
        </div>
    );
}
function Producto({producto,seleccionarProducto}){
    return(
        <div className='producto'
        onClick={()=>seleccionarProducto(producto)}
        >
            <img
                src={producto.url}
                alt={producto.title}
            />
            <h2>{producto.title}</h2>
        </div>
    );
}
export default ListaProductos;