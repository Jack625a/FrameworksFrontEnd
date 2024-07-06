import React,{useState} from "react";
import DetalleProducto from "./DetalleProducto";
function Producto({producto}){
    const [mostrarDetalle,setMostrarDetalle]=useState(false);
    const detalles=()=>{
        setMostrarDetalle(!mostrarDetalle);
    };

    return(
        <div className="max-w-sm rounded bg-white p-4">
            <h2 className="text-xl font-bold mb-2">
                {producto.title}
            </h2>
            <img
                src={producto.url}
                alt={producto.title}
                className="w-60 h-auto rounded-lg"
            />
            <button
                className="bg-green-600 text-slate-200 font-bold"
                onClick={detalles}
            >
                {mostrarDetalle?'Cerrar':'Ver Detalles'}
            </button>
            {mostrarDetalle&& <DetalleProducto producto={producto}/>}
        </div>
        );
}
export default Producto;