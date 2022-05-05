import React from "react";
import map_icon from "../images/location.png";

function Card(props){
    return(
        <div className="Card">
            <img src= {props.image} className="Card--img"/>
            <div className="Card--description">
                <div className="Card--location">
                    <img src={map_icon}/>
                    <h3>{props.location}</h3>
                    <a href={props.map} target= "_blank">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;