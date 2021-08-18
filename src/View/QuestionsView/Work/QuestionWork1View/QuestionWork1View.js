import React, { Component } from 'react';
import QuestionWork1 from "../../../../Components/QuestionComponents/Work/QuestionWork1/QuestionWork1"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionWork1View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Work</p>
                <QuestionWork1 />
            </div>
         );
    }
}
 
export default QuestionWork1View;
