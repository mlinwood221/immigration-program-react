import React, { Component } from 'react';
import QuestionEducation3 from "../../../../Components/QuestionComponents/Education/QuestionEducation3/QuestionEducation3"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionEducation3View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Education</p>
                <QuestionEducation3 />
            </div>
         );
    }
}
 
export default QuestionEducation3View;
