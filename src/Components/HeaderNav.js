import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="main-nav">
      <li>
        <NavLink exact to="/binouze-me/">
          Catalogue
        </NavLink>
      </li>
      <li>
        <NavLink to="/binouze-me/?page=2">recherche</NavLink>
      </li>
      <li>
        <NavLink to="/binouze-me/?page=3">top</NavLink>
      </li>
      <li>
        <NavLink to="/binouze-me/?page=4">flop</NavLink>
      </li>
    </ul>
  );
};

export default HeaderNav;
