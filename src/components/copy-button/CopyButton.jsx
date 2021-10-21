import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from "react-copy-to-clipboard";
import './CopyButton.css';

export const CopyButton = ({ text }) => {
  return (
    <CopyToClipboard text={text}>
      <div className="copybutton">Copy</div>
    </CopyToClipboard>
  );
}

CopyButton.propTypes = {
  /**
   * コピー対象のテキスト
   */
  text: PropTypes.string,
};

CopyButton.defaultProps = {
  text: undefined,
};