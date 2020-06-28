import React, { useState, useEffect } from "react";

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

  const [open, setOpen] = useState(true);

  useEffect(() => {
    console.log(open);
  }, [open]);

  console.log(open);
  return (
    <div className="filter">
      <div
        className={open ? "option-title opened" : "option-title"}
        onClick={() => {
          console.log(open);
          setOpen(!open);
          console.log(open);
        }}
      >
        <h3> type of beer :</h3>
      </div>
      <ul className={open ? "filter-option-list" : "filter-option-list hidden"}>
        {beerTypes.map((beerType, index) => (
          <li className="filter-option">
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
