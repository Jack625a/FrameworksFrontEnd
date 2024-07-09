import React from 'react';
import videoSrc from '../components/img/puerto.mp4'; // video dentro de carpeta img

const Inicio = () => {
  return (
    <section className="relative h-screen bg-black">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="lema1 text-4xl md:text-6xl font-bold ">CON JOINT COMMERCE</h1>
        <p className="lema2  mt-4 text-lg md:text-2xl">Las operaciones de comercio internacional son más fáciles</p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded">
          <a href="/contactenos">Contáctenos</a>
        </button>
        <br/>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-click" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path>
                <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"></path>
                <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"></path>
                <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
                <path d="M5 3l-1 -1"></path>
                <path d="M4 7h-1"></path>
                <path d="M14 3l1 -1"></path>
                <path d="M15 6h1"></path>
              </svg>
      </div>
    </section>
  );
};

export default Inicio;
