import React, { useEffect, useState } from "react";
import Card from "../api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(Card);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-4 p-10">
        {cards.length &&
          cards.map((card) => (
            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
              <img src={card.image} className="m-10" />
              <h3 className="text-brand-color font-semibold text-lg">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-600 mb-8">{card.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cards;
