import React from "react";
import axios from "axios";
// const { ge } = require("osrs-json-api");

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

  //   ge.getItem(12934)
  //     .then(response => {
  //       displayitem = response;
  //     })
  //     .catch(console.error);

  return (
    <>
      <h3>{displayitem}</h3>
    </>
  );
};

export default ItemSearch;
