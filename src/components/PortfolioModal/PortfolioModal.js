import React from 'react'
import Divider from '../Divider/Divider'
import TechButtons from '../TechButtons/TechButtons'

const PortfolioModal = ({ item }) => {
    const { id, title, image, description, tech, demo, github } = item
    return (
        <div
            className="portfolio-modal modal fade"
            id={id}
            tabIndex={-1}
            role="dialog"
            aria-labelledby="portfolioModal1Label"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
                <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">
                    <i className="fas fa-times" />
                </span>
                </button>
                <div className="modal-body text-center">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Portfolio Modal - Title */}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                            {title}
                        </h2>
                        <Divider />
                        {/* Portfolio Modal - Image */}
                        <img
                            className="img-fluid rounded mb-4"
                            src={image}
                            alt={title}
                        />
                        {/* Portfolio Modal - Text */}
                        <p className="mb-4">{description}</p>
                        <div className="mb-4">
                            <h4 className="mb-3">Technologies used</h4>
                                <TechButtons tech={tech} />
                        </div>
                        <a className="btn btn-info mr-1" href={demo} target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-globe-europe mr-1"></i>
                            Demo
                        </a>
                        {github && 
                             <a className="btn btn-dark ml-1" href={github} target="_blank" rel="noopener noreferrer">
                             <i class="fab fa-github mr-1"></i>
                             View on Github
                         </a>
                        }
                        <br />
                        <button className="btn btn-primary mt-3" href="#" data-dismiss="modal">
                            <i className="fas fa-times mr-1" />
                            Close Window
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PortfolioModal
