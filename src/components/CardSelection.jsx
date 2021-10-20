import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "./Card"
import "./CardSelection.css"

const points = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "?", "∞"];

export const CardSelection = ({ selectedPoint, handleCardClick, ...props }) => {
  return <div className="card-selection">
    {points.map((point) => {

      return (
        <Card
          isSelectable={true}
          isSelected={selectedPoint === point}
          key={point}
          point={String(point)}
          handleClick={handleCardClick}
        />
      );
    })}
  </div>;
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
};
