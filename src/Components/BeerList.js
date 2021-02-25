import React, { useState, useEffect } from "react";
import qs from "qs";
import BeerSmallItem from "./BeerSmallItem.js";
import BeerLargeItem from "./BeerLargeItem.js";
import NavOptions from "./NavOptions.js";
import ListFilters from "./Filters.js";
import NoResult from "./NoResult";
import { useWindowWidth } from "../Hooks/LayoutHooks.js";

// import { yeastTypes } from "../lib/yeastTypes.js";

const useSearchChange = () => {
  const [searchFields, setSearchFields] = useState({});

  const handleSearchValues = (e) => {
    if (e.currentTarget.value === searchFields[e.currentTarget.name]) {
      setSearchFields({
        ...searchFields,
        [e.currentTarget.name]: "",
      });
    } else {
      setSearchFields({
        ...searchFields,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  return [searchFields, handleSearchValues];
};

const BeerList = ({ location, history }) => {
  const [beers, setBeers] = useState([]);

  //get Page & itemsPage from query params
  const queryString = qs.parse(location.search, { ignoreQueryPrefix: true });

  const page = parseInt(parseInt(queryString.page)) || 1;

  const itemsPage = parseInt(parseInt(queryString.items)) || 50;

  // console.log("queryString : ", queryString, page, itemsPage);

  const pageDisplay = `page ${page}`;

  const getRangeFromQueryParams = (param) => {
    if (queryString[param]) {
      const paramQuery = queryString[param].split("-");
      const paramRange = [parseInt(paramQuery[0]), parseInt(paramQuery[1])];
      return paramRange;
    }
  };

  //ListFilters.js fetch parameters

  const abvDomain = [0, 56];
  const abvRange = getRangeFromQueryParams("abv") || abvDomain;

  const ibuDomain = [0, 250];
  const ibuRange = getRangeFromQueryParams("ibu") || ibuDomain;

  const srmDomain = [0, 601];
  const srmRange = getRangeFromQueryParams("srm") || srmDomain;

  // console.log("filter ranges :", abvRange, ibuRange, srmRange);

  //handle params changes
  const handlePathChange = (page, itemsPage) => {
    const path = `/catalogue/?page=${page}&items=${itemsPage}&abv=${abvRange[0]}-${abvRange[1]}&ibu=${ibuRange[0]}-${ibuRange[1]}&srm=${srmRange[0]}-${srmRange[1]}`;
    history.push(path);
  };

  const handlePathChangeFilters = (abv, ibu, srm) => {
    // console.log("consoleLog SRM", srm); //this is a mess
    const path = `/catalogue/?page=${page}&items=${itemsPage}&abv=${abv[0]}-${abv[1]}&ibu=${ibu[0]}-${ibu[1]}&srm=${srm[0]}-${srm[1]}`;
    history.push(path);
  };

  // FILTER KEG & CASK

  const filterBeerContainer = (beersArray) => {
    return beersArray.filter(
      (beer) =>
        beer.image_url !== "https://images.punkapi.com/v2/keg.png" &&
        beer.image_url !== "https://images.punkapi.com/v2/cask.png"
    );
  };

  // console.log("FILTER BOTTLES ONLY", filterBeerContainer(beers));

  // can't find where is the loop from

  const [nameSearch, setNameSearch] = useSearchChange();

  // const handleSearchChange = (category, value) => {
  //   let newSearch = { ...nameSearch };
  //   newSearch.category = value;
  //   console.log(
  //     nameSearch,
  //     " + ",
  //     category,
  //     " : ",
  //     value,
  //     " ===>> ",
  //     newSearch
  //   );
  //   setNameSearch(newSearch);
  // };

  // const [fetchRequestString, setFetchRequestString] = useState()

  const fetchRequestString =
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPage}` +
    `&abv_gt=${abvRange[0]}&abv_lt=${abvRange[1]}` +
    `&ibu_gt=${ibuRange[0]}&ibu_lt=${ibuRange[1]}` +
    `&ebc_gt=${parseInt(srmRange[0]) / 2}&ebc_lt=${parseInt(srmRange[1]) / 2}` +
    (nameSearch.beer ? `&beer_name=${nameSearch.beer}` : "") +
    (nameSearch.yeast ? `&yeast=${nameSearch.yeast}` : "");

  useEffect(() => {
    fetch(fetchRequestString)
      .then((response) => response.json())
      .then((responseData) => filterBeerContainer(responseData))
      .then((responseData) => {
        console.log("USEEFFECT N°1", fetchRequestString);
        setBeers(responseData);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [nameSearch, fetchRequestString]);

  // useEffect(() => {
  //   fetch(fetchRequestString)
  //     .then((response) => response.json())
  //     .then((responseData) => filterBeerContainer(responseData))
  //     .then((responseData) => {
  //       console.log("USEEFFECT N°2", fetchRequestString);
  //       setBeers(responseData);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  // }, [nameSearch, fetchRequestString]);

  // console.log("beers : ", beers && beers);

  // GRID LARGE OR SMALL ITEMS

  const [largeGrid, setLargeGrid] = useState(false);

  const switchGrid = (grid) => {
    return setLargeGrid(!grid);
  };

  const gridStyle = () => {
    return largeGrid
      ? {
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }
      : {
          gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
        };
  };

  const beerItem = (beer) => {
    if (largeGrid === true) {
      return <BeerLargeItem key={beer.id} beer={beer} />;
    } else {
      return <BeerSmallItem key={beer.id} beer={beer} />;
    }
  };

  // HIDE OR SHOW FILTERS

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 640;
  const [hiddenFilters, setHiddenFilters] = useState(isMobile);

  useEffect(() => {
    setHiddenFilters(windowWidth < 640);
  }, [windowWidth]);

  return (
    <div>
      <div className="body-wrapper">
        <ListFilters
          abvDomain={abvDomain}
          abvRange={abvRange}
          ibuDomain={ibuDomain}
          ibuRange={ibuRange}
          srmDomain={srmDomain}
          srmRange={srmRange}
          onChange={handlePathChangeFilters}
          nameSearch={nameSearch}
          handleNameSearch={setNameSearch}
          hidden={hiddenFilters}
          handleHiddenFilters={setHiddenFilters}
          isMobile={isMobile}
        />
        <div className="wrapper">
          <NavOptions
            beers={beers}
            itemsPage={itemsPage}
            page={page}
            pageDisplay={pageDisplay}
            onChange={handlePathChange}
            largeGrid={largeGrid}
            switchGrid={switchGrid}
            hiddenFilters={hiddenFilters}
            handleHiddenFilters={setHiddenFilters}
            isMobile={isMobile}
          ></NavOptions>

          {beers.length > 0 ? (
            <div className="beer-list" style={gridStyle()}>
              {beers.map((beer) => beerItem(beer))}
              <div className="load-more-button-container">
                <button className="load-more-button">
                  <img
                    src="https://img.icons8.com/carbon-copy/64/000000/plus--v1.png"
                    alt="load more content"
                  />
                </button>
              </div>
            </div>
          ) : (
            <NoResult />
          )}
          <div
            id="empty-div-wrapper"
            style={{ width: "100%", flexGrow: 3 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BeerList;
