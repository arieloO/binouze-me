import React from "react";
import { NavLink } from "react-router-dom";

const BeerItem = ({ beer }) => {
  // href={beer.image_url} target="_blank" rel="noopener noreferrer"
  return (
    <NavLink to={`/catalogue/beers/id=${beer.id}`}>
      <div className="beer-item">
        <img src={beer.image_url} alt={beer.name} className="beer-image"></img>
        <div className="pic-name">{beer.id + "- " + beer.name}</div>
      </div>
    </NavLink>
  );
};

export default BeerItem;
