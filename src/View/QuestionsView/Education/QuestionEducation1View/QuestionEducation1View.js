import React, { Component } from 'react';
import QuestionEducation1 from "../../../../Components/QuestionComponents/Education/QuestionEducation1/QuestionEducation1"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionEducation1View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Education</p>
                <QuestionEducation1 />
            </div>
         );
    }
}
 
export default QuestionEducation1View;
