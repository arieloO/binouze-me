import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="main-nav">
      <li>
        <NavLink to="/catalogue" activeClassName="active-nav-route">
          catalogue
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" activeClassName="active-nav-route">
          search
        </NavLink>
      </li>
      <li>
        <NavLink to="/top" activeClassName="active-nav-route">
          top beers
        </NavLink>
      </li>
      <li>
        <NavLink to="/beers" activeClassName="active-nav-route">
          random
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderNav;
