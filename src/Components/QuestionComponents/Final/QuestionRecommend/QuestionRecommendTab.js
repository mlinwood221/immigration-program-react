import React from 'react';
import './QuestionRecommendTab.css';

export const RecommendTabButton = (props) => {
    return (
        <button className={"tab-button" + (props.className ? " " + props.className : "")} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
