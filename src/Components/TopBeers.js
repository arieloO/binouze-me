import React from "react";
import MiniBeerCard from "./MiniBeerCard";

const TopBeers = ({ favBeers, setFavBeers }) => {
  console.log("favBeers : ", favBeers);

  if (favBeers) {
    const beerList = Object.entries(favBeers);
    console.log("top beer list : ", beerList);
    return (
      <div className="top-beers-list wrapper">
        {beerList.map(([beerId, beerRank]) => {
          // console.log("top beer ID", beerId.toString());
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
      </div>
    );
  } else {
    return (
      <div>{favBeers ? null : <h1>Your haven't rated any beer yet !</h1>}</div>
    );
  }
};

export default TopBeers;
