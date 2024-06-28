import React from 'react';

function ComponenteHijo({ nombre, precio, descripcion}){
    return(
        <div className='productos'>
            <h2>{nombre}</h2>
            <p>Precio: {precio} Bs</p>
            <p>{descripcion}</p>
        </div>
    );
}
export default ComponenteHijo;