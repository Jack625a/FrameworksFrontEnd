import React, { useState } from 'react';
import Nota from './Notas';

function ListaNotas() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');
    const [busqueda, setBusqueda] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim()) {
            setNotas([
                ...notas,
                { id: Date.now(), texto: nuevaNota }
            ]);
            setNuevaNota('');
        }
    };

    const eliminarNota = (id) => {
        setNotas(notas.filter(nota => nota.id !== id));
    };

    const filtradoNotas = notas.filter(
        nota => nota.texto.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h1>Lista de Notas</h1>
            <label>Ingrese la nota: </label>
            <input
                type='text'
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button onClick={agregarNota}>Agregar Nota</button>
            <br />
            <input
                type='text'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder='Buscar Nota'
            />
            <div className='lista-notas'>
                {filtradoNotas.map(nota => (
                    <Nota
                        key={nota.id}
                        nota={nota}
                        eliminarNota={eliminarNota}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListaNotas;