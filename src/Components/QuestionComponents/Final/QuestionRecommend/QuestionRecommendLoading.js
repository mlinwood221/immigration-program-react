import React, { Component } from 'react';
import CustomProgressBar from "../../../BasicComponent/CustomProgressBar/CustomProgressBar";
import './QuestionRecommendLoading.css';
import THANKYOU from '../../../../Assests/Media/thank_you.png';
import { Container } from 'react-bootstrap';
import { trackCalculationStart, trackEndOfQuestionnare } from '../../../../util/tracking';

export default class QuestionRecommendLoading extends Component {

    componentDidMount() {
        trackCalculationStart();
        trackEndOfQuestionnare();
    }

    render() {
        return (
            <Container>
                <CustomProgressBar className="question-progressbar" now="100" />
                <div className="recommendation-header">
                    <p className="recommendation-loading-header">
                        Thank you
                    </p>
                    <p>for completing the questionnaire.</p>
                    <img className="videoTag" src={THANKYOU} />
                    <p className="recommendation-header-description">
                        We're calculating your results.<br />Please do not leave or do not reload this page.
                    </p>
                </div>
            </Container>
        );
    }
}
