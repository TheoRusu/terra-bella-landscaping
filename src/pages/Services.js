import React from 'react';
import HomeServiceCard from '../components/homeServiceCard/HomeServiceCard';

const Services = () => {
  return (
    <div className='container'>
      <div className='row text-center'>
        <h1 className='my-5 fw-bold'>Services</h1>
        <h4 className='mb-5'>Click on service to see more</h4>
        <div className='row g-0'>
          <div className='col-md'>
            <HomeServiceCard
              title={'Sodding'}
              serviceLink={'/sodding'}
              image={'Sodding.jpg'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'Interlocking'}
              serviceLink={'/interlocking'}
              image={'Interlocking.JPG'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'Planting'}
              serviceLink={'/planting'}
              image={'Planting.JPG'}
            />
          </div>
        </div>
        <div className='row g-0'>
          <div className='col-md'>
            <HomeServiceCard
              title={'Retaining Wall'}
              serviceLink={'/retaining-wall'}
              image={'RetainingWall.jpg'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'French Drainage'}
              serviceLink={'/french-drainage'}
              image={'FrenchDrain.jpg'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'Decks & Fences'}
              serviceLink={'/decks-fences'}
              image={'DecksAndFences.jpg'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
