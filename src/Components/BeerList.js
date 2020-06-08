import React, { useState, useEffect } from "react";
import qs from "qs";
import BeerPic from "./BeerItem.js";
import NavOptions from "./NavOptions.js";
import ListFilters from "./ListFilters.js";

const BeerList = ({ location, history }) => {
  const [beers, setBeers] = useState([]);

  //get Page from url
  const queryString = qs.parse(location.search, { ignoreQueryPrefix: true });
  const page = parseInt(queryString.page) || 1;

  //HeaderNav.js parameters
  const [itemsPage, setItemsPage] = useState(25);

  const handlePageChanges = (delta) => {
    const path = `/catalogue/?page=${parseInt(page) + delta}`;
    history.push(path);
  };

  const pageDisplay = `page : ${page}`;

  //
  //
  //
  //ListFilters.js parameters
  const abvDomain = [0.4, 56];
  const [abvRange, setAbvRange] = useState([0.4, 56]);

  const ibuDomain = [0, 250];
  const [ibuRange, setIbuRange] = useState([0, 250]);

  const [nameSearch, setNameSearch] = useState();

  const [fetchRequestString, setFetchRequestString] = useState(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPage}` +
      `&abv_gt=${abvRange[0]}&abv_lt=${abvRange[1]}` +
      `&ibu_gt=${ibuRange[0]}&ibu_lt=${ibuRange[1]}` +
      `${nameSearch ? `&beer_name=${nameSearch}` : `&beer_name=LAGER`}`
  );
  const handleNameSearch = (value) => {
    console.log("search value : ", value);
    setNameSearch(value);
    // setFetchRequestString(
    //   fetchRequestString.concat(`&beer_name=${nameSearch}`)
    // );
    console.log("new fetch : ", fetchRequestString);
  };

  console.log("beers : ", beers && beers, typeof beers);
  console.log("search : ", nameSearch);
  console.log("fetch : ", fetchRequestString);

  useEffect(() => {
    fetch(fetchRequestString)
      .then((response) => response.json())
      .then((responseData) => {
        setBeers(responseData);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [page, itemsPage, abvRange, ibuRange, nameSearch, fetchRequestString]);

  return (
    <div className="body-wrapper">
      <ListFilters
        abvDomain={abvDomain}
        abvRange={abvRange}
        handleAbvRangeChange={setAbvRange}
        ibuDomain={ibuDomain}
        ibuRange={ibuRange}
        handleIbuRangeChange={setIbuRange}
        handleNameSearch={handleNameSearch}
        // abvHigher={abvHigherThanValue}
        // abvLower={abvLowerThanValue}
        // handleHigherSlider={setAbvHigherThanValue}
        // handleLowerSlider={setAbvLowerThanValue}
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
