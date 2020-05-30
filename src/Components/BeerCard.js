import React, { useEffect, useState } from "react";
import BeerPic from "./BeerItem";

const BeerCard = (props) => {
  console.log("+_BEERCARD_-=+=", props);

  const beerID = props.match.params.id;
  const [beerData, setBeerData] = useState();

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
      .then((response) => response.json())
      .then((responseData) => {
        setBeerData(responseData[0]);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [beerID]);

  if (!beerData) {
    return null;
  }
  console.log(beerData);
  return (
    <div className="beer-card">
      <img
        src={beerData.image_url}
        alt={beerData.name}
        className="beer-card-image"
      ></img>
      <div className="beer-card-info">
        <h1>
          <strong>{beerData.name}</strong>
        </h1>
        <h2>BREWERS TIPS</h2>
        <p>{beerData.brewers_tips}</p>
        <h2>FOOD PAIRING</h2>
        <p>{beerData.food_pairing}</p>
      </div>
    </div>
  );
};

export default BeerCard;
