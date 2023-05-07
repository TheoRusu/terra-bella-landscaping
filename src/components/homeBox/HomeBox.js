import React from 'react';
import HomeServiceCard from '../homeServiceCard/HomeServiceCard';
import './homeBox.css';
import GalleryCarousel from '../galleryCarousel/GalleryCarousel';
import { Link, useNavigate } from 'react-router-dom';

const HomeBox = () => {
  const navigate = useNavigate();
  const onGalleryClick = () => {
    navigate('/gallery');
  };
  return (
    <div className='container-lg g-0'>
      <div className='row'>
        <div className='col mb-5'>
          <h1 className='text-center mt-5 businessTitle'>
            Terra Bella Landscaping
          </h1>
          <h1 className='text-center slogan'>Your Ultimate Dreamscape</h1>
          {/* <img src='Lanscaping.webp' alt='landscaping' width='100%'></img> */}
          <GalleryCarousel onClick={onGalleryClick} currentPage={'Home'} />
        </div>
      </div>

      <hr className='border border-dark border-2 opacity-100' />

      <div className='row g-0 mt-5'>
        <h1 className='text-center mb-5'>
          <u>Services</u>
        </h1>
        <div className='col-md'>
          <HomeServiceCard
            title={'Sodding'}
            description={'The best sodding in the country'}
            serviceLink={'/sodding'}
            image={'Sodding.jpg'}
          />
        </div>
        <div className='col-md'>
          <HomeServiceCard
            title={'Interlocking'}
            description={'The best interlocking in the country'}
            image={'Interlocking.jpg'}
          />
        </div>
        <div className='col-md'>
          <HomeServiceCard
            title={'Planting'}
            description={'The best planting in the country'}
            image={'Planting.jpg'}
          />
        </div>
      </div>
      <div className='row g-0 mb-5'>
        <div className='col-md'>
          <HomeServiceCard
            title={'Retaining Wall'}
            description={'The best retaining wall in the country'}
            image={'RetainingWall.jpg'}
          />
        </div>
        <div className='col-md'>
          <HomeServiceCard
            title={'French Drainage'}
            description={'The best french drainage in the country'}
            image={'FrenchDrain.jpg'}
          />
        </div>
        <div className='col-md'>
          <HomeServiceCard
            title={'Decks and Fences'}
            description={'The best decks and fences in the country'}
            image={'DecksAndFences.jpg'}
          />
        </div>
      </div>
      <hr className='border border-dark border-2 opacity-100' />
      <div className='row mt-5'>
        <div className='col mb-5'>
          <h1 className='text-center mb-5 text-decoration-underline'>
            Reach out for a quote
          </h1>
          <div className='d-flex justify-content-center'>
            <Link to={'/contact-us'} className='btn btn-lg btn-dark'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBox;
