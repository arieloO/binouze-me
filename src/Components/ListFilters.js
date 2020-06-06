import React from "react";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const ListFilters = ({
  beers,
  itemsPage,
  page,
  handleFilterChanges,
  setItemsPage,
  pageDisplay,
  abvHigher,
  abvLower,
  handleHigherSlider,
  handleLowerSlider,
}) => {
  return (
    <div className="nav-filters">
      <ul className="filters-list">
        <li className="filter-option">
          <input
            type="checkbox"
            onChange={handleFilterChanges}
            id="scales"
            name="scales"
          />
          <label htmlFor="scales">Scales</label>
        </li>
        <li className="filter-option">
          {" "}
          <input type="checkbox" id="prout" name="prout" />
          <label htmlFor="prout">prout</label>
        </li>
        <li>
          <Slider
            min={1}
            max={55}
            step={1}
            value={abvHigher}
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
            onChange={handleHigherSlider}
            onChangeComplete={handleFilterChanges}
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
            onChangeComplete={handleFilterChanges}
          />
        </li>
      </ul>
    </div>
  );
};

export default ListFilters;
