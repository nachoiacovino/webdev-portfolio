import React from 'react';

import courses from '../../courses';
import Course from '../Course/Course';
import Divider from '../Divider/Divider';

const DevCourses = () => {
  return (
    <>
      <div className='anchor' id='dev-courses' />
      <section className='page-section portfolio'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
            Dev Courses I Completed
          </h2>
          <Divider />
          {courses.map((course) => (
            <Course key={course.title} course={course} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DevCourses;
