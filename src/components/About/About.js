import React from "react";

import { ReactComponent as Download } from "../../svg/download.svg";
import Divider from "../Divider/Divider";

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
                Hi! My name is Ignacio but everyone calls me Nacho, my favorite
                languages are JavaScript and Python, but I have worked mostly in
                JavaScript with React. I'm looking for opportunities to keep
                growing as a developer and I'm excited to keep learning and
                evolving in this fast-changing tech world that we live in.
              </p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">
                My strengths lie in JavaScript (Both ES5 and ES6+) and
                especially in React, I've been working in React projects for the
                last months, both with classes and with hooks, I have worked
                with RESTFUL APIs, React Routes, and I have use some other
                libraries. I also have experience in HTML5, CSS3, Bootstrap 4
                and Backend with Node.js and Express.
              </p>
            </div>
          </div>
          {/* About Section Button */}
          <div className="text-center mt-4">
            <a
              className="btn btn-xl btn-outline-light btn-download"
              href="/files/IgnacioIacovinoResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="icon-white icon-download" />
              Download my CV / Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
