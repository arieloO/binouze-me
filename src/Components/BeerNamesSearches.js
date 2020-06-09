import React from "react";

const BeerNamesSearches = (props) => {
  const beerTypes = [
    "ipa",
    "lager",
    "pilsen",
    "stout",
    "blonde",
    "citra",
    "india",
    "double",
    "tripel",
  ];

  return (
    <div className="filter">
      {beerTypes.map((beerType, index) => (
        <div className="filter-option" key={index}>
          <input
            type="radio"
            id={beerType}
            name="beerType"
            value={beerType}
            onChange={(e) => props.handleSwitch(e.target.value)}
          ></input>
          <label htmlFor={beerType}>{beerType}</label>
        </div>
      ))}
    </div>
  );
};

export default BeerNamesSearches;
