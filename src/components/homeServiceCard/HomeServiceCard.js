import React from 'react';
import './homeServiceCard.css';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({ title, serviceLink, image }) => {
  return (
    <div className='card text-center pointer hover-background'>
      <Link to={serviceLink}>
        <img
          src={image}
          className='card-img rounded'
          alt='...'
          height={'350vh'}
          style={{ borderRadius: '0', objectFit: 'cover' }}
        />
        <div className='card-img-overlay textBoxBackground'>
          <h5
            className={
              title === 'Interlocking'
                ? 'card-title fw-bold fs-2 mt-2 text-white text-nowrap'
                : 'card-title fw-bold fs-2 mt-2 text-white text-wrap'
            }
          >
            {title}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default HomeServiceCard;
