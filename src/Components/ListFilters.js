import React, { useState } from "react";

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
  const [abvValue, setAbvValue] = useState(50);

  const handleOnChange = (value) => {
    setAbvValue(value);
  };

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
            min={0.5}
            max={55}
            step={1}
            value={abvValue}
            orientation="vertical"
            tooltip={true}
            labels={{
              3: "0,5°",
              15: "15°",
              30: "30°",
              55: "55°",
            }}
            // handleLabel={abvValue}
            // format={Function}
            // onChangeStart={handleOnChange}
            onChange={handleOnChange}
            onChangeComplete={handleFilterChanges}
          />
        </li>
      </ul>
    </div>
  );
};

export default ListFilters;
