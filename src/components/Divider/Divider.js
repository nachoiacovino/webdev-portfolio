import { ReactComponent as Star } from '../../svg/star.svg';

const Divider = ({ light }) => {
  return (
    <div className={`divider-custom ${light && 'divider-light'}`}>
      <div className='divider-custom-line' />
      <div className='divider-custom-icon'>
        <Star
          className={`${light ? 'icon-white' : 'icon-default'} icon-star`}
        />
      </div>
      <div className='divider-custom-line' />
    </div>
  );
};

export default Divider;
