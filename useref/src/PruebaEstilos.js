import React from "react";
function PruebaEstilos(){
    return(
        <div className="grid grid-cols-3 bg-slate-900 bg-center text-white border-2 border-red-500 rounded-lg shadow-md hover:bg-orange-500 cursor-pointer" >
            <div className="font-bold">Columna 1 </div>
            <div className="text-lg font-serif font-bold">Columna 2</div>
            <div className="italic underline">Columna 3</div>
        </div>

    );
}
export default PruebaEstilos;