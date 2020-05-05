import React from 'react';
import PropTypes from 'prop-types';

export default function Arrow(props) {
  if (props.variant === 'up') {
    return '↑';
  } else if (props.variant === 'down') {
    return '↓';
  }
  return null;
}
Arrow.propTypes = {
  variant: PropTypes.oneOf(['up', 'down']),
};
