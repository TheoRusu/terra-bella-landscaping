import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='spinner-border text-black' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
