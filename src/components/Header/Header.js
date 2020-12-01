import React from 'react';

import Divider from '../Divider/Divider';

const Header = () => {
  return (
    <header
      className='masthead bg-primary text-white text-center'
      id='page-top'
    >
      <div className='container d-flex align-items-center flex-column'>
        {/* Masthead Avatar Image */}
        <img
          className='masthead-avatar mb-5'
          src='img/avatar.png'
          alt='Avatar'
          width={240}
          height={240}
        />
        {/* Masthead Heading */}
        <h1 className='masthead-heading text-uppercase mb-0'>
          Ignacio Iacovino
        </h1>
        {/* Icon Divider */}
        <Divider light />
        {/* Masthead Subheading */}
        <p className='masthead-subheading font-weight-light mb-0'>
          Fullstack Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
