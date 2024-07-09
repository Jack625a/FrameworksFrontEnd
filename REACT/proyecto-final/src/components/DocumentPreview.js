import React from 'react';
import { useParams } from 'react-router-dom';
import pdfDocument from '../documents'; // Directorio de documentos

const DocumentView = () => {
  const { documento } = useParams();

  const handleDownload = () => {
    const downloadUrl = pdfDocument[documento];
    window.open(downloadUrl); // Abre el documento en una nueva pestaña para descargar
  };

  return (
    <div className="document-view">
      <h3>{documento}</h3>
      {/* Coloca aquí un visor de PDF si lo deseas */}
      <button onClick={handleDownload}>Descargar</button>
    </div>
  );
};

export default DocumentView;
