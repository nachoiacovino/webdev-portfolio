import React from 'react'
import './Homepage.scss'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Portfolio from '../../components/Portfolio/Portfolio'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import PortfolioModal from '../../components/PortfolioModal/PortfolioModal'
import portfolio from '../../portfolio'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
            <ScrollToTop />
            {portfolio.map(item => <PortfolioModal item={item} />)}
        </>
    )
}

export default Homepage
