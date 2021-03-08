import React from "react";
import { NavLink } from "react-router-dom";
import ColorCorner from "./ColorCorner.js";

const BeerSmallItem = ({ beer }) => {
  // href={beer.image_url} target="_blank" rel="noopener noreferrer"

  return (
    <NavLink to={`/catalogue/beers/id=${beer.id}`}>
      <div className="beer-small-item beer-item">
        <ColorCorner ebc={beer.ebc} size={25} />
        <img src={beer.image_url} alt={beer.name} className="beer-image"></img>
        <div className="pic-name">
          <p>{beer.name.split("–")[0].split("(")[0].substring(0, 15)}</p>
        </div>

        {/* <div className="small-item-id">{beer.id}</div> */}
      </div>
    </NavLink>
  );
};

export default BeerSmallItem;
