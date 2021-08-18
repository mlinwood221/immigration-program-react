import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { LinkButton } from '../../../BasicComponent/Button/button';
import { FirstCard, CardBody, CardFooter, CardHeader} from "../../../BasicComponent/Card/card";
import CustomCheckbox from '../../../BasicComponent/CheckBox/checkBox';
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'

import "./QuestionDisclaimer.css";

class QuestionDisclaimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmTerms: false,
            confirmPrivacy: false,
            show: false
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        }, 1000);
    }

    onClickConfirmTerms = (value) => {
        this.setState({
            confirmTerms: value
        });
    }

    onClickConfirmPrivacy = (value) => {
        this.setState({
            confirmPrivacy: value
        });
    }

    render() {
        let { show, confirmTerms, confirmPrivacy } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Before we begin your Canadian immigration journey, there are a few facts we would like you to be aware of:
                    </CardHeader>
                    <CardBody>
                        <ol>
                            <li value="1"><u>Immigraters is in the beta (testing) phase</u>. Although many recommendations and options presented are accurate, you must anticipate there could be errors. The presented <u>recommendations should not be used as legal advice.</u> We recommend consulting with a licensed immigration consultant or lawyer before making any decisions. <LinkButton href="http://www.brightimmigration.com/immproved">Click here</LinkButton> to be connected to an Immigraters recommended professional. Immigraters is legally regulated by Canadian privacy laws. Your personal information is confidential and safe with us.</li>
                            <li>Certain features of the results page may not be shown due to technical maintenance. Currently the CRS points hypotheticals are not being displayed.</li>
                            <li>The purpose of this platform is to provide users with general guidance and overview of Canadian immigration.</li>
                            <li>The Immigraters platform provides general recommendations based on the information provided in the questionnaire. Not all questions asked will be considered when building recommendations.</li>
                        </ol>
                        <p style={{paddingLeft: "30px"}}>If you have any further questions, feel free to contact us <LinkButton href="https://getimmproved.ca/about-us">here</LinkButton></p>
                        <CustomCheckbox className="mt-4" onClick={this.onClickConfirmTerms}>I agree to the <LinkButton href="https://getimmproved.ca/terms-and-conditions">terms and conditions</LinkButton></CustomCheckbox>
                        <CustomCheckbox className="mt-4" onClick={this.onClickConfirmPrivacy}>I agree to the <LinkButton href="https://getimmproved.ca/privacy-policy">privacy policy</LinkButton></CustomCheckbox>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                
                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />
                
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={true} />
            </React.Fragment>
        );
    }
    
    canForward = () => {
        let { confirmTerms, confirmPrivacy } = this.state;

        if (!confirmTerms || !confirmPrivacy)
            return false;

        return true;
    }

    onClickNextPage = () => {
        this.setState({
            show: false
        });
        
        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_status', prevUrl: '/question_disclaimer', direction: 'next' }
        });
    }

    onClickBackPage = () => {
        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_disclaimer', prevUrl: '/question_personal', direction: 'back' }
        });
    }
}

export default withRouter(QuestionDisclaimer);
