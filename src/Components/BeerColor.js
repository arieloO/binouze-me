import React from "react";
import { getBeerColor } from "./SrmStyles.js";

const BeerColorr = ({ ebc, size }) => {
  const beerColor = getBeerColor(ebc);
  const textColor = ebc > 139 ? "#F2BB05" : "inherit";
  const boxShadow =
    ebc > 120
      ? `2px 2px 10px ${beerColor}4f, 1px 2px 2px ${beerColor}8f`
      : "2px 2px 10px #bd632f2d, 1px 2px 2px #bd632f4f";
  return (
    <div
      className="beer-data-display beer-color-display"
      style={{
        backgroundColor: beerColor,
        // width: `${size}px`,
        color: textColor,
        // height: `${size}px`,
        boxShadow: boxShadow,
      }}
    >
      <span>European Brewery Color Convention : </span>
      <span>{ebc}</span>
    </div>
  );
};

export default BeerColorr;
