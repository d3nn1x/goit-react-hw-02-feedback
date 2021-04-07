import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return options.map(option => (
    <button
      className="btn"
      onClick={onLeaveFeedback}
      key={option.id}
      name={option.id}
    >
      {option.title}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
