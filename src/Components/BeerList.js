import React, { useState, useEffect } from "react";
import qs from "qs";
import BeerItem from "./BeerItem.js";
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
      const paramRange = [parseInt(paramQuery[0]), parseInt(paramQuery[1])];
      return paramRange;
    }
  };

  //
  //ListFilters.js fetch parameters
  const abvDomain = [0, 56];
  const abvRange = getRangeFromQueryParams("abv") || abvDomain;

  const ibuDomain = [0, 250];
  const ibuRange = getRangeFromQueryParams("ibu") || ibuDomain;

  const srmDomain = [0, 601];
  const srmRange = getRangeFromQueryParams("srm") || srmDomain;

  console.log(abvRange, ibuRange, srmRange);
  //handle params changes
  const handlePathChange = (page, itemsPage) => {
    const path = `/catalogue/?page=${page}&items=${itemsPage}&abv=${abvRange[0]}-${abvRange[1]}&ibu=${ibuRange[0]}-${ibuRange[1]}&srm=${srmRange[0]}-${srmRange[1]}`;
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

  const fills = (a) => {
    let divs = [];
    for (let i = a; i > 0; i--) {
      divs.push(
        <div key={i.toString()} className="beer-list-empty-fill"></div>
      );
    }
    return divs;
  };

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
              <BeerItem key={beer.id} beer={beer} />
            ))}
            {fills(18)}
          </ul>
        ) : (
          <div
            style={{
              flexGrow: 3,
              width: "100%",
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
        <div
          id="empty-div-wrapper"
          style={{ width: "100%", flexGrow: 3 }}
        ></div>
      </div>
    </div>
  );
};

export default BeerList;
