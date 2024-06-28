// componenetes simples 

import React from 'react';

function Tarea({tarea, marcarCompleto, eliminarTarea}){
    return(
        <div className='tarea' >
            <span>{tarea.texto}</span>
            <button onClick={()=>marcarCompleto(tarea.id)}>completado</button>
            <button onClick={()=>eliminarTarea(tarea.id)}>eliminar</button>
        </div>
    );
}


export default Tarea;