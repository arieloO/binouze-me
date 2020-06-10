import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerList from "./Components/BeerList.js";
import HeaderNav from "./Components/HeaderNav.js";
import BeerCard from "./Components/BeerCard";
import NoMatch from "./Components/NoMatch";

function App() {
  console.log("render app");

  const [favBeers, setFavBeers] = useState();

  const localState = localStorage.getItem("favBeers");
  if (localState !== null) {
    setFavBeers(JSON.parse(localState));
  }

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
          <Route path="/top/" component={BeerCard} />
          <Route path="/beers/:id" component={BeerCard} />

          <Route exact path="/beers" component={BeerCard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
