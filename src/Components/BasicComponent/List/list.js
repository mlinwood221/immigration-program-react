import React, { Component } from 'react';
import "./list.css"
export const Ol=(props)=>{
    return(
        <ol>
            {props.children}
        </ol>
    )
}
export const Li=(props)=>{
    return(
        <li className="list">
            {props.children}
            <p className="monthYear"><span className="pl-4">month,year</span><span className="edit">Edit</span></p>
        </li>
    )
}