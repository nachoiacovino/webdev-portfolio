import React from 'react'
import './Navbar.scss'
import $ from 'jquery';
window.$ = $;

const Navbar = () => {
    const handleNavbarClose = _ => {
        if (document.querySelector('[aria-expanded="false"]') === null) document.querySelector('.navbar-toggler-right').click()
    }

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault()
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500)
    })

    // TODO: Collapse Navbar when scrolling

    return (
        <nav className="Navbar navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
            <a onClick={handleNavbarClose} className="navbar-brand js-scroll-trigger" href="#page-top">
                Ignacio Iacovino
            </a>
            <button
                className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                    <a onClick={handleNavbarClose} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                    <a onClick={handleNavbarClose} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">
                        About
                    </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                    <a onClick={handleNavbarClose} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#dev-courses">
                        Dev Courses
                    </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                    <a onClick={handleNavbarClose} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#skills">
                        Skills
                    </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                    <a onClick={handleNavbarClose} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">
                        Contact
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
