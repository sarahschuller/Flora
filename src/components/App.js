import React from "react";
import Regions from "./Regions";
import PlantsList from "./PlantsList";
import Plants from "./Plants";

class App extends React.Component {
  render () {
    return (
      <div className="app">
      <Regions />
      <PlantsList />
      <Plants />
      </div>
    )
  }
}

export default App;
