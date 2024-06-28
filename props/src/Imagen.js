//Componente Funcional
import React from "react";
function Imagen({url,titulo}){
    return(
        <div className="imagen">
            <img 
                src={url}
                alt={titulo}
            />
            <p>{titulo}</p>
        </div>
    );
}
export default Imagen;