import React from 'react';

import { ReactComponent as Plus } from '../../svg/plus.svg';

const PortfolioItem = ({ item }) => {
  const { id, thumbnail, title } = item;
  return (
    <div className='col-md-6 col-lg-4'>
      <div
        className='portfolio-item mx-auto'
        data-toggle='modal'
        data-target={`#${id}`}
      >
        <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
          <div className='portfolio-item-caption-content text-center text-white'>
            <Plus className='icon-white' />
          </div>
        </div>
        <img
          className='img-fluid'
          src={thumbnail}
          alt={title}
          height={244}
          width={488}
        />
      </div>
    </div>
  );
};

export default PortfolioItem;
