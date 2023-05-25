import React, { useEffect, useRef, useState } from 'react';
// import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = (props) => {
  const [navHeight, setNavHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setNavHeight(-ref.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onNavLoad = () => {
    setNavHeight(-ref.current.clientHeight);
  };

  return (
    <nav
      className='navbar navbar-expand-md navbar-dark'
      ref={ref}
      onLoad={onNavLoad}
    >
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
            <CustomLink to='home' offset={navHeight}>
              Home
            </CustomLink>

            <CustomLink to='services' offset={navHeight}>
              Services
            </CustomLink>
            <CustomLink to='gallery' offset={navHeight}>
              Gallery
            </CustomLink>
            <CustomLink to='contact' offset={navHeight}>
              Contact Us
            </CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const CustomLink = ({ to, offset, children }) => {
  // const resolvedPath = useResolvedPath(to);
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  // console.log(offset);
  return (
    <li className='nav-item ms-2'>
      <Link
        className={'nav-link text-nowrap'}
        activeClass='active'
        // ({to} === 'contact' ?  : to={to})
        // onClick={animateScroll.scrollToBottom}
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={200}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
