import React, {useState} from  'react';
import Producto from './Producto';


//Funcion ListaProductos
function ListaProductos(){
    //Manejo del estado inical con una lista productos
    const [productos,setProductos]=useState([
        {
           id: 1,
           nombre:'Producto 1',
           precio:100,
           descripcion:'Descripcion 1'
        },
        {
            id: 2,
            nombre:'Producto 2',
            precio:200,
            descripcion:'Descripcion 2'
         },
         {
            id: 3,
            nombre:'Producto 3',
            precio:300,
            descripcion:'Descripcion 3'
         },
         {
            id: 4,
            nombre:'Producto 4',
            precio:400,
            descripcion:'Descripcion 4'
         },
    ]);

    return(
        <div>
            <h1>Lista de Productos Disponibles</h1>
            <div className='lista-producto'>
                {productos.map(producto=>(
                    <Producto 
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        descripcion={producto.descripcion}
                    />

                    
                ))}

            </div>
        </div>
    );
}

export default ListaProductos;