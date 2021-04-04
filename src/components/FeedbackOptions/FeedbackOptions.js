const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button className="btn" onClick={onLeaveFeedback}>
        good
      </button>
      <button className="btn" onClick={onLeaveFeedback}>
        neutral
      </button>
      <button className="btn" onClick={onLeaveFeedback}>
        bad
      </button>
    </>
  );
};

export default FeedbackOptions;
