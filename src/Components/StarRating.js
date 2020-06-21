import React from "react";
// import Star from "./Star";
import BeerStar from "./BeerStar";

const StarRating = ({ onChange, beerRating, size }) => {
  // Initialize a 'rating' state

  const rate = (id) => {
    if (id !== beerRating) {
      onChange(id);
    } else {
      onChange(0);
    }
  };

  // const starList = () => {
  //   let list = [];
  //   for (let i = 0; i < 5; i++) {
  //     list.push(<Star id={i + 1} key={i} rate={rate} checked={i < rating} />);
  //   }
  //   return list;
  // };
  const beerStarList = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <BeerStar
          id={i + 1}
          key={i}
          rate={rate}
          checked={i < beerRating}
          size={size}
        />
      );
    }
    return list;
  };

  return (
    <div>
      <ul className="beer-stars">{beerStarList()}</ul>
    </div>
  );
};

export default StarRating;
