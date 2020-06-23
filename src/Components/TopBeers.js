import React from "react";
import MiniBeerCard from "./MiniBeerCard";

const TopBeers = ({ favBeers, setFavBeers }) => {
  console.log(favBeers);

  const fills = (a) => {
    let divs = [];
    for (let i = a; i > 0; i--) {
      divs.push(
        <div key={toString(a - i)} className="mini-beer-empty-fill"></div>
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
          return (
            <div key={beerId} className="mini-beer-card">
              <MiniBeerCard
                id={parseInt(beerId)}
                beerRating={beerRank}
                favBeers={favBeers}
                setFavBeers={setFavBeers}
              />
            </div>
          );
        })}
        {fills(8)}
      </div>
    );
  } else {
    return (
      <div>{favBeers ? null : <p>Your haven't rated any beer yet !</p>}</div>
    );
  }
};

export default TopBeers;
