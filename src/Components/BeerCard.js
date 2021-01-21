import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import qs from "qs";
import ColorCorner from "./ColorCorner.js";

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

  const listIngredients = (type) => {
    let array = [];
    beerData.ingredients[type].map((ingredient, id) => {
      if (!array.includes(ingredient.name)) {
        return (array = [...array, ingredient.name]);
      }
      return array;
    });
    return array;
  };

  if (!beerData) {
    return null;
  }
  return (
    <div className="beer-card">
      <ColorCorner ebc={beerData.ebc} size={100} />
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
      <div>
        <div className="side-card">
          {/* <h2>More details</h2> */}
          <div>
            <h3>malts</h3>
            <ul>
              {listIngredients("malt").map((hop, id) => (
                <li key={id}>{hop}</li>
              ))}
            </ul>
            <h3>hops</h3>
            <ul>
              {listIngredients("hops").map((hop, id) => (
                <li key={id}>{hop}</li>
              ))}
            </ul>
            <h3>yeast</h3>
            <p>{beerData.ingredients.yeast}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
