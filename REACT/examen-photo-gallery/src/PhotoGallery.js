// src/PhotoGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [albumId, setAlbumId] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                setPhotos(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    const handleAlbumChange = (e) => {
        setAlbumId(e.target.value);
    };

    const filteredPhotos = albumId
        ? photos.filter(photo => photo.albumId === parseInt(albumId))
        : photos;

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="photo-gallery">
            <div>
                <label>Filtrar por Álbum ID: </label>
                <input type="number" value={albumId} onChange={handleAlbumChange} />
            </div>
            {filteredPhotos.map(photo => (
                <div key={photo.id} className="photo-item">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    );
};

export default PhotoGallery;
