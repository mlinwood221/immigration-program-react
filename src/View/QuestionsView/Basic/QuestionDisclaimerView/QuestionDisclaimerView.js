import React, { Component } from 'react';
import QuestionDisclaimer from "../../../../Components/QuestionComponents/Basic/QuestionDisclaimer/QuestionDisclaimer";
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionDisclaimerView extends Component {
    constructor(props) {
        super(props)
    }
    
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Getting Started</p>
                <QuestionDisclaimer />
            </div>
         );
    }
}

export default QuestionDisclaimerView;
