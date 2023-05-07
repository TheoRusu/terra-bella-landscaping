import React from 'react';
import { Link } from 'react-router-dom';

const ContactBox = () => {
  return (
    <div className='container text-center'>
      <h1 className=' mt-5'>Contact Us</h1>
      <div className='bg-white border border-dark mt-5 text-center d-inline-block px-5'>
        <h2 className='mt-5 mb-4'>Reach Out For A Quote:</h2>
        <span
          className='bi bi-telephone me-3'
          style={{ fontSize: '35px' }}
        ></span>
        <Link
          to={'tel:6477675432'}
          className=''
          style={{ fontSize: '35px', color: 'black' }}
        >
          647-767-5432
        </Link>

        <h2 className='mt-5'>Follow Us on Social Media:</h2>
        <Link
          to={
            'https://www.instagram.com/terrabella.landscaping/?igshid=YmMyMTA2M2Y%3D'
          }
          target='_blank'
          className='bi bi-instagram'
          style={{ fontSize: '40px', color: '#C13584' }}
        />
      </div>
    </div>
  );
};

export default ContactBox;
