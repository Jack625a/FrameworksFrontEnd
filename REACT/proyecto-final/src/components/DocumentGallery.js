import React from 'react';
import DocumentPreview from './DocumentPreview';
import pdfThumbnail from '../utils/pdfThumbnail'; // Utilidad para obtener miniaturas

const DocumentGallery = () => {
  const documents = [
    { name: 'documento1.pdf', thumbnail: pdfThumbnail('documento1.pdf') },
    { name: 'documento2.pdf', thumbnail: pdfThumbnail('documento2.pdf') },
    // Agrega más documentos según sea necesario
  ];

  return (
    <div className="document-gallery">
      {documents.map((doc, index) => (
        <DocumentPreview key={index} name={doc.name} thumbnail={doc.thumbnail} />
      ))}
    </div>
  );
};

export default DocumentGallery;
