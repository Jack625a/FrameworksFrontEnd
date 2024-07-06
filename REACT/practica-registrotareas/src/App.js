import React, { useState } from 'react';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  const agregarTarea = (titulo) => {
    setTareas([...tareas, { id: Date.now(), titulo, completada: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true;
  }).filter((tarea) => tarea.titulo.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Tareas</h1>
      <FormularioTareas agregarTarea={agregarTarea} setBusqueda={setBusqueda} />
      <div className="flex justify-between my-4">
        <button onClick={() => setFiltro('todas')} className="btn">Todas</button>
        <button onClick={() => setFiltro('completadas')} className="btn">Completadas</button>
        <button onClick={() => setFiltro('pendientes')} className="btn">Pendientes</button>
      </div>
      <ListaTareas tareas={tareasFiltradas} eliminarTarea={eliminarTarea} completarTarea={completarTarea} />
    </div>
  );
}

export default App;
