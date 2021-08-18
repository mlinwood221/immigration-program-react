import React, { Component } from 'react';
import "./button.css"
export const NextButton=(props)=>{
    return (
        <button className={"next-button" + (props.className ? " " + props.className : "")} onClick={props.onClick}>Next{props.children}</button>
    )
}
export const ArrowButton=(props)=>{
    return(
        <button className={"back-button" + (props.className ? " " + props.className : "")} onClick={props.onClick}>{props.children}</button>
    )
}

export const SelectButtons=(props)=>{
    return(
        <button onClick={props.onClick} className={props.className?"select-button "+props.className:"select-button"}>{props.children}</button>
    )
}
//Add button
export const AddButton=(props)=>{
    return(
        <button className="add-button" onClick={props.onClick}>{props.children}</button>
    )
}

export const RecommendButton = (props) => {
    return (
        <button className={props.className ? props.className + " recommend-button" : " recommend-button"} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export const LinkButton = (props) => {
    return (
        <a href={props.href ? props.href : '#'} className={props.className ? props.className + " link-button" : "link-button"} onClick={props.onClick} target="_blank">
            {props.children}
        </a>
    )
}

export const LoadMoreButton = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        props.onClick();
    }

    return (
        <a href="#" className={props.className ? props.className + " link-button" : "link-button"} onClick={onClick}>
            {props.children}
        </a>
    )
}
