import React from "react";
import Header from "./Header";
import Regions from "./Regions";
import PlantList from "./PlantList";
import nePlants from "../ne-plants";
import nwPlants from "../nw-plants";
import sePlants from "../se-plants";
import swPlants from "../sw-plants";


class App extends React.Component {
  state = {
    plants: {},
  };

  loadNePlants = () => {
    this.setState({ plants: nePlants });
  };

  loadNwPlants = () => {
    this.setState({ plants: nwPlants });
  };

  loadSePlants = () => {
    this.setState({ plants: sePlants });
  };

  loadSwPlants = () => {
    this.setState({ plants: swPlants });
  };

  render () {
    return (
      <div className="wrapper">
        <Header />
        <div className="region-selection">
      <Regions 
        loadNePlants={this.loadNePlants}
        loadNwPlants={this.loadNwPlants}
        loadSePlants={this.loadSePlants}
        loadSwPlants={this.loadSwPlants}
        />
        </div>
      <div className="plant-list">
        <ul className="plant">
          {Object.keys(this.state.plants).map(key => <PlantList key={key} details={this.state.plants[key]}/>)}
        </ul>
      </div>
      </div>
    )
  }
}

export default App;
