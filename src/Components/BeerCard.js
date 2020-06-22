import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import qs from "qs";

const BeerCard = ({ match, favBeers, setFavBeers }) => {
  const queryString = qs.parse(match.params.id, {
    ignoreQueryPrefix: true,
  });

  const beerId = queryString.id
    ? queryString.id
    : Math.floor(Math.random() * 325);

  const [beerData, setBeerData] = useState();

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
      .then((response) => response.json())
      .then((responseData) => {
        setBeerData(responseData[0]);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [beerId]);

  const changeFavBeers = (note) => {
    setFavBeers((favBeers) => {
      const newFavBeers = { ...favBeers };
      newFavBeers[beerId] = note;
      return newFavBeers;
    });
  };

  if (!beerData) {
    return null;
  }
  return (
    <div className="beer-card">
      <div className="beer-img-star">
        <img
          src={beerData.image_url}
          alt={beerData.name}
          className="beer-card-image"
        ></img>
        <StarRating
          beerRating={favBeers ? favBeers[beerId] : 0}
          onChange={changeFavBeers}
          size={36}
          customClass={"beer-stars"}
        />
      </div>

      <div className="beer-card-info">
        <h1 className="beer-card-title">
          <strong>{beerData.name.toUpperCase()}</strong>
        </h1>
        <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
          {beerData.tagline}
        </p>
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
