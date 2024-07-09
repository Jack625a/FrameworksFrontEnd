import React, { useState } from 'react';

const serviciosData = [
  {
    title: 'Trámites de Importación',
    content: 'Importación a consumo, Importación temporal, Importación a consumo, Re-Importación en el mismo estado, Despacho Anticipado, Despacho inmediato',
  },
  {
    title: 'Trámites de Exportación',
    content: 'Exportación definitiva, Exportación temporal, Exportación en libre consignación, Re-Exportación en el mismo estándo',
  },
  {
    title: 'Otros Regímenes Aduaneros',
    content: 'Menaje doméstico, Material de uso aeronáutico, Ferias Internacionles, Duty free shop',
  },
  {
    title: 'Asesoramiento',
    content: 'Asesoramiento en importaciones, Asesoramiento en exportaciones, Apoyo Jurídico en procesos de fiscalización, Logistica',
  },
];

const Servicios = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="servicios py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-yellow-500">Nuestros Servicios</h2>
      <p className="text-lg mb-10  text-yellow-500">A fin de contribuir de manera eficiente al flujo comercial, nuestra empresa Brinda los siguientes servicios:</p>
      <div className="max-w-4xl mx-auto">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left py-4 px-6 bg-gray-100 rounded-t-lg focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {servicio.title}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-200 rounded-b-lg text-center">
                {servicio.content.split(', ').map((item, idx) => (
                  <p key={idx} className="text-sm">{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
