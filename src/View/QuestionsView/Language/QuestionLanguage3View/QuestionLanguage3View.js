import React, { Component } from 'react';
import QuestionLanguage3 from "../../../../Components/QuestionComponents/Language/QuestionLanguage3/QuestionLanguage3"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionLanguage3View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Language Skills</p>
                <QuestionLanguage3 />
            </div>
         );
    }
}
 
export default QuestionLanguage3View;
