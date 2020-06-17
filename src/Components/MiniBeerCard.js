import React, { useState, useEffect } from "react";
const MiniBeerCard = ({ id }) => {
  const [requestStatus, setRequestStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const beerData = fetch(`https://api.punkapi.com/v2/beers/${id || "random"}`)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("responseData", responseData[0]);
      console.log(requestStatus);
      console.log(loadingStatus);
      setRequestStatus(true);
      return responseData[0];
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    });
  console.log("test beer Data : ", beerData);

  useEffect(() => {
    setLoadingStatus(true);
  }, [requestStatus]);

  if (!requestStatus) {
    console.log("test beer Data  FALSE: ", beerData);
    return null;
  } else {
    console.log("test beer Data  TRUE: ", beerData);
    return (
      <div
        className="mini-beer-card"
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: "pink",
          margin: "10px",
        }}
      >
        <div /*className="beer-img-star"*/>
          <img
            src={beerData.image_url}
            alt={beerData.name}
            className="beer-card-image"
          ></img>
        </div>
        {/* 
        <div className="beer-card-info">
          <h1 className="beer-card-title">
            <strong>{beerData.name}</strong>
          </h1>
          <p style={{ marginTop: 5, fontStyle: "italic" }}>
            {beerData.tagline}
          </p>
          <h2>BREWERS TIPS</h2>
          <p>{beerData.brewers_tips}</p>
          <h2>FOOD PAIRING</h2>

          <ul style={{ listStyle: "symbols(cyclic '❁''❁')" }}>
            {beerData.food_pairing.map((dishes, id) => (
              <li key={id}>{dishes}</li>
            ))}
          </ul>
        </div> */}
      </div>
    );
  }
};

export default MiniBeerCard;
