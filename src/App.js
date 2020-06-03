import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerList from "./Components/BeerList.js";
import HeaderNav from "./Components/HeaderNav.js";
import BeerCard from "./Components/BeerCard";
import NoMatch from "./Components/NoMatch";

function App() {
  console.log("render app");
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
          <Route path="/beers/:id" component={BeerCard} />

          <Route path="/beers" component={BeerCard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
