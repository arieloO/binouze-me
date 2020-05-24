import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerList from "./Components/BeerList.js";
import HeaderNav from "./Components/HeaderNav.js";

function App() {
  console.log("render app");
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>binouze.me</h1>
          <h3>bienvenue chez vous</h3>
          <HeaderNav />
        </header>

        <Switch>
          <Route exact path="/" render={() => <BeerList page={1} />} />
          <Route exact path="/24" render={() => <BeerList page={2} />} />
          <Route exact path="/48" render={() => <BeerList page={3} />} />
          <Route exact path="/72" render={() => <BeerList page={4} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
