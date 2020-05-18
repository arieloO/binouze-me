import React from "react";

const BeerPic = ({ beer }) => {
  return (
    <a href={beer.image_url} target="_blank" rel="noopener noreferrer">
      <img
        src={beer.image_url}
        alt={beer.name}
        alt={beer.name}
        className="beer-image"
      ></img>
    </a>
  );
};

export default BeerPic;
