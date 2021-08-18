import React, { Component } from 'react';
import QuestionWork3 from "../../../../Components/QuestionComponents/Work/QuestionWork3/QuestionWork3"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionWork3View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Work</p>
                <QuestionWork3 />
            </div>
         );
    }
}
 
export default QuestionWork3View;
