import React from "react";
import Header from "./Header";
import Card from "./Card";
import world from '../world.json';
import flags from '../flags-128x128.json';

function createCard(country) {
  return (
    <Card
      key={country["id"]}
      className={"country-name"}
      src={flags[country["alpha2"]]}
      country={country["name"]}
      alt={country["name"] + "alpha3: " + country["alpha3"]}
    />
  );
}

function App() {
  return (
    <div className="container">
      <Header
        heading="Flags Dictionary"
        left_emoji="&#x1F1EE;&#x1F1F3;"
        right_emoji="&#x1F1EE;&#x1F1F3;"
      />
      <div className="body-container">
        {world.map(createCard)}
      </div>
    </div>
  );
}

export default App;
