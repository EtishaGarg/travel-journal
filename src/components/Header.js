import React from "react";
import globe_icon from "../images/globe.png";

function Header() {
    return(
        <div className="Header">
            <img src={globe_icon} alt="globe_icon" className="Header--img"/>
            <h4 className="Header--heading">My Travel Journal</h4>
        </div>
    )
}

export default Header;