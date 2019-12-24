import React from 'react'

const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="container">
            <div className="row">
                {/* Footer Location */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                    Currently living in Badalona, Barcelona, Spain.
                </p>
                </div>
                {/* Footer Social Icons */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/naknekv" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-fw fa-github" />
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/ignacio-iacovino/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-fw fa-linkedin-in" />
                </a>
                </div>
                {/* Footer About Text */}
                <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">
                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                    <a href="http://startbootstrap.com">Start Bootstrap</a>.
                </p>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
