import React, { useEffect, useState } from 'react';
import './galleryCarousel.css';
import { useQuery } from '@apollo/client';
import { GET_GALLERY_PHOTOS } from '../../queries/Queries';

const GalleryCarousel = (props) => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryIndicators, setGalleryIndicators] = useState([]);

  const { loading, error, data } = useQuery(GET_GALLERY_PHOTOS); // Execute the GraphQL query

  useEffect(() => {
    if (data && data.galleryPhotosCollection) {
      console.log(data);
      const images =
        data.galleryPhotosCollection.items[0].photosCollection.items.map(
          (item, index) => ({
            key: index,
            active: index === 0 ? 'active' : '',
            photoUrl: item.url,
          })
        );
      const indicators =
        data.galleryPhotosCollection.items[0].photosCollection.items.map(
          (_, index) => ({
            key: index,
            index,
            active: index === 0 ? 'active' : '',
          })
        );
      console.log(images);
      setGalleryItems(images);
      setGalleryIndicators(indicators);
    }
  }, [data]);

  if (loading) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <div className='spinner-border text-black' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <div className='alert alert-danger' role='alert'>
          Error: Images unavailable
        </div>
      </div>
    );
  }

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
          <GalleryItem key={key} active={active} photoUrl={photoUrl} />
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
