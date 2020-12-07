import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onIncrease }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          className="Btn"
          type="button"
          onClick={() => onIncrease(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onIncrease: PropTypes.func.isRequired,
};
export default FeedbackOptions;
