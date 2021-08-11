import { oneOf } from "prop-types";
import React, { useState } from "react";
import Card from "../Card/Card";
import "./styles.scss";

const suits = ["spades", "hearts", "diamonds", "clubs"];
const ranks36 = [6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];
const ranks52 = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];

const CardPicker = ({ deck }) => {
  const [cards, setCards] = useState([]);
  const ranks = deck === 36 ? ranks36 : ranks52;

  const onClick = (rank, suit) => {
    if (cards.find((card) => card.rank === rank && card.suit === suit)) {
      setCards(
        cards.filter((card) => card.rank !== rank || card.suit !== suit)
      );
    } else setCards([...cards, { rank, suit }]);
  };
  return (
    <div className="cardpicker">
      {suits.map((suit) => {
        return (
          <div key={suit} className="cardpicker__col">
            {ranks.map((rank) => {
              const isFace = !cards.find(
                (card) => card.rank === rank && card.suit === suit
              );
              return (
                <Card
                  className="cardpicker__card"
                  rank={rank}
                  suit={suit}
                  isFace={isFace}
                  key={suit + rank}
                  onClick={() => onClick(rank, suit)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

CardPicker.propTypes = {
  deck: oneOf([36, 52]),
};

CardPicker.defaultProps = {
  deck: 36,
};

export default CardPicker;
