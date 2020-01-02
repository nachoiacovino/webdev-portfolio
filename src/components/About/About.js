import React from 'react'
import Divider from '../Divider/Divider'

const About = () => {
    return (
        <>
        <div className="anchor" id="about" />
        <section className="page-section bg-primary text-white mb-0">
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
                    Hi! My name is Ignacio but everyone calls me Nacho, my favorite languages are JavaScript and Python, but I have worked mostly in JavaScript with React. I'm looking for opportunities to keep growing as a developer and I'm excited to keep learning and evolving in this fast-changing tech world that we live in.
                </p>
                </div>
                <div className="col-lg-4 mr-auto">
                <p className="lead">
                    I'm a very fast learner when something interest me, and I'm very resourceful on finding the best tools to learn it, I have learn music this way, and I learned a lot of programming concepts just by researching and trying new stuff and new online courses. 
                </p>
                </div>
            </div>
            {/* About Section Button */}
            <div className="text-center mt-4">
                <a
                className="btn btn-xl btn-outline-light"
                href="/files/IgnacioIacovinoResume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                >
                <i className="fas fa-download mr-2"/>
                Download my CV / Resumee
                </a>
            </div>
            </div>
        </section>
        </>
    )
}

export default About
