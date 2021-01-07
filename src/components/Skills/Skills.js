import React from 'react';

import Divider from '../Divider/Divider';
import TechButtons from '../TechButtons/TechButtons';

const Skills = () => {
  const skills = [
    'React',
    'React Native',
    'React Hooks',
    'Redux',
    'Redux Saga',
    'Next.js',
    'Tailwind',
    'Jest',
    'Enzyme',
    'Angular',
    'Ionic',
    'TypeScript',
    'Context API',
    'Axios',
    'Expo CLI',
    'JavaScript',
    'ECMAScript 6+',
    'JSX',
    'Firebase',
    'jQuery',
    'JSON',
    'Node.js',
    'Express',
    'HTML5',
    'CSS3',
    'Bootstrap 4',
    'SCSS',
    'REST API',
    'Git',
    'Github',
    'AWS CodeCommit',
    'Python 3',
    'Web Scraping',
    'Local Storage',
  ];

  return (
    <>
      <div className='anchor' id='skills' />
      <section className='mb-0 text-white page-section bg-primary'>
        <div className='container'>
          <h2 className='text-center text-white page-section-heading text-uppercase'>
            Skills
          </h2>
          <Divider light />
          <TechButtons tech={skills} />
        </div>
      </section>
    </>
  );
};

export default Skills;
