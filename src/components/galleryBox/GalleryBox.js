import React from 'react';
import GalleryCarousel from '../galleryCarousel/GalleryCarousel';

const GalleryBox = () => {
  return (
    <div className='container'>
      <h1 className='text-center slogan my-5'>
        <u>Gallery</u>
      </h1>
      <GalleryCarousel />
    </div>
  );
};

export default GalleryBox;
