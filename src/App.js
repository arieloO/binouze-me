import React, { useState, useEffect } from "react";
import "./Stylesheets/normalize.css";
import "./Stylesheets/App.css";
import "./Stylesheets/filters.css";
import "./Stylesheets/beerList.css";
import "./Stylesheets/beer.css";
import "./Stylesheets/topBeers.css";
import "./Stylesheets/media-queries.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerList from "./Components/BeerList.js";
import HeaderNav from "./Components/HeaderNav.js";
import BeerCard from "./Components/BeerCard";
import TopBeers from "./Components/TopBeers";
import NoMatch from "./Components/NoMatch";
import ComingSoon from "./Components/ComingSoon";

function App() {
  console.log("render app");

  // const device = {
  //   width: window.innerWidth,
  //   isMobile: window.innerWidth < 640,
  // };
  // const DeviceContext = createContext();

  const localState = JSON.parse(localStorage.getItem("favBeers"));

  const [favBeers, setFavBeers] = useState(localState || false);

  useEffect(() => {
    localStorage.setItem("favBeers", JSON.stringify(favBeers));
  }, [favBeers]);

  return (
    // <DeviceContext.Provider value={}>
    <BrowserRouter basename="/binouze-me">
      <div className="App">
        <header className="app-header">
          <div className="site-title">
            <h2>binouze-me</h2>
            <h5>welcome to Brewdog</h5>
          </div>
          <HeaderNav />
        </header>
        <Switch>
          <Route exact path="/" component={BeerList} />
          <Route
            path="/catalogue/beers/:id"
            render={({ match }) => (
              <BeerCard
                favBeers={favBeers}
                setFavBeers={setFavBeers}
                match={match}
              />
            )}
          />
          <Route
            path="/catalogue/beers/:id"
            render={() => (
              <BeerCard
                favBeers={favBeers}
                setFavBeers={setFavBeers}
                match="random"
              />
            )}
          />
          <Route path="/catalogue" component={BeerList} />
          <Route path="/search" component={ComingSoon} />
          <Route
            path="/top/"
            render={() => (
              <TopBeers favBeers={favBeers} setFavBeers={setFavBeers} />
            )}
          />

          {/* <Route exact path="/beers" component={BeerCard} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>

      <footer
        style={{
          display: "flex",
          width: "100%",
          padding: "2px",
          justifyContent: "center",
          boxShadow: "0px 1px 2px -1px inset #124e78",
        }}
      >
        <p
          style={{
            margin: "1px",
          }}
        >
          Thank you for trying this little app, hope you enjoyed it, it was made
          using{" "}
          <a href="https://punkapi.com/" style={{ color: "blue" }}>
            punkapi.com
          </a>
          , come visit me on{" "}
          <a href="https://github.com/arieloO" style={{ color: "blue" }}>
            my git-hub page
          </a>{" "}
          for more - icons by <a href="https://icons8.com">Icons8</a>
        </p>
      </footer>
    </BrowserRouter>
    // </DeviceContext.Provider>
  );
}

export default App;
