import React from "react";
import "./App.css";
import BeerList from "./Components/BeerList.js";

function App() {
  console.log("render app");
  return (
    <div className="App">
      <header className="App-header">
        <h1>binouze.me</h1>
        <h3>bienvenue chez vous</h3>
      </header>
      <BeerList />
    </div>
  );
}

export default App;
