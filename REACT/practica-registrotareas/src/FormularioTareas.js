import React, { useState } from 'react';

function FormularioTareas({ agregarTarea, setBusqueda }) {
  const [titulo, setTitulo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim()) {
      agregarTarea(titulo);
      setTitulo('');
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nueva tarea"
          className="input"
        />
        <button type="submit" className="btn">Agregar</button>
      </form>
      <input
        type="text"
        placeholder="Buscar tareas"
        onChange={(e) => setBusqueda(e.target.value)}
        className="input mt-2"
      />
    </div>
  );
}

export default FormularioTareas;
