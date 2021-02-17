import React, { useState, useEffect } from "react";

const BeerNamesSearches = ({
  handleNameSearch,
  typesArray,
  category,
  selected,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log(open);
  }, [open]);

  console.log("$$$$$$$$$$$$$", category, selected);

  // console.log(open);
  return (
    <div className="filter">
      <div
        className={open ? "option-title opened" : "option-title"}
        onClick={() => {
          setOpen(!open);
          console.log("BeerTypeFilter : ", open);
        }}
      >
        <h3> {`type of ${category}`}</h3>
      </div>
      <ul className="filter-option-list">
        {typesArray.map((beerType, index) => {
          const beerValue = beerType.replace(" ", "_");

          return (
            <li
              className={
                open ? "filter-option" : "filter-option filter-option-hidden"
              }
              key={index.toString()}
            >
              <input
                type="radio"
                id={beerValue}
                name={category}
                value={beerValue}
                checked={selected === beerValue}
                onChange={handleNameSearch}
                onClick={handleNameSearch}
              ></input>
              <label htmlFor={beerValue}>{beerType}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BeerNamesSearches;
