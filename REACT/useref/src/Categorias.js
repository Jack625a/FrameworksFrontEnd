import React from 'react';
function Categorias({categorias,setCategorias}){
    return(
        <div className='flex justify-center space-x-4 p-4'>
            {categorias.map(categoria=>(
                <button
                    key={categoria.id}
                    onClick={()=>setCategorias(categoria.id)}
                    className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-950 font-bold'
                >{categoria.nombre}</button>
            ))}
        </div>
    );
}
export default Categorias;