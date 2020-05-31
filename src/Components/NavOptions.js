import React, { useState, useEffect } from "react";

const NavOptions = ({
  beers,
  itemsPage,
  page,
  handlePageChanges,
  setItemsPage,
  pageDisplay,
}) => {
  return (
    <div className="nav-options">
      <button
        onClick={() => handlePageChanges(-1)}
        className="page-nav"
        disabled={page === 1 ? true : false}
      >
        ⇦
      </button>
      <span>{pageDisplay}</span>
      <div>
        <label>Bières par page :</label>
        <select onChange={(e) => setItemsPage(parseInt(e.target.value))}>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
        </select>
      </div>

      <button
        onClick={() => handlePageChanges(1)}
        className="page-nav"
        disabled={beers.length !== itemsPage ? true : false}
      >
        ⇨
      </button>
    </div>
  );
};

export default NavOptions;
