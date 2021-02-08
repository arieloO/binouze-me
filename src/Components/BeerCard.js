import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import qs from "qs";
import BeerColor from "./BeerColor.js";

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
      <div className="beer-img-star">
        <img
          src={beerData.image_url}
          alt={beerData.name}
          className="beer-card-image"
        ></img>

        <StarRating
          id="beer-card-rating"
          beerRating={favBeers ? favBeers[beerId] : 0}
          onChange={changeFavBeers}
          size={36}
          customClass={"beer-stars"}
        />
        <label htmlFor="beer-card-rating">Rate this Beer !</label>
      </div>

      <div className="beer-card-info">
        <h1 className="beer-card-title">
          <strong>{beerData.name.toUpperCase()}</strong>
        </h1>
        <h4>{beerData.tagline}</h4>

        <div className="beer-description">
          <p>{beerData.description}</p>
        </div>

        <div>
          <div className="icon-title-main">
            <img
              src="https://img.icons8.com/wired/30/000000/food-and-wine.png"
              alt="food pairing icon"
            />

            <h2>Food pairing</h2>
          </div>

          <ul>
            {beerData.food_pairing.map((dishes, id) => (
              <li key={id}>{dishes}</li>
            ))}
          </ul>
        </div>
        <div className="beer-card-data">
          <div>
            <span>ebc : </span>
            <BeerColor ebc={beerData.ebc} size={40} />
          </div>
          <div>
            <span>abv : </span>
            <div className="beer-color-display">{beerData.abv}%</div>
          </div>
          <div>
            <span>ibu : </span>
            <div className="beer-color-display">{beerData.ibu}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="side-card">
          {/* SIDE DETAILS  */}

          {/* <h2>More details</h2> */}
          <div>
            <div className="icon-title-side">
              <img
                src="https://img.icons8.com/carbon-copy/30/000000/wheat.png"
                alt="malt icon"
              />
              <h3>malts</h3>
            </div>
            <ul>
              {listIngredients("malt").map((hop, id) => (
                <li key={id}>{hop}</li>
              ))}
            </ul>

            <div className="icon-title-side">
              <img
                src="https://img.icons8.com/carbon-copy/30/000000/hops.png"
                alt="hops icon"
              />
              <h3>hops</h3>
            </div>
            <ul>
              {listIngredients("hops").map((hop, id) => (
                <li key={id}>{hop}</li>
              ))}
            </ul>
            <div className="icon-title-side">
              <img
                src="https://img.icons8.com/carbon-copy/30/000000/microorganisms.png"
                alt="yeast icon"
              />
              <h3>yeast</h3>
            </div>

            <p>{beerData.ingredients.yeast}</p>
            <div className="icon-title-side">
              <img
                src="https://img.icons8.com/dotty/30/000000/cook-male.png"
                alt="recipe icon"
              />
              <h3>the brewers tips</h3>
            </div>
            <p>{beerData.brewers_tips}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
