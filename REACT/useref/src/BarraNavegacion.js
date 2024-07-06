import React from 'react';
function BarraNavegacion(){
    return(
        <nav className='bg-slate-900 text-white p-4 text-lg font-sans'>
            <ul className='flex justify-center space-x-4'>
                <li><a href='#' className='hover:underline'>Inicio</a></li>
                <li><a href='#productos'>Productos</a></li>
                <li><a href='#'>Contactos</a></li>
            </ul>
        </nav>
    );
}
export default BarraNavegacion;