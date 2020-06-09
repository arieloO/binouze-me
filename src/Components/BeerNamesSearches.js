import React from "react";

const BeerNamesSearches = () => {
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
    <div>
      {beerTypes.map((beerType, index) => (
        <input
          type="radio"
          id={beerType}
          name={beerType}
          value={beerType}
          className="filter-option"
          key={index}
        ></input>
      ))}
    </div>
  );
};

export default BeerNamesSearches;
