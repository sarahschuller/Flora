import React from "react";

class PlantList extends React.Component {
    render() {
        const image = this.props.details.image;
        const name = this.props.details.name;
        return (
            <div className="plant-grid">
                <li className="plant-list">
                    <h3 className="plant-name">{name}</h3>
                    <img src={image} alt={name}/>
                    <button className="plant-details">See Details</button>
                </li>
            </div>
        )
    }
}

export default PlantList
