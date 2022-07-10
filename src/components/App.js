import React from "react";
import Regions from "./Regions";
import PlantsList from "./PlantsList";
import Plants from "./Plants";
import nePlants from "../ne-plants";

class App extends React.Component {
  state = {
    plants: {},
  };

  loadNePlants = () => {
    this.setState({ plants: nePlants });
  };

  render () {
    return (
      <div className="app">
      <Regions 
        loadNePlants={this.loadNePlants}
        />
      <PlantsList />
      <Plants />
      </div>
    )
  }
}

export default App;
