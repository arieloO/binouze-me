import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import qs from "qs";

const BeerCard = ({ match }) => {
  const queryString = qs.parse(match.params.id, {
    ignoreQueryPrefix: true,
  });

  const beerID = queryString.id || "random";
  const [beerData, setBeerData] = useState();

  console.log(queryString, beerID);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("responseData", responseData[0]);
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
      <div beer-img-star>
        <img
          src={beerData.image_url}
          alt={beerData.name}
          className="beer-card-image"
        ></img>
        <StarRating />
      </div>

      <div className="beer-card-info">
        <h1 className="beer-card-title">
          <strong>{beerData.name.toUpperCase()}</strong>
        </h1>
        <p style={{ marginTop: 5, fontStyle: "italic" }}>{beerData.tagline}</p>
        <h2>BREWERS TIPS</h2>
        <p>{beerData.brewers_tips}</p>
        <h2>FOOD PAIRING</h2>

        <ul style={{ listStyle: "symbols(cyclic '❁''❁')" }}>
          {beerData.food_pairing.map((dishes) => (
            <li>{dishes}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;
