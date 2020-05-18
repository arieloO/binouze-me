import React from "react";
import BeerPic from "./BeerPic";

const BeerCard = ({ beer }) => {
  return (
    <div>
      <BeerPic url={beer.url} name={beer.name} />
      <h1>
        <strong>{beer.name}</strong>
      </h1>
      <h2>BREWERS TIPS</h2>
      <p>{beer.brewers_tips}</p>
      <h2>FOOD PAIRING</h2>
      <p>{beer.food_pairing}</p>
    </div>
  );
};

export default BeerCard;
