import React, { useState, useEffect, useMemo } from "react";
import qs from "qs";
import BeerSmallItem from "./BeerSmallItem.js";
import BeerLargeItem from "./BeerLargeItem.js";
import NavOptions from "./NavOptions.js";
import ListFilters from "./Filters.js";
import NoResult from "./NoResult";
import { useWindowWidth } from "../Hooks/LayoutHooks.js";
import { useSearchChange } from "../Hooks/UseSearchChange";

const makeNavQueriesString = (page, itemsPage) => {
  return `?page=${page || 1}&per_page=${itemsPage}`;
};

const makeFiltersQueriesString = (abvRange, ibuRange, srmRange, nameSearch) => {
  if (abvRange) {
    let string =
      `&abv_gt=${abvRange[0]}&abv_lt=${abvRange[1]}` +
      `&ibu_gt=${ibuRange[0]}&ibu_lt=${ibuRange[1]}` +
      `&ebc_gt=${parseInt(srmRange[0]) / 2}&ebc_lt=${
        parseInt(srmRange[1]) / 2
      }` +
      (nameSearch.beer ? `&beer_name=${nameSearch.beer}` : "") +
      (nameSearch.yeast ? `&yeast=${nameSearch.yeast}` : "");

    return string;
  } else {
    return "";
  }
};

const makeRequestString = (navQueriesString, filtersQueriesString) => {
  return (
    `https://api.punkapi.com/v2/beers${navQueriesString}` +
    `${filtersQueriesString}`
  );
};

const getRangeFromQueryParams = (queryString, param) => {
  if (queryString[param]) {
    const paramQuery = queryString[param].split("-");
    const paramRange = [parseInt(paramQuery[0]), parseInt(paramQuery[1])];
    return paramRange;
  }
};

const initialAbvDomain = [0, 56];
const initialIbuDomain = [0, 250];
const initialSrmDomain = [0, 601];

// BeerList

const BeerList = ({ location, history }) => {
  const [beers, setBeers] = useState([]);

  // page & nav
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [itemsPage, setItemsPage] = useState(50);

  // reset Page & Scroll Top
  const resetPageAndScrollTop = () => {
    setPage(1);
    window.scrollTo(0, 78);
  };

  const queryString = useMemo(
    () => qs.parse(location.search, { ignoreQueryPrefix: true }),
    [location.search]
  );

  const pageDisplay = `page ${page}`;

  const { abvRange, ibuRange, srmRange } = useMemo(() => {
    return {
      abvRange: getRangeFromQueryParams(queryString, "abv") || initialAbvDomain,
      ibuRange: getRangeFromQueryParams(queryString, "ibu") || initialIbuDomain,
      srmRange: getRangeFromQueryParams(queryString, "srm") || initialSrmDomain,
    };
  }, [queryString]);

  //handle params changes

  const handlePathChangeFilters = (abv, ibu, srm) => {
    resetPageAndScrollTop();
    const path = `/catalogue/?abv=${abv[0]}-${abv[1]}&ibu=${ibu[0]}-${ibu[1]}&srm=${srm[0]}-${srm[1]}`;
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

  const [nameSearch, setNameSearch] = useSearchChange();

  // handle search change & reset page

  const handleSearchChange = (...param) => {
    resetPageAndScrollTop();
    return setNameSearch(...param);
  };

  useEffect(() => {
    const navQueriesString = makeNavQueriesString(page, itemsPage);
    console.log(nameSearch);
    const filtersQueriesString = makeFiltersQueriesString(
      abvRange,
      ibuRange,
      srmRange,
      nameSearch
    );
    const requestString = makeRequestString(
      navQueriesString,
      filtersQueriesString
    );

    fetch(requestString)
      .then((response) => response.json())
      .then((responseData) => {
        setIsLastPage(responseData.length < 50);
        return responseData;
      })
      .then((responseData) => filterBeerContainer(responseData))
      .then((responseData) => {
        console.log("USEEFFECT N°1", requestString, responseData);
        if (page > 1) {
          setBeers((beers) => [...beers, ...responseData]);
        } else {
          setBeers(responseData);
        }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });

    return () => {
      console.log("useEffect N°1 : callBack function");
    };
  }, [abvRange, ibuRange, srmRange, nameSearch, page, itemsPage]);

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
          abvDomain={initialAbvDomain}
          abvRange={abvRange}
          ibuDomain={initialIbuDomain}
          ibuRange={ibuRange}
          srmDomain={initialSrmDomain}
          srmRange={srmRange}
          onChange={handlePathChangeFilters}
          nameSearch={nameSearch}
          handleNameSearch={handleSearchChange}
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
            // onChange={handlePathChange}
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
                <button
                  className="load-more-button"
                  disabled={isLastPage}
                  onClick={() => setPage(page + 1)}
                >
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
