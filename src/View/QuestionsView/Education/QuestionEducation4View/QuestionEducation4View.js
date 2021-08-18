import React, { Component } from 'react';
import QuestionEducation4 from "../../../../Components/QuestionComponents/Education/QuestionEducation4/QuestionEducation4"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionEducation4View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Education</p>
                <QuestionEducation4 />
            </div>
         );
    }
}
 
export default QuestionEducation4View;
