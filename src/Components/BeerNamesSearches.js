import React, { useState, useEffect } from "react";

const BeerNamesSearches = ({ handleSwitch, typesArray, category }) => {
  const [open, setOpen] = useState(false);

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
        <h3> {`type of ${category}`}</h3>
      </div>
      <ul className={open ? "filter-option-list" : "filter-option-list hidden"}>
        {typesArray.map((beerType, index) => (
          <li className="filter-option" key={index.toString()}>
            <input
              type="radio"
              id={beerType}
              name="beerType"
              value={beerType}
              onChange={(e) => handleSwitch(e.target.value)}
            ></input>
            <label htmlFor={beerType}>{beerType}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeerNamesSearches;
