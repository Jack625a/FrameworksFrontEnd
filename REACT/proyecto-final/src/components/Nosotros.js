import React from 'react';

const Nosotros = () => {
  return (
    <section className="nosotros py-20 bg-yellow-400 text-center ">
    <div className="encabezado">
        <h2 className='text-yellow-500'>NOSOTROS</h2>
        <p className="persona text-sky-50">Somos una empresa comprometida con sus clientes, que brinda servicios de calidad a los operadores de Comercio Exterior.</p>
    </div>
    <br/>
    <div className="mis-vis-val">
        <div className="cuadro" id="mision">
            <div className="frente">
                <i className="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chess" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 3a3 3 0 0 1 3 3c0 1.113 -.6 2.482 -1.5 3l1.5 7h-6l1.5 -7c-.9 -.518 -1.5 -1.887 -1.5 -3a3 3 0 0 1 3 -3z" />
                        <path d="M8 9h8" />
                        <path d="M6.684 16.772a1 1 0 0 0 -.684 .949v1.279a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1.28a1 1 0 0 0 -.684 -.948l-2.316 -.772h-6l-2.316 .772z" />
                    </svg>
                </i>
                <p>MISIÓN</p>
            </div>
            <div className="reverso">
                <p>Brindar un servicio eficiente a nuestros clientes, brindando atención de alta calidad. Manteniendo siempre estándares de excelencia, calidad, responsabilidad y rentabilidad</p>
            </div>
        </div>
        <div className="cuadro" id="vision">
            <div className="frente">
                <i className="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-infographic" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M7 3v4h4" />
                        <path d="M9 17l0 4" />
                        <path d="M17 14l0 7" />
                        <path d="M13 13l0 8" />
                        <path d="M21 12l0 9" />
                    </svg>
                </i>
                <p>VISIÓN</p>
            </div>
            <div className="reverso">
                <p>Ser reconocida como la mejor Agencia Despachante de Aduanas en el ámbito del comercio exterior y proveedora de servicios de alta calidad.</p>
            </div>
        </div>
        <div className="cuadro" id="valores">
            <div className="frente">
                <i className="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-diamond" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
                        <path d="M10 12l-2 -2.2l.6 -1" />
                    </svg>
                </i>
                <p>VALORES</p>
            </div>
            <div className="reverso">
                <p>Transparencia en los procesos realizados, seriedad con los clientes y socios comerciales, calidad en los servicios ofrecidos. Ética en todos los procesos realizados.</p>
            </div>
        </div>
    </div>
</section>
  );
};

export default Nosotros;
