import React, { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <nav className='navbar navbar-expand-md navbar-dark'>
      <div className='container-xxl'>
        <div className='d-flex'>
          <Link className='navbar-brand g-0' to='/'>
            <img src='TerrabellaLandscapingLogo.png' alt='logo' width={'15%'} />
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
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/gallery'>Gallery</CustomLink>
            <CustomLink to='/sodding'>Services</CustomLink>
            <CustomLink to='/contact-us'>Contact Us</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const CustomLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className='nav-item ms-2 active'>
      <Link
        className={
          isActive ? 'nav-link active text-nowrap' : 'nav-link text-nowrap'
        }
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
