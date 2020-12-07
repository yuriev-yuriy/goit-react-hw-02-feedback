import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <p className="Paragraph">Good: {good}</p>
      <p className="Paragraph">Neutral: {neutral}</p>
      <p className="Paragraph">Bad: {bad}</p>
      <p className="Paragraph">Total: {countTotalFeedback()}</p>
      <p className="Paragraph">
        Positive Feedback: {countPositiveFeedbackPercentage() || 0}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
