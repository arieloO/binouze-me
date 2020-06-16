import React, { useState, useEffect } from "react";
import Star from "./Star";
import BeerStar from "./BeerStar";

const StarRating = ({ beerRating = 0 }) => {
  const [rating, setRating] = useState(beerRating);
  // Initialize a 'rating' state

  const rate = (id) => {
    if (id !== rating) {
      setRating(id);
    } else {
      setRating(0);
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
          checked={i < rating}
          size={36}
        />
      );
    }
    return list;
  };

  useEffect(() => {
    console.log("RE-RENDER !!");
  }, [rating]);

  return (
    <div>
      <ul className="beer-stars">{beerStarList()}</ul>
    </div>
  );
};

export default StarRating;
