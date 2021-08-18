import React, { Component } from 'react';
import QuestionLanguage2 from "../../../../Components/QuestionComponents/Language/QuestionLanguage2/QuestionLanguage2"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionLanguage2View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Language Skills</p>
                <QuestionLanguage2 />
            </div>
         );
    }
}
 
export default QuestionLanguage2View;
