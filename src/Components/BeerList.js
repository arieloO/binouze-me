import React, { useState, useEffect } from "react";
import BeerPic from "./BeerPic.js";
import BeerCard from "./BeerCard.js";

const BeerList = () => {
  const [nextPage, setNextPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${nextPage}&per_page=24`)
      .then((response) => response.json())
      .then((responseData) => {
        setBeers((oldBeers) => [...oldBeers, ...responseData]);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [nextPage]);

  console.log("WTF __OKPOJO", beers && beers, typeof beers);

  return (
    <div>
      {beers.length > 0 ? (
        <ul className="beer-list">
          {beers.map((beer) => (
            <BeerPic key={beer.id} beer={beer} />
          ))}
        </ul>
      ) : (
        <p>LOADING...</p>
      )}
      <button onClick={() => setNextPage((prevPage) => prevPage + 1)}>
        ShowMore
      </button>
    </div>
  );
};

export default BeerList;
