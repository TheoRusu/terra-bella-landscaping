import React from 'react';
import './homeServiceCard.css';
import { Link } from 'react-router-dom';

const HomeServiceCard = (props) => {
  return (
    <div
      className='card border-1 border-dark text-center'
      style={{ border: '5px, solid, #000000', borderRadius: '0' }}
    >
      <img
        src={props.image}
        className='card-img'
        alt='...'
        height={'350vh'}
        style={{ borderRadius: '0', objectFit: 'cover' }}
      />
      <div className='card-img-overlay textBoxBackground'>
        <h5 className='card-title fw-bold fs-2 mt-2 text-white'>
          {props.title}
        </h5>

        <Link
          to={props.serviceLink}
          className='btn btn-dark btn-lg'
          style={{ marginTop: '55%' }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomeServiceCard;
