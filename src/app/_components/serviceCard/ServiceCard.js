'use client';
import React from 'react';
import Link from 'next/link';
import './serviceCard.css';
import Image from 'next/image';

const ServiceCard = ({ title, serviceLink, image }) => {
  return (
    <div className='card text-center pointer hover-background m-1'>
      <Link href={'/services' + '/' + serviceLink}>
        <Image
          src={image}
          className='card-img rounded'
          alt='service'
          height={350}
          width={396}
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

export default ServiceCard;
