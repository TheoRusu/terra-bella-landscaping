import React, { useEffect, useState } from 'react';
import './galleryCarousel.css';

const GalleryCarousel = (props) => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryIndicators, setGalleryIndicators] = useState([]);
  useEffect(() => {
    function importAll(r) {
      return r.keys().map(r);
    }

    const images = importAll(
      require.context('../../assets', false, /\.(png|jpe?g|svg)$/i)
    );
    setGalleryItems(
      images.map((picture, index) => (
        <GalleryItem
          key={index}
          active={index === 0 ? 'active' : ''}
          photoUrl={picture}
        />
      ))
    );
    setGalleryIndicators(
      images.map((picture, index) => (
        <button
          key={index}
          type='button'
          data-bs-target='#galleryCarousel'
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
        />
      ))
    );
  }, []);
  return (
    <div
      id='galleryCarousel'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>{galleryIndicators}</div>
      <div className='carousel-inner'>
        {/* <GalleryItem active={'active'} photoUrl={'Main.jpg'} />
        <GalleryItem photoUrl={'Sodding1.jpg'} /> */}
        {galleryItems}
      </div>
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

const GalleryItem = ({ active, photoUrl }) => {
  return (
    <div className={`carousel-item ${active}`}>
      <div
        className='overlay-image'
        style={{
          backgroundImage: `url(${photoUrl})`,
        }}
      ></div>
    </div>
  );
};

export default GalleryCarousel;
