import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("");

    return (
        <div className="container">
            <div className="traffic">
                <div className="base"></div>
                <div className="traffic-light">
                    <div onClick={() => setColor(color === 'red' ? "" : 'red')} className={"light red" + ((color === "red") ? " glow" : "")}></div>
                    <div onClick={() => setColor(color === 'yellow' ? "" : 'yellow')} className={"light yellow" + ((color === "yellow") ? " glow" : "")}></div>
                    <div onClick={() => setColor(color === 'green' ? "" : 'green')} className={"light green" + ((color === "green") ? " glow" : "")}></div>
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;
