import React from 'react';
import PropTypes from 'prop-types';

const Section = props => {
  return (
    <>
      <h2 className="Title">{props.title}</h2>
      {props.children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
