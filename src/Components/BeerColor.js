import React from "react";
import { getBeerColor } from "./SrmStyles.js";

const BeerColorr = ({ ebc, size }) => {
  const beerColor = getBeerColor(ebc);
  // console.log("BEER COLOR / ", beerColor);

  return (
    <div
      className="beer-color-display"
      style={{
        backgroundColor: beerColor,
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
};

export default BeerColorr;
