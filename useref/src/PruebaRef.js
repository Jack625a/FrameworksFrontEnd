import React, {useRef, useEffect, useState} from 'react';

function PruebaRef(){
    const inputRef=useRef(null);
    const contadorRef=useRef(0);
    const [contarRender,setContarRender]=useState(0);

    const contarClick=()=>{
        contadorRef.current +=1;
        console.log(`Numero de cliks realizados: ${contadorRef.current}`);
        setContarRender(contarRender+1);
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    return(
        <div>
            <input
            ref={inputRef}
            type='text'
            placeholder='Prueba Referencia'
            />
            <h2>La cantidad de clicks realizados es: {contadorRef.current}</h2>
            <button
                onClick={contarClick}
            >Hacer Click</button>
        </div>
    );
}
export default PruebaRef;