//importar dependencias 

import React, { useState } from "react";
import Tarea from "./Tarea";

//funcion para listatareas 

function ListaTareas(){
    const [tareas,setTareas]=useState([]);
    const [nuevaTarea, setNuevaTarea]=useState('');
    const agregarTarea=()=>{
        if(nuevaTarea.trim()){
            setTareas([
                ...tareas,
                {id:Date.now(), texto:nuevaTarea, completa:false}
            ]);
            setNuevaTarea('');
        }
    }


const marcarCompletoTarea=(id)=>{
    setTareas(
        tareas.map(tarea=> tarea.id===id?{ ...tarea,completa:!tarea.completa}:tarea
        )
    );
};


    const eliminarTarea=(id)=> {
        setTareas(tareas.filtrer (tarea=> tarea.id !==id));
    };


return(
    <div>
        <h1>Lista de tareas</h1>
        <label>Ingrese la tarea: </label>
        <input type="text" value={nuevaTarea} onChange={(e)=>setNuevaTarea(e.target.value)}></input>
        <button onClick={agregarTarea}>Agregar Tarea</button>
        <div className="lista-tareas">
            {tareas.map(tarea=>(  
                <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    marcarCompleto={marcarCompletoTarea}
                    eliminarTarea={eliminarTarea}
                />
            ))}
        </div>
    </div>
);
};


export default ListaTareas;
//eliminar tarea 


