import React from 'react';
import './footer.css';
import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='footer text-white mt-auto'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 d-flex flex-column'>
            <div className='d-flex mx-auto'>
              <a href='tel: 6477675432' className='footer-link mx-4'>
                <div className='d-flex my-2'>
                  <FiPhone className='my-auto' size={30} />
                  <h4 className='my-auto d-none d-md-block'>
                    &nbsp;(647) 767-5432
                  </h4>
                </div>
              </a>
              <a
                href='mailto: terrabelladreamscape@gmail.com'
                className='footer-link mx-4'
              >
                <div className='d-flex my-2'>
                  <FiMail className='my-auto' size={30} />
                  <h4 className='my-auto d-none d-md-block'>
                    &nbsp;terrabelladreamscape@gmail.com
                  </h4>
                </div>
              </a>
              <a
                href='https://www.instagram.com/terrabella.landscaping/'
                className='footer-link mx-4'
              >
                <div className='d-flex my-2'>
                  <FiInstagram className='my-auto' size={30} />
                  <h4 className='my-auto d-none d-md-block'>
                    &nbsp;terrabella.landscaping
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
