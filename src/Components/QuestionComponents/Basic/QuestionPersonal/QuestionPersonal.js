import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getQASingle, getStore, getQAEmail } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service"

import { CustomModal, CustomModalHeader, CustomModalBody, CustomModalFooter } from "../../../BasicComponent/Modal/modal";
import { FirstCard, CardBody, CardFooter, CardHeader } from "../../../BasicComponent/Card/card";
import { TextFields, Labels, FormGroup } from "../../../BasicComponent/TextFields/textFields";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import { LinkButton } from '../../../BasicComponent/Button/button';
import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'

import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";

import "./QuestionPersonal.css";

class QuestionPersonal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            visibleModal: false,
            qA1: props.qA1,
            qA2: props.qA2,
            qA3: props.qA3,
            qA4: props.qA4,
            qA5: props.qA5,
            qA6: props.qA6
        }
    }

    componentDidMount() {
        console.log(this.state);
        setTimeout(() => { this.setState({ show: true }) }, 1600);
    }

    showModal = (e) => {
        console.log(1);
        e.preventDefault();
        this.setState({
            visibleModal: true
        });
    }

    hideModal = (e) => {
        e.preventDefault();
        this.setState({
            visibleModal: false
        });
    }

    render() {
        let { show, visibleModal } = this.state;
        let { qA1, qA2, qA3, qA4, qA5, qA6 } = this.state;
        let canForward = this.canForward();
        console.log(this.props.store.partnerCode.code);

        return (
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        {this.props.isSpouse ? "Enter your spouse's/partner's information" : "Your life may change in just 10-minutes! Answer our questions and find out how you can migrate to Canada!"}
                        <p>*All fields required</p>
                    </CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Labels label="First Name" />
                            <TextFields type="text" qId="1" answerCode="PRFFNA" value={qA1} onChange={this.updateProperty} autoFocus placeholder="First Name" />
                        </FormGroup>
                        <FormGroup>
                            <Labels label="Last Name" />
                            <TextFields type="text" qId="2" answerCode="PRFLNA" value={qA2} onChange={this.updateProperty} placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup>
                            <Labels label="Email" />
                            <TextFields type="email" qId="3" answerCode="PRFEML" value={qA3} onChange={this.updateProperty} placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Labels label="Phone Number" />
                            <TextFields type="text" qId="4" answerCode="PRFPN0" value={qA4} onChange={this.updateProperty} placeholder="Phone number" />
                        </FormGroup>
                        <FormGroup>
                            <Labels label={this.props.isSpouse ? "How old is your spouse/partner?" : "How old are you?"} />
                            <TextFields type="number" qId="6" answerCode="PRFAGE" value={qA6} onChange={this.updateProperty} placeholder="Your age" />
                        </FormGroup>
                        {!this.props.isSpouse && (
                            <FormGroup>
                                <CustomSelect
                                    options={[
                                        { name: "Google", value: "MKTS00" },
                                        { name: "Facebook", value: "MKTS01" },
                                        { name: "Instagram", value: "MKTS02" },
                                        { name: "Twitter", value: "MKTS03" },
                                        { name: "LinkedIn", value: "MKTS04" },
                                        { name: "Youtube", value: "MKTS05" },
                                        { name: "School", value: "MKTS06" },
                                        { name: "Craiglist", value: "MKTS07" },
                                        { name: "Yelp", value: "MKTS08" },
                                        { name: "Newspaper", value: "MKTS09" },
                                        { name: "Radio", value: "MKTS10" },
                                        { name: "Television", value: "MKTS011" },
                                        { name: "Cold Call", value: "MKTS012" },
                                        { name: "Direct Mail", value: "MKTS013" },
                                        { name: "Referral", value: "MKTS014" },
                                        { name: "Seminar", value: "MKTS015" },
                                        { name: "Other", value: "MKTS016" }
                                    ]}
                                    qId="5"
                                    value={qA5}
                                    onChange={this.updateProperty}
                                    placeholder="How did you hear about IMMIGRATERS?"
                                />
                            </FormGroup>
                        )}
                    </CardBody>
                    <CardFooter>
                        <LinkButton onClick={this.showModal}>Why are we asking?</LinkButton>
                    </CardFooter>
                </FirstCard>

                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />

                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={false} />

                <CustomModal show={visibleModal}>
                    <CustomModalHeader onClick={this.hideModal}>
                        Close
                    </CustomModalHeader>
                    <CustomModalBody>
                        At the end of this questionnaire, you will instantly receive immigration options and recommendations that suit your specific situation. Eligibility for Canadian immigration is dependent on specific factors such as age, education, work history and more. It is important that you answer these questions honestly to ensure our system can provide you with the best recommendations. No need to worry about your personal information, Immigraters is governed by Canadian privacy laws; your information will be kept secure.
                    </CustomModalBody>
                    <CustomModalFooter>
                    </CustomModalFooter>
                </CustomModal>
            </React.Fragment>
        );
    }

    validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
        return re.test(String(email).toLowerCase());
    }

    canForward = () => {
        let { qA1, qA2, qA3, qA4, qA5, qA6 } = this.state;

        if (!qA1 || !qA2 || !qA3 || !qA4 || !qA6) {
            return false;
        }

        if (!this.validateEmail(qA3)) {
            return false;
        }

        if (!this.props.isSpouse && !qA5)
            return false;

        return true;
    }

    updateProperty = (qId, value) => {
        this.setState({
            [`qA${qId}`]: value
        });
    }

    saveResponse = () => {
        let { store, isSpouse, orgEmail } = this.props;
        let { qA1, qA2, qA3, qA4, qA5, qA6 } = this.state;
        let qA7 = "PRAG00";
        let body = [];

        if (qA6 >= 0 && qA6 <= 17) qA7 = "PRAG00";
        else if (qA6 >= 18 && qA6 <= 44) qA7 = "PRAG" + ("0" + (qA6 - 17)).slice(-2);
        else if (qA6 >= 45) qA7 = "PRAG28";

        // update redux
        this.props.updateAnswer({
            Q1: qA1, Q2: qA2, Q3: qA3, Q4: qA4, Q5: qA5, Q6: qA6
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": qA3, "Text": qA1, "AnswerCode": "PRFFNA", "QuestionCode": "1" });
        body.push({ "ProfileEmail": qA3, "Text": qA2, "AnswerCode": "PRFLNA", "QuestionCode": "2" });
        body.push({ "ProfileEmail": qA3, "Text": qA3, "AnswerCode": "PRFEML", "QuestionCode": "3" });
        body.push({ "ProfileEmail": qA3, "Text": qA4, "AnswerCode": "PRFPN0", "QuestionCode": "4" });
        body.push({ "ProfileEmail": qA3, "Text": "", "AnswerCode": qA5, "QuestionCode": "5" });
        body.push({ "ProfileEmail": qA3, "Text": qA6, "AnswerCode": "PRFAGE", "QuestionCode": "6" });
        body.push({ "ProfileEmail": qA3, "Text": "", "AnswerCode": qA7, "QuestionCode": "7" });

        if (isSpouse) {
            body.push({ "ProfileEmail": orgEmail, "Text": qA3, "AnswerCode": "PROWCA", "QuestionCode": "218" })
            body.push({ "ProfileEmail": qA3, "Text": orgEmail, "AnswerCode": "PROWCA", "QuestionCode": "218" });
        }

        QAService.saveUserResponse(body)
            .then(res => {
                if (res.data.success == null) {
                    console.log("server error");
                }
            })
            .catch(err => {
                console.log("server error");
            });

        if (store.partnerCode !== null) {
            QAService.SavePartnerClient({ "PartnerCode": store.partnerCode.code, "ProfileEmail": qA3 })
                .then(res => {
                    if (res.data.success == null) {
                        console.log("server error");
                    }
                })
                .catch(err => {
                    console.log("server error");
                });
        }

    }

    onClickNextPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });
        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_disclaimer', prevUrl: '/question_personal', direction: 'next' }
        });
    }

    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });
        this.props.history.push({
            pathname: '/',
            state: { direction: 'back' }
        });
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store: getStore(state),
        isSpouse: state.qAnswers.isSpouse ? state.qAnswers.isSpouse : false,
        orgEmail: state.qAnswers.orgEmail ? state.qAnswers.orgEmail : "",
        qA1: getQASingle(state, 1),
        qA2: getQASingle(state, 2),
        qA3: getQASingle(state, 3),
        qA4: getQASingle(state, 4),
        qA5: getQASingle(state, 5),
        qA6: getQASingle(state, 6)
    };
};

const mapDispatchToProps = { updateAnswer };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionPersonal));
