import React from "react";
import MiniBeerCard from "./MiniBeerCard";

const TopBeers = (favBeers) => {
  console.log(favBeers);

  if (favBeers) {
    const beerList = Object.entries(favBeers.favBeers);
    console.log(beerList);
    return (
      <div className="top-beers-list">
        {beerList.map((beer) => {
          return (
            <div key={beer[0]} className="beer-card-mini">
              <MiniBeerCard id={parseInt(beer[0])} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>{favBeers ? null : <p>Your haven't rated any beer yet !</p>}</div>
    );
  }
};

export default TopBeers;
