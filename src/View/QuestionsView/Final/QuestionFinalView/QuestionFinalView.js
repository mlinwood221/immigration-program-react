import React, { Component } from 'react';
import QuestionFinal from "../../../../Components/QuestionComponents/Final/QuestionFinal/QuestionFinal"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionFinalView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Wrapping Up</p>
                <QuestionFinal />
            </div>
         );
    }
}
 
export default QuestionFinalView;
