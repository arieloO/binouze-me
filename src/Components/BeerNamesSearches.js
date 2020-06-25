import React, { useState } from "react";

const BeerNamesSearches = (props) => {
  const beerTypes = [
    "ipa",
    "lager",
    "pils",
    "stout",
    "blonde",
    "citra",
    "india",
    "double",
    "tripel",
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="filter">
      <div
        className={open ? "filter-option open" : "filter-option hiden"}
        key={index}
        onClick={() => {
          setOpen(!open);
          console.log(open);
        }}
      >
        <h3 className="option-title"> type of beer :</h3>
      </div>
      <ul>
        {beerTypes.map((beerType, index) => (
          <li className="filter-option-list" key={index}>
            <input
              type="radio"
              id={beerType}
              name="beerType"
              value={beerType}
              onChange={(e) => props.handleSwitch(e.target.value)}
            ></input>
            <label htmlFor={beerType}>{beerType}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeerNamesSearches;
