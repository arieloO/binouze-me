import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerList from "./Components/BeerList.js";
import HeaderNav from "./Components/HeaderNav.js";
import BeerCard from "./Components/BeerCard";

function App() {
  console.log("render app");
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>binouze.me</h1>
          <h3>bienvenue chez BrewDog</h3>
          <HeaderNav />
        </header>

        <Switch>
          <Route exact path="/binouze.me/" component={BeerList} />
          <Route path="/binouze.me/beers/:id" component={BeerCard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
