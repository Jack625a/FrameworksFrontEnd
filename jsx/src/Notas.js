
//Importacion
import React from 'react';

 function Nota({ nota,eliminarNota }){
    return(
        <div className='nota'>
            <p>{nota.texto}</p>
            <button onClick={()=>eliminarNota(nota.id)}>Eliminar 🗑️</button>
        </div>
    );
 }

 export default Nota;