import React from 'react';
import './galleryCarousel.css';

const GalleryCarousel = ({ galleryIndicators, galleryItems }) => {
  return (
    <div
      id='galleryCarousel'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>
        {galleryIndicators.map(({ key, index, active }) => (
          <button
            key={key}
            type='button'
            data-bs-target='#galleryCarousel'
            data-bs-slide-to={index}
            className={active}
          />
        ))}
      </div>
      <div className='carousel-inner'>
        {galleryItems.map(({ key, active, photoUrl }) => (
          <GalleryItem key={key} active={active} url={photoUrl} />
        ))}
      </div>
      {/* Carousel controls */}
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#galleryCarousel'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#galleryCarousel'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

const GalleryItem = ({ active, url }) => {
  const isVideo = url.endsWith('.mp4');

  return (
    <div className={`carousel-item ${active}`}>
      <img className='d-block w-100' src={url} alt='Gallery' loading='lazy' />
    </div>
  );
};

export default GalleryCarousel;
