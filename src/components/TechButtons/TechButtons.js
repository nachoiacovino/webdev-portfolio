const TechButtons = ({ tech }) => {
  return (
    <div className='font-weight-light text-center'>
      {tech.map((t) => (
        <button key={t} disabled className='btn btn-dark mr-2 mb-1'>
          {t}
        </button>
      ))}
    </div>
  );
};

export default TechButtons;
