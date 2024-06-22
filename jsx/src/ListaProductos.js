import React, {useState} from "react";

import Producto from "./Producto";

function ListaProductos(){
    const[productos,setProductos]=useState([
        {
            id: 1,
            nombre: 'Producto 1',
            precio:100,
            descripcion:'Descripcion 1'
        
        },
        {
            id: 2,
            nombre: 'Producto 2',
            precio:100,
            descripcion:'Descripcion 2'
        
        },
        {
            id: 3,
            nombre: 'Producto 3',
            precio:100,
            descripcion:'Descripcion 3'
        
        },
    ]);

    return(
        <div>
            <h1 Listta de productos disponibles></h1>
            <div className='lista-producto'>
                {productos.map(producto=>(
                    <Producto 
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    descripcion={producto.descripcion}>
                    </Producto>
                ))}
            </div>
        </div>
    )
}

export default ListaProductos;