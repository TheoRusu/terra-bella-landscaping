import React from 'react';
import GalleryCarousel from '../components/galleryCarousel/GalleryCarousel';

const Gallery = () => {
  return (
    <div className='container'>
      <div className='row text-center'>
        <h1 className='my-5 fw-bold'>Gallery</h1>
        <div className='mt-5'>
          <GalleryCarousel />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
