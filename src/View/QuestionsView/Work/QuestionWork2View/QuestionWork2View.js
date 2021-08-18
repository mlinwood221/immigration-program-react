import React, { Component } from 'react';
import QuestionWork2 from "../../../../Components/QuestionComponents/Work/QuestionWork2/QuestionWork2"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionWork2View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Work</p>
                <QuestionWork2 />
            </div>
         );
    }
}

export default QuestionWork2View;
