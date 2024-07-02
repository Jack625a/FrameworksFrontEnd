import React, {useState,useEffect,useRef} from 'react';
function Galeria(){
    const imagenes=[
        'https://oruro.solutekla.com/photo/1/lg/televisores_led_4k_smart/televisor_lg_70_led_uhd_4k_active_hdr_sonido_ultra_surround_smart_tv/televisor_lg_70_led_uhd_4k_active_hdr_sonido_ultra_surround_smart_tv_0001',
        'https://multicenter.vtexassets.com/arquivos/ids/282423-800-auto?v=638295393826830000&width=800&height=auto&aspect=true',
        'https://multicenter.vtexassets.com/arquivos/ids/289783-800-auto?v=638495902605330000&width=800&height=auto&aspect=true',
    ];
    const indexRef=useRef(0);
    const [actualizarImagen,setActualizarImagen]=useState(imagenes[0]);

    const nextImagen=()=>{
        indexRef.current=(indexRef.current+1)%imagenes.length;
        setActualizarImagen(imagenes[indexRef.current]);
    };

    useEffect(()=>{
        const intervalo=setInterval(nextImagen,3000);
        return()=>clearInterval(intervalo);
    },[]);

    return(
        <div className='slider'>
            <img
                src={actualizarImagen}
                alt='Galeria'
            />
        </div>
    );
}

export default Galeria;