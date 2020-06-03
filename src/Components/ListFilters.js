import React from "react";

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
    </div>
  );
};

export default ListFilters;
