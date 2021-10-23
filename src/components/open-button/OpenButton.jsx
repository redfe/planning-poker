import React from 'react';
import PropTypes from 'prop-types';
import './OpenButton.css';

export const OpenButton = ({ isOpend, handleClick }) => {
  console.log('begin render OpenButton.');
  const className = 'openbutton';
  return (
    <div className={className} onClick={handleClick}>
      {isOpend ? 'return' : 'open'}
    </div>
  );
};

OpenButton.propTypes = {
  /**
   * コピー対象のテキスト
   */
  isOpend: PropTypes.bool,
  /**
   * クリック時の動作
   */
  handleClick: PropTypes.func,
};

OpenButton.defaultProps = {
  isOpend: false,
};
