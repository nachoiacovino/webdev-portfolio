import React from 'react';

import Divider from '../Divider/Divider';

const Header = () => {
  return (
    <header
      className='text-center text-white masthead bg-primary'
      id='page-top'
    >
      <div className='container d-flex align-items-center flex-column'>
        {/* Masthead Avatar Image */}
        <img
          className='mb-5 masthead-avatar'
          src='img/avatar.jpg'
          alt='Avatar'
          width={240}
          height={240}
        />
        {/* Masthead Heading */}
        <h1 className='mb-0 masthead-heading text-uppercase'>
          Ignacio Iacovino
        </h1>
        {/* Icon Divider */}
        <Divider light />
        {/* Masthead Subheading */}
        <p className='mb-0 masthead-subheading font-weight-light'>
          Frontend Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
