import React, { useState, useEffect } from "react";
import Star from "./Star";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  // Initialize a 'rating' state

  const rate = (id) => {
    if (id !== rating) {
      setRating(id);
    } else {
      setRating(0);
    }
  };

  const starList = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(<Star id={i + 1} key={i} rate={rate} checked={i < rating} />);
    }
    return list;
  };

  useEffect(() => {
    console.log("RE-RENDER !!");
  }, [rating]);

  // Write a function that returns 5 Star components

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props

  return <ul className="beer-stars">{starList()}</ul>;
};

export default StarRating;
