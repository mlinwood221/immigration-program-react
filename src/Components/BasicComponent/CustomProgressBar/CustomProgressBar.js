import React, { Component } from 'react'
import './CustomProgressBar.css';

const CustomProgressBar = (props) => {
    return(
        <div className={props.className ? props.className + " custom-progressbar" : "custom-progressbar"}>
            <div className="custom-progressbar-body" style={{width:`${props.now}%`}}>
            </div>
        </div>
    )
}

export default CustomProgressBar;
