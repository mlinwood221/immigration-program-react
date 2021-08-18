import React, { Component } from 'react';
import QuestionTravel from "../../../../Components/QuestionComponents/Basic/QuestionTravel/QuestionTravel"
import AmazonAdvert from '../../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionTravelView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <p className="section-label">Travel</p>
                <QuestionTravel />
            </div>
         );
    }
}

export default QuestionTravelView;
