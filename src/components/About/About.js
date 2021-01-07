import React from 'react';

import { ReactComponent as Download } from '../../svg/download.svg';
import Divider from '../Divider/Divider';

const About = () => {
  return (
    <>
      <div className='anchor' id='about' />
      <section className='mb-0 text-white page-section bg-primary'>
        <div className='container'>
          {/* About Section Heading */}
          <h2 className='text-center text-white page-section-heading text-uppercase'>
            About
          </h2>
          <Divider light />
          {/* About Section Content */}
          <div className='row'>
            <div className='ml-auto col-lg-4'>
              <p className='lead'>
                Hi! My name is Ignacio but everyone calls me Nacho, my favorite
                languages are JavaScript and Python, but I have worked mostly in
                JavaScript with React. I'm looking for opportunities to keep
                growing as a developer and I'm excited to keep learning and
                evolving in this fast-changing tech world that we live in.
              </p>
            </div>
            <div className='mr-auto col-lg-4'>
              <p className='lead'>
                I'm a very fast learner when something interest me, and I'm very
                resourceful on finding the best tools to learn it, I have learn
                music this way, and I learned a lot of programming concepts just
                by researching and trying new stuff and new online courses.
              </p>
            </div>
          </div>
          {/* About Section Button */}
          <div className='mt-4 text-center'>
            <a
              className='btn btn-xl btn-outline-light btn-download'
              href='/files/NachoIacovinoCV.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Download className='icon-white icon-download' />
              Download my CV / Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
