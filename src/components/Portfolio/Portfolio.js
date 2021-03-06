import portfolio from '../../portfolio';
import Divider from '../Divider/Divider';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <>
      <div className='anchor' id='portfolio' />
      <section className='page-section portfolio'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
            Portfolio
          </h2>
          <Divider />
          <div className='row'>
            {portfolio.map((item) => (
              <PortfolioItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
