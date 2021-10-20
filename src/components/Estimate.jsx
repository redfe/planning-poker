import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card'
import './Estimate.css';

export const Estimate = ({ isOpend, point, name, ...props }) => {
  return (
    <div className={"estimate"}>
      <Card isSelectable={false} isClosed={!isOpend} size="large" point={isOpend ? String(point) : undefined} />
      <div className="estimate-name">{name}</div>
    </div>
  );
}


Estimate.propTypes = {
  /**
   * オープンフラグ
   */
  isOpend: PropTypes.bool,
  /**
   * ポイント
   */
  point: PropTypes.string,
  /**
   * 見積もり者名
   */
  name: PropTypes.string,
};

Estimate.defaultProps = {
};