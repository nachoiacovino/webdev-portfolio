import React from 'react'
import Divider from '../Divider/Divider'

const PortfolioModal = ({ item }) => {
    const { id, title, image, description, demo, github } = item
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
                            className="img-fluid rounded mb-5"
                            src={image}
                            alt={title}
                        />
                        {/* Portfolio Modal - Text */}
                        <p className="mb-5">
                            {description}
                        </p>
                        <button
                            className="btn btn-primary"
                            href="#"
                            data-dismiss="modal"
                        >
                        <i className="fas fa-times fa-fw" />
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
