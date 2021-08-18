import React, { Component } from 'react'
import CustomCircularProgressBar from "../../../BasicComponent/CustomCircularProgressBar/CustomCircularProgressBar";
import { LoadMoreButton, RecommendButton } from "../../../BasicComponent/Button/button";

import DownArrowIcon from "../../../../Assests/Icons/icon-arrow-down-dark.svg";
import './QuestionRecommend.css';

export const QuestionRecommendHeader = (props) => {
    return (
        <div className="recommendation-header">
            <CustomCircularProgressBar score={props.score} needRecommendations={props.needRecommendations} />
            <p className="recommendation-header-description">
                {props.children}
            </p>
        </div>
    );
}

export const QuestionRecommendHeader2 = (props) => {
    return (
        <div className="recommendation-header2">
            <p className="recommendation-header2-title">Sorry,</p>
            <p className="recommendation-header2-description">
                {props.children}
            </p>
        </div>
    );
}

export const QuestionRecommendBody = (props) => {
    return (
        <React.Fragment>
            <div className="recommendation-body">
                <p className="recommendation-body-title">
                    {props.title}
                </p>
                <p style={{ fontStyle: 'italic' }}>The recommendations provided are general and do not take all factors into account. Please review suggested action items with a licensed immigration professional to ensure that it is the best course of action for you.</p>
                <br />
                <p>We have {`<${props.total}>`} recommendations for you. Please review the following next steps and choose which path you’d like to take.</p>
                {props.children}
            </div>
            <div className="recommendation-see-more">
                {props.hideAddMore == false && (
                    <LoadMoreButton onClick={props.onClick}>
                        <p>See more result</p>
                        <img src={DownArrowIcon} />
                    </LoadMoreButton>
                )}
            </div>
        </React.Fragment>
    );
}
