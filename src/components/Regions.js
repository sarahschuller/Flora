import React from "react";

class Regions extends React.Component {
    render() {
        return (
            <div className="regions">
                <p>Regions!</p>
                <button className="ne-plants">Northeast</button>
                <button className="nw-plants">Northwest</button>
                <button className="se-plants">Southeast</button>
                <button className="sw-plants">Southwest</button>
            </div>
            
        )
    }
}

export default Regions;
