import React, { useEffect, useRef, useState } from 'react';
// import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark'>
      <div className='container-xxl'>
        <div className='d-flex'>
          <Link className='navbar-brand g-0' to='/'>
            <img
              src={require('../../assets/logos/TerrabellaLandscapingLogo.png')}
              alt='logo'
              width={'15%'}
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link text-nowrap active' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={'nav-link text-nowrap'} to='/services'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={'nav-link text-nowrap'} to={'/gallery'}>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={'nav-link text-nowrap'} to={'/contact'}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// const CustomLink = ({ to, offset, children }) => {
//   // const resolvedPath = useResolvedPath(to);
//   // const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//   // console.log(offset);
//   return (
//     <li className='nav-item ms-2'>
//       <Link
//         className={'nav-link text-nowrap'}
//         activeClass='active'
//         // ({to} === 'contact' ?  : to={to})
//         // onClick={animateScroll.scrollToBottom}
//         to={to}
//         spy={true}
//         smooth={true}
//         offset={offset}
//         duration={200}
//       >
//         {children}
//       </Link>
//     </li>
//   );
// };

export default Navbar;
