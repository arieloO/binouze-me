import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="main-nav">
      <li>
        <NavLink to="/" activeClassName="active-nav-route">
          catalogue
        </NavLink>
      </li>
      <li>
        <NavLink to="/?page=2">search</NavLink>
      </li>
      <li>
        <NavLink to="/?page=3">top beers</NavLink>
      </li>
      <li>
        <NavLink to="/beers/">random</NavLink>
      </li>
    </ul>
  );
};

export default HeaderNav;
