import React from 'react'

function Producto({nombre, precio, descripcion}){
    return (
        <div className='producto'>
            <h1>{nombre}</h1>
            <p>{descripcion}</p> 
            <p>Precio: {precio}Bs.</p>   
        </div>
    );
}

//esta funcion luego lo renderizamos
export default Producto;  //exportamos la funcion para que pueda ser utilizada en otros archivos.