import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="main-nav">
      <li>
        <NavLink to="/catalogue" activeClassName="active-nav-route">
          <img
            alt=""
            style={{
              width: "42px",
              height: "42px",
            }}
            src="https://img.icons8.com/pastel-glyph/64/000000/liquor-shelf--v2.png"
          />
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/search" activeClassName="active-nav-route">
          search
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/top" activeClassName="active-nav-route">
          <img
            style={{
              width: "42px",
              height: "42px",
            }}
            alt="user rated beers"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1LjUzMnB4IiBoZWlnaHQ9IjQ1LjUzMnB4IiB2aWV3Qm94PSIwIDAgNDUuNTMyIDQ1LjUzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuNTMyIDQ1LjUzMjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyLjc2NiwwLjAwMUMxMC4xOTQsMC4wMDEsMCwxMC4xOTMsMCwyMi43NjZzMTAuMTkzLDIyLjc2NSwyMi43NjYsMjIuNzY1YzEyLjU3NCwwLDIyLjc2Ni0xMC4xOTIsMjIuNzY2LTIyLjc2NQ0KCQlTMzUuMzQsMC4wMDEsMjIuNzY2LDAuMDAxeiBNMjIuNzY2LDYuODA4YzQuMTYsMCw3LjUzMSwzLjM3Miw3LjUzMSw3LjUzYzAsNC4xNTktMy4zNzEsNy41My03LjUzMSw3LjUzDQoJCWMtNC4xNTgsMC03LjUyOS0zLjM3MS03LjUyOS03LjUzQzE1LjIzNywxMC4xOCwxOC42MDgsNi44MDgsMjIuNzY2LDYuODA4eiBNMjIuNzYxLDM5LjU3OWMtNC4xNDksMC03Ljk0OS0xLjUxMS0xMC44OC00LjAxMg0KCQljLTAuNzE0LTAuNjA5LTEuMTI2LTEuNTAyLTEuMTI2LTIuNDM5YzAtNC4yMTcsMy40MTMtNy41OTIsNy42MzEtNy41OTJoOC43NjJjNC4yMTksMCw3LjYxOSwzLjM3NSw3LjYxOSw3LjU5Mg0KCQljMCwwLjkzOC0wLjQxLDEuODI5LTEuMTI1LDIuNDM4QzMwLjcxMiwzOC4wNjgsMjYuOTExLDM5LjU3OSwyMi43NjEsMzkuNTc5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
          />
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/catalogue/beers/id=random"
          activeClassName="active-nav-route"
        >
          random
        </NavLink>
      </li> */}
    </ul>
  );
};

export default HeaderNav;
