import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { NavLink } from "react-router-dom";
import ColorCorner from "./ColorCorner.js";

const MiniBeerCard = ({ id, beerRating, setFavBeers }) => {
  const [requestStatus, setRequestStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const beerId = id;
  const [beerData, setBeerData] = useState();

  const changeFavBeers = (note) => {
    setFavBeers((favBeers) => {
      const newFavBeers = { ...favBeers };
      newFavBeers[beerId] = note;
      return newFavBeers;
    });
  };

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${beerId || "random"}`)
      .then((response) => response.json())
      .then((data) => data[0])
      .then((responseData) => {
        setBeerData(responseData);
        setLoadingStatus(true);
        setRequestStatus(true);
      })
      .catch((error) => {
        setRequestStatus(false);
        console.log("Error fetching and parsing data", error);
      });
  }, [beerId]);

  if (!requestStatus && !loadingStatus) {
    return null;
  } else if (!beerData) {
    return (
      <div
        style={{
          flexGrow: 2,
          height: "100vh",
          width: "80vw",
          margin: "20px 0",
        }}
      >
        <p>You haven't rated any beer yet !</p>
      </div>
    );
  } else {
    return (
      <div className="mini-beer-card">
        <ColorCorner ebc={beerData.ebc} size={30} />
        {/* <div style={{ display: "flex", flexDirection: "row", height: "100%" }}> */}
        <div style={{ alignSelf: "center" }}>
          <NavLink to={`/catalogue/beers/id=${beerData.id}`}>
            <img
              src={beerData.image_url}
              alt={beerData.name}
              className="beer-image"
            ></img>
          </NavLink>
        </div>

        <div className="mini-card-info">
          <NavLink to={`/beers/id=${beerData.id}`}>
            <p className="mini-card-title">
              <strong>{beerData.name}</strong>
            </p>
          </NavLink>
          <div style={{ flexGrow: "3" }}></div>

          <p style={{ fontStyle: "italic" }}>{beerData.tagline}</p>
          <StarRating
            beerRating={beerRating}
            onChange={changeFavBeers}
            size={28}
            customClass={"mini-beer-stars"}
          />
        </div>
        {/* </div> */}
      </div>
    );
  }
};

export default MiniBeerCard;
