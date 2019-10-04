import React from "react";
import axios from "axios";
// import ItemSearch from "./ItemSearch";

const ItemCard = props => {
  const ItemSearch = id => {
    let displayitem;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${props.id}`
      )
      .then(response => {
        console.log(response);
        displayitem = response.data;
      });

    return (
      <>
        <h3>{displayitem}</h3>
      </>
    );
  };

  return (
    <div>
      <button onClick={() => ItemSearch(props.id)}>{props.name}</button>
    </div>
  );
};

export default ItemCard;
