import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as FilterIcon } from "../media/filter-icon.svg";
import { ReactComponent as SmallItemsIcon } from "../media/small-items-icon.svg";
import { ReactComponent as LargeItemsIcon } from "../media/large-items-icon.svg";

const NavOptions = ({
  largeGrid,
  switchGrid,
  hiddenFilters,
  handleHiddenFilters,
  isMobile,
}) => {
  return (
    <div className="nav-options">
      <div
        className="nav-filter-title"
        hidden={!isMobile}
        onClick={() => handleHiddenFilters(!hiddenFilters)}
      >
        <FilterIcon id="filter-icon" />
      </div>
      <div className="items-size-button" onClick={() => switchGrid(largeGrid)}>
        <SmallItemsIcon
          className={!largeGrid ? "grid-icon-selected grid-icon" : "grid-icon"}
        />
        <LargeItemsIcon
          className={largeGrid ? "grid-icon-selected grid-icon" : "grid-icon"}
        />
      </div>
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
    </div>
  );
};

export default NavOptions;
