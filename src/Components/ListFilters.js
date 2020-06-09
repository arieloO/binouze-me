import React from "react";

import MultiSliderTest from "./MultiSliderTest.js";
import "react-rangeslider/lib/index.css";
import BeerNamesSearches from "./BeerNamesSearches";

const ListFilters = ({
  abvDomain,
  abvRange,
  handleAbvRangeChange,
  ibuDomain,
  ibuRange,
  handleIbuRangeChange,
  handleNameSearch,
  // abvHigher,
  // abvLower,
  // handleHigherSlider,
  // handleLowerSlider,
}) => {
  return (
    <div className="nav-filters">
      <BeerNamesSearches handleSwitch={handleNameSearch} />

      <ul className="filters-list">
        <li className="filter-option">
          <input
            type="checkbox"
            onChange={(e) =>
              e.target.checked ? handleNameSearch("ipa") : null
            }
            id="IPA"
            name="IPA"
          />
          <label htmlFor="IPA">IPA</label>
        </li>
        <li className="filter-option">
          {" "}
          <input
            type="checkbox"
            id="Pale Ale"
            onChange={() => handleNameSearch("pale_ale")}
            name="Pale Ale"
          />
          <label htmlFor="Pale Ale">Pale Ale</label>
        </li>
      </ul>
      <div className="filter ">
        {" "}
        Alcohol by volume :
        <MultiSliderTest
          rangeDomain={abvDomain}
          range={abvRange}
          handleRangeChange={handleAbvRangeChange}
          ticksNumber={8}
        />
      </div>
      <div className="filter ">
        {" "}
        Bitterness (IBU) :
        <MultiSliderTest
          rangeDomain={ibuDomain}
          range={ibuRange}
          handleRangeChange={handleIbuRangeChange}
          ticksNumber={6}
        />
      </div>
    </div>
  );
};

export default ListFilters;
