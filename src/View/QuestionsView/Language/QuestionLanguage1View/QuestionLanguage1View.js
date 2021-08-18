import React, { Component } from 'react';
import QuestionLanguage1 from "../../../../Components/QuestionComponents/Language/QuestionLanguage1/QuestionLanguage1"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionLanguage1View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Language Skills</p>
                <QuestionLanguage1 />
            </div>
         );
    }
}
 
export default QuestionLanguage1View;
