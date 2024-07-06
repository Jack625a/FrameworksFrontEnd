//PANTALLA EMERGENTE
import React from 'react';
function Modal({producto,cerrarPantalla}){
    if(!producto)
        return null;
    
    return(
        <div className='modal'>
            <div className='modal-contenido'>
            <h2>{producto.title}</h2>
            <img
                src={producto.url}
                alt={producto.title}
            />
            <br></br>
            <button onClick={cerrarPantalla} >Cerrar</button>
        </div>
        </div>  
    );
}
export default Modal;