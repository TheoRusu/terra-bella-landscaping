import React from 'react';

const ServiceBox = () => {
  return (
    <div className='container'>
      <h1 className='text-center my-5'>Sodding</h1>
      <div className='row g-0'>
        <div className='col-7'>
          <img
            className='border border-1 border-dark rounded-5'
            src='Sodding.jpg'
            width={'100%'}
            alt='sodding'
          />
        </div>
        <div className='col-5 text-center my-auto'>
          <h2 className='border border-2 border-dark mx-5 py-3 px-3'>
            Transform Your Lawn with Professional Sod Installation Services
          </h2>
        </div>
      </div>
      <div className='row g-0 mt-5'>
        <div className='col-6'>
          <h5>Delivereasda</h5>
        </div>
        <div className='col-6 justify-content-end'>
          <img
            src='Sodding1.jpg'
            width={'100%'}
            alt='sodding'
            className='ms-5 border border-1 border-dark rounded-5'
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
