import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section;
