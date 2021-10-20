import React from 'react';
import PropTypes from 'prop-types';
import { Estimate } from './Estimate'
import { OpenButton } from './OpenButton'
import { CopyButton } from './CopyButton'

import './Table.css';

export const Table = ({ isOpend, estimaters, handleOpenButtonClick, ...props }) => {
  return (
    <div className="table">
      <div className="table-estimaters">
        {Array.isArray(estimaters) ? estimaters.map((estimater) =>
          <Estimate
            key={estimater.name}
            name={estimater.name}
            point={estimater.point}
            isOpend={isOpend}
          />
        ) : undefined}
      </div>
      <OpenButton
        isOpend={isOpend}
        handleClick={handleOpenButtonClick}
      />
      {isOpend && estimaters && estimaters.length > 0 ?
        <CopyButton text={createCopyText(estimaters)} />
        : null}
    </div>
  );
}

function createCopyText(estimaters) {
  if (!estimaters || estimaters.length === 0) {
    return "empty.";
  }
  const now = new Date();
  return (
    "[" +
    now.toLocaleDateString() +
    " " +
    now.toLocaleTimeString() +
    "] " +
    estimaters.sort((e1, e2) => e1.name > e2.name ? 1 : -1).reduce(
      (acc, cur) => (acc ? acc + " " : "") + `${cur.name}(${cur.point})`,
      null
    )
  );
}

Table.propTypes = {
  /**
   * オープンフラグ
   */
  isOpend: PropTypes.bool,
  /**
   * 見積りリスト
   */
  estimaters: PropTypes.arrayOf(PropTypes.object),
  /**
   *  OPENボタンクリック時の動作
   */
  handleOpenButtonClick: PropTypes.func
};

Table.defaultProps = {
};