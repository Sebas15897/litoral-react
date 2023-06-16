import React from 'react';

const ImageGallery = () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Agrega aquí más URLs de imágenes
  ];

  return (
    <div>
      <h2>Galería de imágenes</h2>
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Imagen ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
