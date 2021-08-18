import React, { Component } from 'react';
import QuestionEducation2 from "../../../../Components/QuestionComponents/Education/QuestionEducation2/QuestionEducation2";
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionEducation2View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Education</p>
                <QuestionEducation2 />
            </div>
         );
    }
}
 
export default QuestionEducation2View;
