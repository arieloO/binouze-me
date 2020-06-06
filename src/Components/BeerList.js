import React, { useState, useEffect } from "react";
import qs from "qs";
import BeerPic from "./BeerItem.js";
import NavOptions from "./NavOptions.js";
import ListFilters from "./ListFilters.js";

const BeerList = ({ location, history }) => {
  const [beers, setBeers] = useState([]);

  const queryString = qs.parse(location.search, { ignoreQueryPrefix: true });
  const page = parseInt(queryString.page) || 1;
  console.log("query String", queryString);

  const [itemsPage, setItemsPage] = useState(25);

  const [abvHigherThanValue, setAbvHigherThanValue] = useState(5.5);
  const [abvLowerThanValue, setAbvLowerThanValue] = useState(50);

  useEffect(() => {
    fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPage}&abv_lt=${abvLowerThanValue}&abv_gt=${abvHigherThanValue}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setBeers(responseData);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [page, itemsPage, abvHigherThanValue, abvLowerThanValue]);

  const handlePageChanges = (delta) => {
    const path = `/binouze-me/?page=${parseInt(page) + delta}`;
    history.push(path);
  };

  const handleFilterChanges = () => {
    // console.log(history, "<history-location>", location);
  };

  console.log("Type of BEERS", beers && beers, typeof beers);
  console.log("BEERLIST", page);
  console.log(itemsPage, "!==", beers.length, itemsPage !== beers.length);

  const pageDisplay = `page : ${page}`;

  //console.log(abvValue);

  return (
    <div className="body-wrapper">
      <ListFilters
        handleFilterChanges={handleFilterChanges}
        abvHigher={abvHigherThanValue}
        abvLower={abvLowerThanValue}
        handleHigherSlider={setAbvHigherThanValue}
        handleLowerSlider={setAbvLowerThanValue}
      />

      <div className="wrapper">
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
    </div>
  );
};

export default BeerList;
