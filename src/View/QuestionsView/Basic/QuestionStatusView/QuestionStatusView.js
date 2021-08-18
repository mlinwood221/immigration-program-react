import React, { Component } from 'react';
import QuestionStatus from "../../../../Components/QuestionComponents/Basic/QuestionStatus/QuestionStatus";
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionStatusView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Citizen Status</p>
                <QuestionStatus />                
            </div>
         );
    }
}

export default QuestionStatusView;
