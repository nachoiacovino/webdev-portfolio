import React from 'react'
import Divider from '../Divider/Divider'
import courses from '../../courses'
import Course from '../Course/Course'

const DevCourses = () => {
    return (
        <section className="page-section portfolio" id="dev-courses">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    Dev Courses
                </h2>
                <Divider />
                {courses.map(course => <Course course={course} />)}
            </div>
        </section>
    )
}

export default DevCourses
