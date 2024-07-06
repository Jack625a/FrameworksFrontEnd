//Componentes simples.
//Importar dependencias
import React from 'react';

function Tarea({tarea, marcarCompleto, eliminarTarea}){
    return(
        <div className='tarea'>
            <span>{tarea.texto}</span>
            <button onClick={()=>marcarCompleto(tarea.id)}>Completado ✔️</button>
            <button onClick={()=>eliminarTarea(tarea.id)}>Eliminar ❌ </button>
        </div>
    );
}

export default Tarea;
