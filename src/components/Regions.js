import React from "react";

class Regions extends React.Component {
    render() {
        return (
            <div className="regions">
                <p>Regions!</p>
                <button className="ne-plants" onClick={this.props.loadNePlants}>Northeast</button>
                <button className="nw-plants" onClick={this.props.loadNwPlants}>Northwest</button>
                <button className="se-plants" onClick={this.props.loadSePlants}>Southeast</button>
                <button className="sw-plants" onClick={this.props.loadSwPlants}>Southwest</button>
            </div>
            
        )
    }
}

export default Regions;
