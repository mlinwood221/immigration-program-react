import React, { Component } from 'react';
import QuestionPersonal from "../../../../Components/QuestionComponents/Basic/QuestionPersonal/QuestionPersonal";
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionPersonalView extends Component {
    state = {}
    render() {
        return (
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Getting Started</p>
                <QuestionPersonal />
            </div>
        );
    }
}

export default QuestionPersonalView;
