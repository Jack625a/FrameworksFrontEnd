import React from 'react';
import Tarea from './Tarea';

function ListaTareas({tareas}){
    return(
        <div className='lista-tareas'>
            {tareas.map(tarea=>(
                <Tarea
                    key={tarea.id} 
                    titulo={tarea.titulo} 
                    completada={tarea.completada}
                />
            ))}
        </div>
    );
}
export default ListaTareas;