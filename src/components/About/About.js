import React from 'react'
import Divider from '../Divider/Divider'

const About = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
            {/* About Section Heading */}
            <h2 className="page-section-heading text-center text-uppercase text-white">
                About
            </h2>
            <Divider light />
            {/* About Section Content */}
            <div className="row">
                <div className="col-lg-4 ml-auto">
                <p className="lead">
                    Hi! My name is Ignacio but everyone calls me Nacho, my favorite languages are JavaScript and Python, but I have worked mostly in JavaScript with React. I have worked experience in different fields but I have not worked yet in a professional developer environment. I'm very excited to start a job in the field and learn how to work in big projects!
                </p>
                </div>
                <div className="col-lg-4 mr-auto">
                <p className="lead">
                    I'm a very fast learner when something interest me, and I'm very resourceful on finding the best tools to learn it, I have learn music this way, and I learned a lot of programming concepts just by researching and trying new stuff and new online courses. I really want to start working in a company to keep growing as a developer because I know I have the ability to be very good in any position I'm qualified for.
                </p>
                </div>
            </div>
            {/* About Section Button */}
            <div className="text-center mt-4">
                <a
                className="btn btn-xl btn-outline-light"
                href="/files/IgnacioNicolasIacovinoResume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                >
                <i className="fas fa-download mr-2"/>
                Download my CV / Resumee
                </a>
            </div>
            </div>
        </section>
    )
}

export default About
