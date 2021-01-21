import React from "react";
import { getBeerColor } from "./SrmStyles.js";

const ColorCorner = ({ ebc, size }) => {
  const beerColor = getBeerColor(ebc);
  console.log("BEER COLOR / ", beerColor);

  return (
    <div
      className="colorChip"
      style={{
        borderTop: `${size}px solid ${beerColor} `,
        borderRight: `${size}px solid transparent`,
      }}
    ></div>
  );
};

export default ColorCorner;
