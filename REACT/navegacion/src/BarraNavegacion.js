import React from "react";
import { Link } from "react-router-dom";
function BarraNavegacion(){
    return(
        <nav className="bg-slate-900 p-5">
            <ul className="flex space-x-4 text-white font-bold">
                <li>
                    <Link to="/" className="hover:text-yellow-300">Inicio</Link>
                </li>
                <li>
                    <Link to="/contactos"className="hover:text-yellow-300">Contactos</Link>
                </li>
                <li>
                    <Link to="/productos"className="hover:text-yellow-300">Productos</Link>
                </li>
                <li>
                    <Link to="/detalle"className="hover:text-yellow-300">Detalle</Link>
                </li>
            </ul>
        </nav>
    );
}
export default BarraNavegacion;