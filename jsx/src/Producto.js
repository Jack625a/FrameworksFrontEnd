import React from "react";

function Producto({nombre,precio,descripcion}){
    return(
        <div className="producto"> 
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>Precio: {precio}Bs</p>
        </div>
    );
}

export default Producto;