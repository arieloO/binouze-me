import React, { useState, useEffect } from "react";
import qs from "qs";
import BeerPic from "./BeerItem.js";
import NavOptions from "./NavOptions.js";
import ListFilters from "./Filters.js";

const BeerList = ({ location, history }) => {
  const [beers, setBeers] = useState([]);

  //get Page & itemsPage from query params
  const queryString = qs.parse(location.search, { ignoreQueryPrefix: true });

  const page = parseInt(parseInt(queryString.page)) || 1;

  const itemsPage = parseInt(parseInt(queryString.items)) || 25;

  console.log(queryString, page, itemsPage);

  const pageDisplay = `page : ${page}`;

  const getRangeFromQueryParams = (param) => {
    if (queryString[param]) {
      const paramQuery = queryString[param].split("-");
      console.log(paramQuery);
      const paramRange = [parseInt(paramQuery[0]), parseInt(paramQuery[1])];
      console.log(paramRange);
      return paramRange;
    } else {
      return undefined;
    }
  };

  console.log(
    "getRangeFrom Query",
    getRangeFromQueryParams("srm"),
    getRangeFromQueryParams("abv")
  );
  //
  //ListFilters.js fetch parameters
  const abvDomain = [0, 56];
  const abvRange = getRangeFromQueryParams("abv") || abvDomain;

  const ibuDomain = [0, 250];

  const ibuRange = getRangeFromQueryParams("ibu") || ibuDomain;

  const srmDomain = [0, 601];
  const srmQuery = queryString.srm ? queryString.srm.split("-") : ["0", "401"]; // SHIT
  const srmRange = [parseInt(srmQuery[0]), parseInt(srmQuery[1])] || [0, 601]; // almost there LOOK CONSOLE LOG PARSEINT that SHIT
  // YEAH RIGHT HERE

  //handle params changes
  const handlePathChange = (page, itemsPage) => {
    const path = `/catalogue/?page=${page}&items=${itemsPage}&abv=${abvRange}&ibu=${ibuRange}&srm=${srmRange}`;
    history.push(path);
  };
  const handlePathChangeFilters = (abv, ibu, srm) => {
    console.log("consoleLog SRM", srm); //this is a mess
    const path = `/catalogue/?page=${page}&items=${itemsPage}&abv=${abv[0]}-${abv[1]}&ibu=${ibu[0]}-${ibu[1]}&srm=${srm[0]}-${srm[1]}`;
    history.push(path);
  };

  // can't find where is the loop from

  const [nameSearch, setNameSearch] = useState();

  const fetchRequestString =
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPage}` +
    `&abv_gt=${abvRange[0]}&abv_lt=${abvRange[1]}` +
    `&ibu_gt=${ibuRange[0]}&ibu_lt=${ibuRange[1]}` +
    `&ebc_gt=${parseInt(srmRange[0]) / 2}&ebc_lt=${parseInt(srmRange[1]) / 2}`;

  useEffect(() => {
    fetch(fetchRequestString)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("USEEFFECT N°1", fetchRequestString);
        setBeers(responseData);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [fetchRequestString]);

  useEffect(() => {
    if (nameSearch !== undefined) {
      const newFetchRequestString = fetchRequestString.concat(
        `&beer_name=${nameSearch}`
      );
      fetch(newFetchRequestString)
        .then((response) => response.json())
        .then((responseData) => {
          console.log("USEEFFECT N°2");
          setBeers(responseData);
        })
        .catch((error) => {
          console.log("Error fetching and parsing data", error);
        });
    }
  }, [nameSearch, fetchRequestString]);

  // console.log("beers : ", beers && beers);

  return (
    <div className="body-wrapper">
      <ListFilters
        abvDomain={abvDomain}
        abvRange={abvRange}
        ibuDomain={ibuDomain}
        ibuRange={ibuRange}
        srmDomain={srmDomain}
        srmRange={srmRange}
        onChange={handlePathChangeFilters}
        handleNameSearch={setNameSearch}
      />

      <div className="wrapper">
        <NavOptions
          beers={beers}
          itemsPage={itemsPage}
          page={page}
          pageDisplay={pageDisplay}
          onChange={handlePathChange}
        />

        {beers.length > 0 ? (
          <ul className="beer-list">
            {beers.map((beer) => (
              <BeerPic key={beer.id} beer={beer} />
            ))}
          </ul>
        ) : (
          <div
            style={{
              flexGrow: 2,
              height: "100vh",
              width: "80vw",
              margin: "20px 0",
            }}
          >
            <p>
              Oh, this is so sad... Seems like the beer of your dreams doesn't
              exist...
            </p>
            <p>I'm starting to think... that you have bad taste.</p>
            <p>Sorry.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeerList;
