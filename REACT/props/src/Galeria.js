//Componente Hijo
import React from "react";
import Imagen from './Imagen';

function Galeria({ imagenes }){
    return(
        <div className="galeria">
            {imagenes.map(imagen=>(
                <Imagen
                    key={imagen.id}
                    url={imagen.url}
                    titulo={imagen.titulo}
                />
            ))}
        </div>
    );
}
export default Galeria;