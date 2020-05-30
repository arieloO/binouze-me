import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          1
        </NavLink>
      </li>
      <li>
        <NavLink to="/?page=2">2</NavLink>
      </li>
      <li>
        <NavLink to="/?page=3">3</NavLink>
      </li>
      <li>
        <NavLink to="/?page=4">4</NavLink>
      </li>
    </ul>
  );
};

export default HeaderNav;
