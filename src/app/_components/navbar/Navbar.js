'use client';
import React from 'react';
import './navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/TerrabellaLandscapingLogo.png';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const navLinkClass = 'nav-item nav-link text-nowrap';
  const pathname = usePathname();

  return (
    <nav className='navbar navbar-expand-md navbar-dark top-navbar'>
      <div className='container-xxl'>
        <div className='d-flex'>
          <Link className='navbar-brand g-0' href={'/'}>
            <Image
              className='img-fluid'
              src={logo}
              alt='logo'
              style={{ width: '20%' }}
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
              href='/'
            >
              Home
            </Link>

            <Link
              className={
                pathname === '/services'
                  ? `${navLinkClass} active`
                  : `${navLinkClass}`
              }
              href='/services'
            >
              Services
            </Link>

            <Link
              className={
                pathname === '/gallery'
                  ? `${navLinkClass} active`
                  : `${navLinkClass}`
              }
              href={'/gallery'}
            >
              Gallery
            </Link>

            <Link
              className={
                pathname === '/contact'
                  ? `${navLinkClass} active`
                  : `${navLinkClass}`
              }
              href={'/contact'}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
