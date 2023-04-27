import React, { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <nav
      className='navbar navbar-expand-md navbar-dark'
      style={{ backgroundColor: '#000000' }}
    >
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src='TerrabellaLanscapingLogo1.png' alt='logo' width={'20%'} />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
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
    <li className='nav-item mx-2 active'>
      <Link className={isActive ? 'nav-link active' : 'nav-link'} to={to}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
