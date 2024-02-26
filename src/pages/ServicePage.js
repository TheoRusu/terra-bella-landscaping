import React from 'react';

const ServicePage = ({ title, text }) => {
  return (
    <div className='container'>
      <div className='row justify-content-center text-center'>
        <div className='col-sm-8'>
          <h1 className='my-5 fw-bold'>{title}</h1>
          <p>{text}</p>
        </div>
      </div>

      <div className='row justify-content-center'></div>
    </div>
  );
};

export default ServicePage;
