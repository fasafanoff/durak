import { bool, number, oneOf } from "prop-types";
import React from "react";
import "./styles.scss";

const widths = {
  normal: "50px",
};

const heights = {
  normal: "73px",
};

const Card = ({
  suit,
  rank,
  size,
  elevation,
  isFace,
  animation,
  className,
  ...rest
}) => {
  return (
    <div
      className={["card", className].join(" ")}
      style={{
        width: widths[size],
        height: heights[size],
        transform: `rotateY(${isFace ? 0 : 180}deg)`,
      }}
      {...rest}
    >
      <img
        src={`./assets/svg-cards/${rank}_of_${suit}.svg`}
        alt={`${rank} of ${suit}`}
        draggable={false}
        className="card__face"
      />
      <img
        src="./assets/svg-cards/back.svg"
        alt={`${rank} of ${suit}`}
        draggable={false}
        className="card__back"
      />
    </div>
  );
};

Card.propTypes = {
  suit: oneOf(["spades", "hearts", "diamonds", "clubs"]),
  rank: oneOf([2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"]),
  size: oneOf(["normal"]),
  isFace: bool,
  elevation: number,
};
Card.defaultProps = {
  suit: "spades",
  rank: 2,
  size: "normal",
  isFace: true,
  elevation: 2,
};

export default Card;
