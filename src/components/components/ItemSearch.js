import React from "react";

const { ge } = require("osrs-json-api");

const ItemSearch = () => {
  let displayitem;

  ge.getItem(12934)
    .then(response => {
      displayitem = response;
    })
    .catch(console.error);

  return (
    <>
      <h3>{displayitem}</h3>
    </>
  );
};

export default ItemSearch;
