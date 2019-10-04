import React from "react";
import ItemDisplay from "./ItemDisplay";
import { useState } from "react";

const ItemCardContainer = () => {
  const [cards, setCards] = useState(0);
  return (
    <>
      <button onClick={() => setCards(0)}>Remove all Searches</button>
      <button onClick={() => setCards(cards + 1)}>Start a New Search</button>
      {Array(cards).fill(<ItemDisplay />)}
    </>
  );
};

export default ItemCardContainer;
