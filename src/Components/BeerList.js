import React, { useState, useEffect } from "react";
import qs from "qs";
import BeerPic from "./BeerItem.js";
import NavOptions from "./NavOptions.js";

const BeerList = ({ location, history }) => {
  const [beers, setBeers] = useState([]);

  const queryString = qs.parse(location.search, { ignoreQueryPrefix: true });
  const page = parseInt(queryString.page) || 1;

  const [itemsPage, setItemsPage] = useState(25);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPage}`)
      .then((response) => response.json())
      .then((responseData) => {
        setBeers(responseData);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [page, itemsPage]);

  const handlePageChanges = (delta) => {
    const path = `/binouze-me/?page=${parseInt(page) + delta}`;
    history.push(path);
  };

  console.log("Type of BEERS", beers && beers, typeof beers);
  console.log("BEERLIST", page);
  console.log(itemsPage, "!==", beers.length, itemsPage !== beers.length);

  const pageDisplay = `page : ${page}`;
  return (
    <div>
      <NavOptions
        beers={beers}
        itemsPage={itemsPage}
        page={page}
        handlePageChanges={handlePageChanges}
        setItemsPage={setItemsPage}
        pageDisplay={pageDisplay}
      />

      {beers.length > 0 ? (
        <ul className="beer-list">
          {beers.map((beer) => (
            <BeerPic key={beer.id} beer={beer} />
          ))}
        </ul>
      ) : (
        <p>LOADING...</p>
      )}
    </div>
  );
};

export default BeerList;
