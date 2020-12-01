import React from "react";
import Copyright from "../Copyright/Copyright";
import { ReactComponent as Github } from "../../svg/github.svg";
import { ReactComponent as LinkedIn } from "../../svg/linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Currently living in Badalona, Barcelona, Spain.
              </p>
            </div>
            {/* Footer Social Icons */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                aria-label="Github"
                href="https://github.com/naknekv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="icon-white" />
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/ignacio-iacovino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="icon-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
