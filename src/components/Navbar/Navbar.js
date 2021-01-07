import React from 'react';

import { ReactComponent as Bars } from '../../svg/bars.svg';

const Navbar = () => {
     const handleNavbarClose = () => {
    if (document.querySelector('[aria-expanded="false"]') === null)
      document.querySelector('.navbar-toggler-right').click();
  }; 

  // TODO: Collapse Navbar when scrolling

  return (
    <nav
      className='Navbar navbar navbar-expand-lg bg-secondary text-uppercase fixed-top'
      id='mainNav'
    >
      <div className='container'>
        <a
          onClick={handleNavbarClose}
          className='navbar-brand'
          href='#page-top'
        >
          Ignacio Iacovino
        </a>
        <button
          className='text-white rounded navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <Bars className='icon-white' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='ml-auto navbar-nav'>
            <li className='mx-0 nav-item mx-lg-1'>
              <a
                onClick={handleNavbarClose}
                className='px-0 py-3 rounded nav-link px-lg-3'
                href='#portfolio'
              >
                Portfolio
              </a>
            </li>
            <li className='mx-0 nav-item mx-lg-1'>
              <a
                onClick={handleNavbarClose}
                className='px-0 py-3 rounded nav-link px-lg-3'
                href='#about'
              >
                About
              </a>
            </li>
            <li className='mx-0 nav-item mx-lg-1'>
              <a
                onClick={handleNavbarClose}
                className='px-0 py-3 rounded nav-link px-lg-3'
                href='#dev-courses'
              >
                Dev Courses
              </a>
            </li>
            <li className='mx-0 nav-item mx-lg-1'>
              <a
                onClick={handleNavbarClose}
                className='px-0 py-3 rounded nav-link px-lg-3'
                href='#skills'
              >
                Skills
              </a>
            </li>
            <li className='mx-0 nav-item mx-lg-1'>
              <a
                onClick={handleNavbarClose}
                className='px-0 py-3 rounded nav-link px-lg-3'
                href='#contact'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
