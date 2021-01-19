import React from "react";
import MiniBeerCard from "./MiniBeerCard";

const TopBeers = ({ favBeers, setFavBeers }) => {
  console.log(favBeers);

  const fills = (a) => {
    let divs = [];
    for (let i = a; i > 0; i--) {
      divs.push(
        <div key={i.toString()} className="mini-beer-empty-fill"></div>
      );
    }
    return divs;
  };

  if (favBeers) {
    const beerList = Object.entries(favBeers);
    console.log(beerList);
    return (
      <div className="top-beers-list wrapper">
        {beerList.map(([beerId, beerRank]) => {
          console.log(beerId.toString());
          return (
            <MiniBeerCard
              id={parseInt(beerId)}
              key={beerId.toString()}
              beerRating={beerRank}
              favBeers={favBeers}
              setFavBeers={setFavBeers}
            />
          );
        })}
        {fills(8)}
      </div>
    );
  } else {
    return (
      <div>{favBeers ? null : <h1>Your haven't rated any beer yet !</h1>}</div>
    );
  }
};

export default TopBeers;
