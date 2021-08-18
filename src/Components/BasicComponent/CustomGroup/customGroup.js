import React, { Component } from 'react'
import CrossIcon from "../../../Assests/Icons/icon  cros.png";
import './customGroup.css';
export const CustomGroup = (props) => {
    return (
        <div className={props.className ? "custom-group " + props.className : "custom-group"}>
            {props.children}
        </div>
    )
}

export const CustomGroupDeleteButton = (props) => {
    return (
        <button className="custom-group-delete-btn" onClick={props.onClick}><img src={CrossIcon} /></button>
    )
}
