import React, {useState, useEffect} from 'react';
//Variables de estado
function ListaProductos(){
    const [productos, setProductos]=useState([]);
    const [cargado, setCargado]=useState(true);
    //Funcion para obtener los productos de la API
    const obtenerProductos=async()=>{
        setCargado(true);
        try{
            const respuesta=await fetch('https://jsonplaceholder.typicode.com/photos');
            const datos=await respuesta.json();
            setProductos(datos);
        }catch(error){
            console.error('Error al obtener los productos ',error);
        }finally{
            setCargado(false);
        }
    };
    
    useEffect(()=>{
        obtenerProductos();
    },[]);
    return(
        <div>
            <h2>Lista de Productos</h2>
            {cargado?(
                <p>Cargando Productos...</p>
            ):(
                <ul>
                    {productos.map(producto=>(
                        <div className='imagen'>
                            <p>{producto.title}</p>
                            <img
                                src={producto.url}
                                alt={producto.tile}
                            ></img>
                        </div>
                    ))}
                </ul>
            )}
            <button
                onClick={obtenerProductos}
            >Productos</button>
        </div>
    );
}

export default ListaProductos;