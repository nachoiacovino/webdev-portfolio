import React from 'react'
import Divider from '../Divider/Divider'

const Skills = () => {
    const skills = ["React", "React Native", "Redux", "Context API", "JavaScript", "ECMAScript 6+", "jQuery", "JSON", "Node.js", "Express", "HTML5", "CSS3", "Bootstrap 4", "SASS", "REST API", "Git", "Github", "Python 3", "Web Scraping"]
    return (
        <section className="page-section bg-primary text-white mb-0" id="skills">
            <div className="container">
            {/* About Section Heading */}
            <h2 className="page-section-heading text-center text-uppercase text-white">
                Skills
            </h2>
            <Divider light />
            </div>
            <div className="font-weight-light ml-5 mr-5 text-center">
                {skills.map(skill => <button disabled className="btn btn-dark mr-2 mb-1">{skill}</button>)}
            </div>
        </section>
    )
}

export default Skills
