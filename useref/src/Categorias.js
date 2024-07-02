import React from 'react';
function Categorias({categorias,setCategorias}){
    return(
        <div className='categorias'>
            {categorias.map(categoria=>(
                <button
                    key={categoria.id}
                    onClick={()=>setCategorias(categoria.id)}
                >{categoria.nombre}</button>
            ))}
        </div>
    );
}
export default Categorias;