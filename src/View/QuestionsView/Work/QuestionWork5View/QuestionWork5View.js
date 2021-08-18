import React, { Component } from 'react';
import QuestionWork5 from "../../../../Components/QuestionComponents/Work/QuestionWork5/QuestionWork5"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionWork5View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Work</p>
                <QuestionWork5 />
            </div>
         );
    }
}
 
export default QuestionWork5View;
