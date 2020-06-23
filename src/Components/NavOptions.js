import React from "react";

const NavOptions = ({ beers, itemsPage, page, pageDisplay, onChange }) => {
  return (
    <div className="nav-options">
      <button
        onClick={() => onChange(page - 1, itemsPage)}
        className="page-nav"
        disabled={page === 1 ? true : false}
      >
        ⇦
      </button>
      <span>{pageDisplay}</span>
      <div>
        <label>Bières par page :</label>
        <select
          value={itemsPage}
          onChange={(e) => onChange(page, parseInt(e.target.value))}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
        </select>
      </div>

      <button
        onClick={() => onChange(page + 1, itemsPage)}
        className="page-nav"
        disabled={beers.length !== itemsPage ? true : false}
      >
        ⇨
      </button>
    </div>
  );
};

export default NavOptions;
