import React from "react";

import MultiSliderTest from "./MultiSliderTest.js";
import "react-rangeslider/lib/index.css";

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
      <ul className="filters-list">
        <li className="filter-option">
          <input
            type="checkbox"
            onChange={(e) =>
              e.target.checked ? handleNameSearch("IPA") : null
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
            onChange={() => handleNameSearch("Pale Ale")}
            name="Pale Ale"
          />
          <label htmlFor="Pale Ale">Pale Ale</label>
        </li>
        {/* <li>
          <Slider
            min={1}
            max={56}
            step={1}
            value={abvHigher}
            orientation="horizontal"
            reverse={false}
            tooltip={true}
            labels={{
              1: "0,5°",
              15: "15°",
              30: "30°",
              55: "55° !!",
            }}
            // handleLabel={abvValue}
            // format={Function}
            onChangeStart={undefined}
            onChange={handleHigherSlider}
            onChangeComplete
          />
        </li>
        <li>
          <Slider
            min={1}
            max={55}
            step={1}
            value={abvLower}
            orientation="horizontal"
            reverse={false}
            tooltip={true}
            labels={{
              1: "0,5°",
              15: "15°",
              30: "30°",
              55: "55°",
            }}
            // handleLabel={abvValue}
            // format={Function}
            onChangeStart={undefined}
            onChange={handleLowerSlider}
            onChangeComplete
          />
        </li> */}
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
