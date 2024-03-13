import React from "react";
import './style.css' 

const NavItem = (props) => {
    return (
        <a href={props.link} onClick={props.function} download={props.download}>
            <div className="nav-item-container">
                <img src={props.image} className="image" alt=""/>
                <span className="info-text">{props.text}</span>
            </div>
        </a>
        
    );
}

export default NavItem;