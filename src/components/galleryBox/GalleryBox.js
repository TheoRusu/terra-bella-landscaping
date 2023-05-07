import React from 'react';
import GalleryCarousel from '../galleryCarousel/GalleryCarousel';

const GalleryBox = () => {
  return (
    <div className='container-lg g-0'>
      <h1 className='text-center my-5 '>Gallery</h1>
      <GalleryCarousel />
    </div>
  );
};

export default GalleryBox;
