
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({ size, point, isSelectable, isSelected, isClosed, handleClick, ...props }) => {
  return (
    <div
      className={[
        "card",
        ("card-" + size),
        (isSelectable ? "card-selectable" : ""),
        (isSelected ? "card-selected" : "card-notselected"),
        (isClosed ? "card-closed" : "")
      ].join(" ")}
      onClick={() => handleClick(point)}
      {...props}
    >
      {isClosed ? "" : point}
    </div>
  );
}

Card.propTypes = {
  /**
   * サイズ
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * ポイント数
   */
  point: PropTypes.string,
  /**
   * 選択可能かどうか?
   */
  isSelectable: PropTypes.bool,
  /**
   * 選択されているかどうか?
   */
  isSelected: PropTypes.bool,
  /**
   * 閉じてるかどうか?
   */
  isClosed: PropTypes.bool,
  /**
   * クリック時の動作。引き数: point
   */
  handleClick: PropTypes.func,
};

Card.defaultProps = {
  size: "medium",
  point: 0,
  isSelectable: false,
  isSelected: false,
  isClosed: false,
  handleClick: () => { },
};
