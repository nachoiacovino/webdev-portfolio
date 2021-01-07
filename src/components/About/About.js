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
                Hi! A little bit about myself: My favorite languages are
                JavaScript and Python, I have worked mostly in JavaScript with
                React and Redux. I love helping other developers improve and get
                better. I'm passionate about code reusability and best
                practices.
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
