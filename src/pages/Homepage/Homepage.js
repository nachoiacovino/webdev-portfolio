import './Homepage.scss';

import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import DevCourses from '../../components/DevCourses/DevCourses';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Portfolio from '../../components/Portfolio/Portfolio';
import PortfolioModal from '../../components/PortfolioModal/PortfolioModal';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Skills from '../../components/Skills/Skills';
import portfolio from '../../portfolio';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <DevCourses />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
      {portfolio.map((item) => (
        <PortfolioModal key={item.title} item={item} />
      ))}
    </>
  );
};

export default Homepage;
