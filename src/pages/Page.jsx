import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../components/table/Table';
import { User } from '../components/user/User';
import { CardSelection } from '../components/card-selection/CardSelection';
import './Page.css';

export const Page = ({
  userName,
  isOpend,
  estimaters,
  handleOpenButtonClick,
  handleSelectionCardClick,
  ...props
}) => {
  console.log('begin render Page.');
  const myEstimater = estimaters ? estimaters.find((e) => e.name === userName) : undefined;
  return (
    <div className="page">
      <div>
        <h1>Planning Poker</h1>
        <Table
          estimaters={estimaters}
          isOpend={isOpend}
          handleOpenButtonClick={handleOpenButtonClick}
        />
        <User name={userName} />
        <CardSelection
          selectedPoint={myEstimater ? myEstimater.point : undefined}
          handleCardClick={handleSelectionCardClick}
        />
      </div>
    </div>
  );
};

Page.propTypes = {
  /**
   * ユーザー名
   */
  userName: PropTypes.string,
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
  handleOpenButtonClick: PropTypes.func,
  /**
   * カード選択時の動作
   */
  handleSelectionCardClick: PropTypes.func,
};

Page.defaultProps = {};
