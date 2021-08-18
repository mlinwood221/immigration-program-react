import React, { Component } from 'react';
import { QuestionRecommendHeader, QuestionRecommendBody } from "../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommend";

export default class QuestionRecommendCRS extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
            cursorCrs: 0
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        if (state.cursorCrs == 0)
            return {cursorCrs: props.crsRecommendations.length < 3 ? props.crsRecommendations.length : 3};
        else
            return state;
    }

    addCursorCrs = () => {
        let { cursorCrs } = this.state;
        const { crsRecommendations } = this.props;

        cursorCrs += 3;
        if (cursorCrs > crsRecommendations.length)
            cursorCrs = crsRecommendations.length;

        this.setState({
            cursorCrs: cursorCrs
        });
    }

    render() {
        const {cursorCrs} = this.state;
        const {crsPoint, needRecommendations, crsRecommendations} = this.props;

        return (
            <>
            <QuestionRecommendHeader score={crsPoint} needRecommendations={needRecommendations}>
                {needRecommendations 
                    ? "Your score indicates that you are almost ready to immigrate to Canada."
                        : "Your score indicates that you are in a good position to start your immigration process." }
            </QuestionRecommendHeader>
            </>
        );
    }
}
