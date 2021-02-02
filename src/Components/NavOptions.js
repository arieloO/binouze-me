import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as FilterIcon } from "../media/filter-icon.svg";
import { ReactComponent as SmallItemsIcon } from "../media/small-items-icon.svg";
import { ReactComponent as LargeItemsIcon } from "../media/large-items-icon.svg";

const NavOptions = ({
  beers,
  itemsPage,
  page,
  pageDisplay,
  onChange,
  largeGrid,
  switchGrid,
  hiddenFilters,
  handleHiddenFilters,
  isMobile,
}) => {
  // console.log("hidden filters :::: ", hiddenFilters);

  return (
    <div className="nav-options">
      {/* <button
        onClick={() => onChange(page - 1, itemsPage)}
        className="page-nav"
        disabled={page === 1 ? true : false}
      >
        ⇦
      </button> */}
      <div
        className="nav-filter-title"
        hidden={!isMobile}
        onClick={() => handleHiddenFilters(!hiddenFilters)}
      >
        <FilterIcon id="filter-icon" />
      </div>
      <span>{pageDisplay}</span>
      <div>
        <select
          id="itemsPerPage"
          value={itemsPage}
          onChange={(e) => onChange(1, parseInt(e.target.value))}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
        </select>
        <label htmlFor="itemsPerPage">items</label>
      </div>
      {/* <button > */}
      <div className="items-size-button" onClick={() => switchGrid(largeGrid)}>
        <SmallItemsIcon
          className={!largeGrid ? "grid-icon-selected grid-icon" : "grid-icon"}
        />
        <LargeItemsIcon
          className={largeGrid ? "grid-icon-selected grid-icon" : "grid-icon"}
        />
      </div>
      {/* </button> */}
      <div>
        <NavLink
          to="/catalogue/beers/id=random"
          activeClassName="active-nav-route"
        >
          <img
            src="https://img.icons8.com/fluent-systems-regular/40/000000/dice.png"
            alt="dice roll"
            className="diceroll"
          />
        </NavLink>
      </div>
      {/* <button
        onClick={() => onChange(page + 1, itemsPage)}
        className="page-nav"
        disabled={beers.length !== itemsPage ? true : false}
      >
        ⇨
      </button> */}
    </div>
  );
};

export default NavOptions;
