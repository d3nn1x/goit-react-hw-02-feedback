import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button className="btn" onClick={onLeaveFeedback} name="good">
        Good
      </button>
      <button className="btn" onClick={onLeaveFeedback} name="neutral">
        Neutral
      </button>
      <button className="btn" onClick={onLeaveFeedback} name="bad">
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
