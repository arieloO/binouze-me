import React from "react";
import { NavLink } from "react-router-dom";

const BeerLargeItem = ({ beer }) => {
  // href={beer.image_url} target="_blank" rel="noopener noreferrer"
  return (
    // <NavLink to={`/catalogue/beers/id=${beer.id}`}>
    //   <div className="beer-item">
    //     <img src={beer.image_url} alt={beer.name} className="beer-image"></img>
    //     <div className="pic-name">{beer.id + "- " + beer.name}</div>
    //   </div>
    // </NavLink>

    <div className="mini-beer-card">
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <div style={{ alignSelf: "center" }}>
          <NavLink to={`/catalogue/beers/id=${beer.id}`}>
            <img
              src={beer.image_url}
              alt={beer.name}
              className="beer-image"
            ></img>
          </NavLink>
        </div>

        <div className="mini-card-info">
          <NavLink to={`/catalogue/beers/id=${beer.id}`}>
            <p className="mini-card-title">
              <strong>{beer.name}</strong>
            </p>
          </NavLink>

          <p style={{ fontStyle: "italic" }}>{beer.tagline}</p>
          <div style={{ flexGrow: "3" }}></div>
          {/* <StarRating
              beerRating={beerRating}
              onChange={changeFavBeers}
              size={20}
              customClass={"mini-beer-stars"}
            /> */}
        </div>
      </div>
    </div>
  );
};

export default BeerLargeItem;
