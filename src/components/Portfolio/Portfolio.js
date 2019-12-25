import React from 'react'
import Divider from '../Divider/Divider'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import portfolio from '../../portfolio'

const Portfolio = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    Portfolio
                </h2>
                <Divider />
                <div className="row">
                    {portfolio.map(item => <PortfolioItem item={item} />)}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
