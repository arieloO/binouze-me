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
      </ul>
      <Slider
        min={0}
        max={100}
        step={1}
        value={50}
        orientation="vertical"
        tooltip={true}
        labels={{ 0: "Low", 50: "Medium", 100: "High" }}
      />
    </div>
  );
};

export default ListFilters;
