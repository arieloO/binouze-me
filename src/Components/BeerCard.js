import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import qs from "qs";

const BeerCard = ({ match, favBeers, setFavBeers }) => {
  const queryString = qs.parse(match.params.id, {
    ignoreQueryPrefix: true,
  });

  const beerID = queryString.id;
  const [beerData, setBeerData] = useState();

  const prevRate = favBeers[beerID] ? favBeers[beerID] : 0;
  const [beerRating, setBeerRating] = useState(prevRate);

  console.log("queryString:", queryString);
  console.log("beerID : ", beerID);
  console.log("prevState : ", prevRate);
  console.log("favBeers : ", favBeers);

  useEffect(() => {
    var newFavBeers = { ...favBeers };
    newFavBeers[beerID] = beerRating;
    setFavBeers(newFavBeers);
    console.log(["newFavObj : ", newFavBeers], ["rate : ", beerRating]);
  }, [beerRating]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${beerID || "random"}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("responseData", responseData[0]);
        setBeerData(responseData[0]);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [beerID]);

  console.log("test beer Data : ", beerData);
  if (!beerData) {
    console.log("test beer Data  FALSE: ", beerData);
    return null;
  }
  return (
    <div className="beer-card">
      <div /*className="beer-img-star"*/>
        <img
          src={beerData.image_url}
          alt={beerData.name}
          className="beer-card-image"
        ></img>
        <StarRating beerRating={beerRating} setBeerRating={setBeerRating} />
      </div>

      <div className="beer-card-info">
        <h1 className="beer-card-title">
          <strong>{beerData.name.toUpperCase()}</strong>
        </h1>
        <p style={{ marginTop: 5, fontStyle: "italic" }}>{beerData.tagline}</p>
        <h2>BREWERS TIPS</h2>
        <p>{beerData.brewers_tips}</p>
        <h2>FOOD PAIRING</h2>

        <ul>
          {beerData.food_pairing.map((dishes, id) => (
            <li key={id}>{dishes}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;
