import React from 'react';
import GalleryCarousel from '../galleryCarousel/GalleryCarousel';

const GalleryBox = () => {
  return (
    <div className='container-fluid d-flex flex-column vh-100'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center text-decoration-underline'>Gallery</h1>
        </div>
      </div>
      <div className='row flex-grow-1'>
        <div className='col d-flex align-items-center justify-content-center'>
          <GalleryCarousel />
        </div>
      </div>
    </div>
  );
};

export default GalleryBox;
