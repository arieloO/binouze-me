import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="main-nav">
      <li>
        {" "}
        <NavLink exact to="/">
          {" "}
          0-24{" "}
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/24"> 25 to 50 </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/48"> 50 to 75 </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/72"> 75 to 100 </NavLink>
      </li>
    </ul>
  );
};

export default HeaderNav;
