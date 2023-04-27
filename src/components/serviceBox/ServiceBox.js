import React from 'react';

const ServiceBox = () => {
  return (
    <div className='container'>
      <div className='row g-0 border border-2 border-dark'>
        <div className='col-6'>
          <img src='Sodding.jpg' width={'80%'} alt='sodding' />
        </div>
        <div className='col-6'>
          <h5>Delivereasda</h5>
        </div>
      </div>
      <div className='row g-0'>
        <div className='col-6'>
          <h5>Delivereasda</h5>
        </div>
        <div className='col-6 justify-content-end'>
          <img src='Sodding.jpg' width={'80%'} alt='sodding' className='ms-5' />
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
