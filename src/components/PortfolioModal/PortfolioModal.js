import React from 'react';

import { ReactComponent as Close } from '../../svg/close.svg';
import { ReactComponent as Github } from '../../svg/github.svg';
import { ReactComponent as Globe } from '../../svg/globe.svg';
import { ReactComponent as MiniClose } from '../../svg/mini-close.svg';
import Divider from '../Divider/Divider';
import TechButtons from '../TechButtons/TechButtons';

const PortfolioModal = ({ item }) => {
  const { id, title, image, description, tech, demo, github } = item;
  return (
    <div
      className='portfolio-modal modal fade'
      id={id}
      tabIndex={-1}
      role='dialog'
      aria-labelledby='portfolioModal1Label'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl' role='document'>
        <div className='modal-content'>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
          >
            <span aria-hidden='true'>
              <Close className='icon-green mb-2' />
            </span>
          </button>
          <div className='modal-body text-center'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-8'>
                  {/* Portfolio Modal - Title */}
                  <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                    {title}
                  </h2>
                  <Divider />
                  {/* Portfolio Modal - Image */}
                  <img
                    className='img-fluid rounded mb-4'
                    src={image}
                    alt={title}
                  />
                  {/* Portfolio Modal - Text */}
                  <p className='mb-4'>{description}</p>
                  <div className='mb-4'>
                    <h4 className='mb-3'>Technologies used</h4>
                    <TechButtons tech={tech} />
                  </div>
                  <a
                    className='btn btn-info mr-1'
                    href={demo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Globe className='icon-white icon-button pb-1' />
                    Demo
                  </a>
                  {github && (
                    <a
                      className='btn btn-dark ml-1'
                      href={github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github className='icon-white icon-button pb-1' />
                      View on Github
                    </a>
                  )}
                  <br />
                  <button
                    className='btn btn-primary mt-3'
                    href='#'
                    data-dismiss='modal'
                  >
                    <MiniClose className='icon-white icon-button pb-1' />
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
