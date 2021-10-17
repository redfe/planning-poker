import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "./Card"
import "./CardSelection.css"

const points = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "?", "∞"];

export const CardSelection = ({ selectedPoint, handleCardClick, ...props }) => {
  const cards = points.map((point) => {
    const isSelected = selectedPoint === point;
    return (
      <Card
        isSelectable={true}
        isSelected={isSelected}
        key={point}
        point={point}
        handleClick={handleCardClick}
      />
    );
  });
  return <div className="card-selection">{cards}</div>;
}

CardSelection.propTypes = {
  /**
   * 選択済ポイント
   */
  selectedPoint: PropTypes.string,
  /**
   * カードクリック時の動作。引き数: point
   */
  handleCardClick: PropTypes.func,
};

CardSelection.defaultProps = {
  selectedPoint: "",
  handleCardClick: () => { },
};
