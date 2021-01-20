import React from "react";
import { NavLink } from "react-router-dom";
import { getBeerColor } from "./SrmStyles.js";

const BeerSmallItem = ({ beer }) => {
  // href={beer.image_url} target="_blank" rel="noopener noreferrer"

  const beerColor = getBeerColor(beer.ebc);
  console.log("BEER COLOR / ", beerColor);

  return (
    <NavLink to={`/catalogue/beers/id=${beer.id}`}>
      <div className="beer-item">
        <div
          className="colorChip"
          style={{
            borderTop: `25px solid ${beerColor} `,
          }}
        ></div>
        <img src={beer.image_url} alt={beer.name} className="beer-image"></img>
        <div className="pic-name">
          <p>{beer.name}</p>
        </div>

        {/* <div className="small-item-id">{beer.id}</div> */}
      </div>
    </NavLink>
  );
};

export default BeerSmallItem;
