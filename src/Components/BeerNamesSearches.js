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
      <ul>
        <li
          className="filter-option"
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
        >
          <h3>type of beer :</h3>
        </li>
        {beerTypes.map((beerType, index) => (
          <li
            className="filter-option"
            style={{
              display: open ? "inherit" : "none",
            }}
            key={index}
          >
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
