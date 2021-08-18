import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NextPreviousButtons from "../../../Components/QuestionComponents/NextPreviousButton/nextPreviousButton"
import AmazonAdvert from '../../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class QuestionAdvertView extends Component {
    state = {}
    render() {
        return (
            <div className="question-area">
                <AmazonAdvert case="mobile" height={60} width={468} />
                <AmazonAdvert className="mt-100 mb-50" case="both" height={250} />
                
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={true} onClickBackPage={this.onClickBackPage} canBack={true} />
            </div>
        );
    }
    
    onClickNextPage = () => {
        this.props.history.push({
            pathname: this.props.nextUrl,
            state: { direction: 'next' }
        });
    }

    onClickBackPage = () => {
        this.props.history.push({
            pathname: this.props.prevUrl,
            state: { direction: 'back' }
        });
    }
}

export default withRouter(QuestionAdvertView);
