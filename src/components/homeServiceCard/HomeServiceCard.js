import React from 'react';
import './homeServiceCard.css';
import { Link } from 'react-router-dom';

const HomeServiceCard = (props) => {
  return (
    <div className='card text-center pointer'>
      <Link to={props.serviceLink}>
        <img
          src={require(`../../assets/serviceCards/${props.image}`)}
          className='card-img rounded'
          alt='...'
          height={'350vh'}
          style={{ borderRadius: '0', objectFit: 'cover' }}
        />
        <div className='card-img-overlay textBoxBackground'>
          <h5
            className={
              props.title === 'Interlocking'
                ? 'card-title fw-bold fs-2 mt-2 text-white text-nowrap'
                : 'card-title fw-bold fs-2 mt-2 text-white text-wrap'
            }
          >
            {props.title}
          </h5>

          {/* <Link
          to={props.serviceLink}
          className='btn btn-dark btn-lg'
          style={{ marginTop: '55%' }}
        >
          Learn More
        </Link> */}
        </div>
      </Link>
    </div>
  );
};

export default HomeServiceCard;
