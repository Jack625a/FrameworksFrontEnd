import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [albumFilter, setAlbumFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setFilteredPhotos(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = photos;
    if (albumFilter !== '') {
      filtered = filtered.filter(photo => photo.albumId === parseInt(albumFilter));
    }
    if (titleFilter !== '') {
      filtered = filtered.filter(photo => photo.title.includes(titleFilter));
    }
    setFilteredPhotos(filtered);
  }, [albumFilter, titleFilter, photos]);

  if (isLoading) {
    return <p className="loading">Cargando...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="photo-gallery">
      <h1>Galería de Fotos</h1>
      <div className="filters">
        <div className="filter">
          <label htmlFor="album-filter">Filtrar por Álbum ID:</label>
          <input
            type="number"
            id="album-filter"
            value={albumFilter}
            onChange={e => setAlbumFilter(e.target.value)}
            placeholder="Introduzca el ID del Álbum"
          />
        </div>
        <div className="filter">
          <label htmlFor="title-filter">Filtrar por Título:</label>
          <input
            type="text"
            id="title-filter"
            value={titleFilter}
            onChange={e => setTitleFilter(e.target.value)}
            placeholder="Introduzca el título"
          />
        </div>
      </div>
      <div className="gallery">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="photo">
            <h2>{photo.title}</h2>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
