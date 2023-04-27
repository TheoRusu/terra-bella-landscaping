import React from 'react';

const GalleryCarousel = (props) => {
  return (
    <div
      id='carouselExampleCaptions'
      className='carousel carousel-dark slide'
      data-bs-ride='carousel'
    >
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
      <div className='carousel-inner'>
        <GalleryItem
          photo={'Landscaping1.jpg'}
          onClick={props.onClick}
          label={'Landscaping'}
        />
        <GalleryItem
          photo={'DecksAndFences.jpg'}
          onClick={props.onClick}
          label={'Decks and Fences'}
        />
        <GalleryItem
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
  console.log(photo);
  return (
    <div
      className={
        label === 'Landscaping' ? 'carousel-item active' : 'carousel-item '
      }
    >
      <img
        src={photo}
        className='d-block w-100'
        style={{ height: '35vw', minHeight: '300px' }}
        alt='...'
        onClick={onClick}
      />
      <div className='carousel-caption d-none d-md-block'>
        <div>
          <h5 className='fw-bold fs-2'>{label}</h5>
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
