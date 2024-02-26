import React from 'react';
// import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const navLinkClass = 'nav-item nav-link text-nowrap';

  return (
    <nav className='navbar navbar-expand-md navbar-dark top-navbar'>
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
          <div className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <Link
              className={
                pathname === '/' ? `${navLinkClass} active` : `${navLinkClass}`
              }
              to='/'
            >
              Home
            </Link>

            <Link
              className={
                pathname === '/services'
                  ? `${navLinkClass} active`
                  : `${navLinkClass}`
              }
              to='/services'
            >
              Services
            </Link>

            <Link
              className={
                pathname === '/gallery'
                  ? `${navLinkClass} active`
                  : `${navLinkClass}`
              }
              to={'/gallery'}
            >
              Gallery
            </Link>

            <Link
              className={
                pathname === '/contact'
                  ? `${navLinkClass} active`
                  : `${navLinkClass}`
              }
              to={'/contact'}
            >
              Contact
            </Link>
          </div>
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
