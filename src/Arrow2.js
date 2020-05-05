import React from 'react';
import PropTypes from 'prop-types';

export default function Arrow2(props) {
  if (props.variant === 'up') {
    if (props.lineStyle === 'solidBlack') {
      return <span style={{ color: 'black' }}>↑</span>;
    }
    if (props.lineStyle === 'solidRed') {
      return <span style={{ color: 'red' }}>↑</span>;
    }
    if (props.lineStyle === 'dottedRed') {
      return <span style={{ color: 'red' }}>⇡</span>;
    }
  } else if (props.variant === 'down') {
    if (props.lineStyle === 'dottedRed') {
      return <span style={{ color: 'red' }}>⇣</span>;
    }
    if (props.lineStyle === 'solidRed') {
      return <span style={{ color: 'red' }}>↓</span>;
    }
    if (props.lineStyle === 'solidBlack') {
      return <span style={{ color: 'black' }}>↓</span>;
    }
  }
  return null;
}
Arrow2.propTypes = {
  variant: PropTypes.oneOf(['up', 'down']),
  lineStyle: PropTypes.oneOf(['solidBlack', 'solidRed', 'dottedRed']),
};
