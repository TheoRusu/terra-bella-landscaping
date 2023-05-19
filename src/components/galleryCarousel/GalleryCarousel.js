import React, { useState } from 'react';
import './galleryCarousel.css';

const GalleryCarousel = (props) => {
  return (
    <div
      id='carouselExampleCaptions'
      className='carousel slide rounded'
      data-bs-ride='carousel'
    >
      <div className='carousel-link d-none d-md-block'>
        <h1 className='fw-bold'>Click to view Gallery</h1>
      </div>
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
      </div>
      <div
        className={
          props.currentPage === 'Home'
            ? 'carousel-inner galleryBox rounded'
            : 'carousel-inner rounded'
        }
      >
        <GalleryItem
          //   className={'galleryBox'}
          photo={'Main.jpg'}
          onClick={props.onClick}
          label={'Landscaping'}
        />
        <GalleryItem
          //   className={'galleryBox'}
          photo={'DecksAndFences.jpg'}
          onClick={props.onClick}
          label={'Decks and Fences'}
        />
        <GalleryItem
          //   className={'galleryBox'}
          photo={'Lanscaping.webp'}
          onClick={props.onClick}
          label={'Lanscaping'}
        />
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

const GalleryItem = ({ photo, label, description, onClick }) => {
  return (
    <div
      className={
        label === 'Landscaping' ? 'carousel-item active ' : 'carousel-item '
      }
      data-bs-interval={'8000'}
    >
      <img src={photo} className='img-fluid' alt='...' onClick={onClick} />
    </div>
  );
};

export default GalleryCarousel;
