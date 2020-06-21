import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerList from "./Components/BeerList.js";
import HeaderNav from "./Components/HeaderNav.js";
import BeerCard from "./Components/BeerCard";
import TopBeers from "./Components/TopBeers";
import NoMatch from "./Components/NoMatch";

function App() {
  console.log("render app");

  const localState = JSON.parse(localStorage.getItem("favBeers"));

  const [favBeers, setFavBeers] = useState(localState || false);

  useEffect(() => {
    localStorage.setItem("favBeers", JSON.stringify(favBeers));
  }, [favBeers]);

  return (
    <BrowserRouter basename="/binouze-me">
      <div className="App">
        <header className="App-header">
          <h1>binouze-me</h1>
          <h3>bienvenue chez Brewdog</h3>
          <HeaderNav />
        </header>
        <Switch>
          <Route exact path="/" component={BeerList} />
          <Route path="/catalogue" component={BeerList} />
          <Route path="search/" component={BeerCard} />
          <Route
            path="/top/"
            render={() => (
              <TopBeers favBeers={favBeers} setFavBeers={setFavBeers} />
            )}
          />
          <Route
            path="/beers/:id"
            render={({ match }) => (
              <BeerCard
                favBeers={favBeers}
                setFavBeers={setFavBeers}
                match={match}
              />
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
          justifyContent: "center",
          boxShadow: "0px 0px 2px 1px inset #124e78, 0px 0px 2px 0px #124e78",
        }}
      >
        <p
          style={{
            margin: "1px",
          }}
        >
          Thank you for trying this little app, hope you enjoyed it, come visit
          me on{" "}
          <a href="https://github.com/arieloO" style={{ color: "blue" }}>
            my git-hub page
          </a>{" "}
          for more info
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
