import React from 'react';

function Tarea({ tarea, eliminarTarea, completarTarea }) {
  return (
    <li className={`flex justify-between items-center p-2 ${tarea.completada ? 'bg-green-200' : 'bg-red-200'}`}>
      <span
        className={`cursor-pointer ${tarea.completada ? 'line-through' : ''}`}
        onClick={() => completarTarea(tarea.id)}
      >
        {tarea.titulo}
      </span>
      <button onClick={() => eliminarTarea(tarea.id)} className="btn">Eliminar</button>
    </li>
  );
}

export default Tarea;
