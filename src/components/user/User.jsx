import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ name, ...props }) => {
  return <div className="user" {...props}>{name}</div>;
}

User.propTypes = {
  /**
   * ユーザー名
   */
  name: PropTypes.string,
};

User.defaultProps = {
  name: "",
};
