import React from 'react';
function Tarea({titulo,completada}){
    return(
        <div className='tarea' style={{textDecoration:completada? 'line-through':'none'}}>
            {titulo}
        </div>
    );
}
export default Tarea;