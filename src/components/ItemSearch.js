import React from "react";
import axios from "axios";

const ItemSearch = () => {
  let displayitem;

  axios
    .get(
      "https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=12934"
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

export default ItemSearch;
