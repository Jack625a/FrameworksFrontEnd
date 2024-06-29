import React from 'react';
function Comentario({autor,texto}){
    return(
        <div className='comentario'>
            <h3>{autor}</h3>
            <p>{texto}</p>
        </div>
    );
}
export default Comentario;