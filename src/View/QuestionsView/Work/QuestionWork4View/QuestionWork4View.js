import React, { Component } from 'react';
import QuestionWork4 from "../../../../Components/QuestionComponents/Work/QuestionWork4/QuestionWork4"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionWork4View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Work</p>
                <QuestionWork4 />
            </div>
         );
    }
}
 
export default QuestionWork4View;
