import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getQAInput, getQASingle, getStore, getQARequest, getQAEmail } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import CustomInput from "../../../BasicComponent/CustomControl/customInput";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import CustomRadio from "../../../BasicComponent/RadioButton/radioButton";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { LabelDark } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SlideArea, SmoothSwitch} from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { CANADIAN_SCHOOLS } from "../../../../Assests/canadian_schools";

class QuestionEducation1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: false,
             qA21: props.qA21,
             qA22: props.qA22,
             qA23: props.qA23,
             qA26: props.qA26,
             qA27: props.qA27,
             qA28_1: props.qA28_1,
             qA28_2: props.qA28_2,
             qA29_1: props.qA29_1,
             qA29_2: props.qA29_2
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        }, 1000);
    }

    render() { 
        let { show } = this.state;
        let { qA21, qA22, qA23, qA26, qA27, qA28_1, qA28_2, qA29_1, qA29_2 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        What is your highest level of education?
                        <p>*Select only one</p>
                    </CardHeader>
                    <CardBody>
                        <CustomRadio checked={qA21 == "EDLEMAX0" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX0">None, or less than secondary (high school)</CustomRadio>
                        <CustomRadio checked={qA21 == "EDLEMAX1" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX1">Secondary diploma (high school graduation)</CustomRadio>
                        <CustomRadio checked={qA21 == "EDLEMAX2" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX2">One-year program at a university, college, trade or technical school, or other institute</CustomRadio>
                        <CustomRadio checked={qA21 == "EDLEMAX3" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX3">Two-year program at a university, college, trade or technical school, or other institute.</CustomRadio>
                        <CustomRadio checked={qA21 == "EDLEMAX4" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX4">Bachelor’s degree (three or more year program at a university, college, trade or technical school, or other institute)</CustomRadio>
                        <CustomRadio checked={qA21 == "EDLEMAX5" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX5">Two or more certificates, diplomas or degrees; one must be for a program of three or more years</CustomRadio>
                        <CustomRadio checked={qA21 == "EDLEMAX6" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX6">Master’s degree or professional degree needed to practice in a licensed profession</CustomRadio>
                        <CustomRadio checked={qA21 == "EDLEMAX7" ? "true" : "false"} qId="21" onChange={this.updateProperty} name="qA21" value="EDLEMAX7">Doctoral level university degree (PhD)</CustomRadio>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <SlideArea show={show}>
                    <Cards>
                        <CardHeader>
                            Are you currently studying in Canada? (post-secondary only)
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <SelectButtons 
                                        className={"btn-bg " + (qA22 === "EDCAC1" ? "active" : "")} 
                                        onClick={() => this.updateProperty("22", "EDCAC1")}>Yes</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons 
                                        className={"btn-bg " + (qA22 === "EDCAC0" ? "active" : "")} 
                                        onClick={() => this.updateProperty("22", "EDCAC0")}>No</SelectButtons>
                                </Col>
                            </Row>
                            <MoreOptions>
                                <SmoothSwitch identifier={qA22 == "EDCAC1" ? "case1" : "case2"}>
                                {qA22 == "EDCAC1" ? (
                                    <React.Fragment>
                                        <FormGroup>
                                            <LabelDark>Which school are you attending?</LabelDark>
                                            <CustomInput suggestions={CANADIAN_SCHOOLS} 
                                                type="school"
                                                qId="23"
                                                onChange={this.updateProperty}
                                                value={qA23}
                                                placeholder="Select" />
                                        </FormGroup>
                                        <FormGroup>
                                            <LabelDark>Type of program</LabelDark>
                                            <CustomSelect options={[
                                                    { name: "Certificate Program",              value: "EDCACPR0" },
                                                    { name: "College or University Diploma",    value: "EDCACPR1" },
                                                    { name: "Associate Degree",                 value: "EDCACPR2" },
                                                    { name: "Bachelors Degree",                 value: "EDCACPR3" },
                                                    { name: "Postgraduate Diploma",             value: "EDCACPR4" },
                                                    { name: "Master's Degree/Professional Degree", value: "EDCACPR5" },
                                                    { name: "Doctorate Degree/ PhD",            value: "EDCACPR6" }
                                                ]} 
                                                qId="26"
                                                onChange={this.updateProperty}
                                                value={qA26}
                                                placeholder="Select" />
                                        </FormGroup>
                                        <FormGroup>
                                            <LabelDark>Duration of program</LabelDark>
                                            <CustomSelect options={[
                                                    { name: "One (1) Academic year",            value: "EDCACPD0"},
                                                    { name: "Two (2) Academic years",           value: "EDCACPD1"},
                                                    { name: "Three (3) Academic Years",         value: "EDCACPD2"},
                                                    { name: "Four (4) or more Academic Years",  value: "EDCACPD3"}
                                                ]}
                                                qId="27"
                                                onChange={this.updateProperty}
                                                value={qA27}
                                                placeholder="Select" />
                                        </FormGroup>
                                        <FormGroup>
                                            <LabelDark>Program start date</LabelDark>
                                            <Row>
                                                <Col>
                                                    <CustomSelect options={MONTHS} qId="28_1" onChange={this.updateProperty} value={qA28_1} placeholder="Select" />
                                                </Col>
                                                <Col>
                                                    <CustomSelect options={YEARS(2021, 1970)} qId="28_2" onChange={this.updateProperty} value={qA28_2} placeholder="Select" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <LabelDark>Program end date</LabelDark>
                                            <Row>
                                                <Col>
                                                    <CustomSelect options={MONTHS} qId="29_1" onChange={this.updateProperty} value={qA29_1} placeholder="Select" />
                                                </Col>
                                                <Col>
                                                    <CustomSelect options={YEARS(2028, 1970)} qId="29_2" onChange={this.updateProperty} value={qA29_2} placeholder="Select" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        {/* <FormGroup>
                                            <LabelDark>Are you willing to change schools if doing so improves your immigration possibilities?</LabelDark>
                                            <Row>
                                                <Col>
                                                    <SelectButtons
                                                        className={qA30 === "EDCACCH1" ? "active" : ""} 
                                                        onClick={() => this.updateProperty("30", "EDCACCH1")}>Yes</SelectButtons>
                                                </Col>
                                                <Col>
                                                    <SelectButtons
                                                        className={qA30 === "EDCACCH0" ? "active" : ""} 
                                                        onClick={() => this.updateProperty("30", "EDCACCH0")}>No</SelectButtons>
                                                </Col>
                                            </Row>
                                        </FormGroup> */}
                                    </React.Fragment>
                                ): (
                                    <span>If yes, more required.</span>
                                )}
                                </SmoothSwitch>
                            </MoreOptions>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                </SlideArea>
                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={true} />
            </React.Fragment>
         );
    }

    canForward = () => {
        let { qA21, qA22, qA23, qA26, qA27, qA28_1, qA28_2, qA29_1, qA29_2 } = this.state;

        if (!qA21)
            return false;

        if (!qA22) {
            return false;
        }
        else if (qA22 == "EDCAC1") {
            if (!qA23 || !qA26 || !qA27 || !qA28_1 || !qA28_2 || !qA29_1 || !qA29_2)
                return false;
        }
        else {
            this.state.qA23 = this.state.qA26 = this.state.qA27 = this.state.qA28_1 = this.state.qA28_2 = this.state.qA29_1 = this.state.qA29_2 = '';
        }

        return true;
    }

    updateProperty = (qId, value) => {
        this.setState({
            [`qA${qId}`]: value
        });
    }

    saveResponse = () => {
        let { store } = this.props;
        let { qA21, qA22, qA23, qA26, qA27, qA28_1, qA28_2, qA29_1, qA29_2 } = this.state;
        let email = getQAEmail(store);
        let body = [];

        let qA24 = "", qA25 = "", qA216 = [];

        switch (qA21) {
            case "EDLEMAX0": qA216 = [ "EDLEMIN0" ]; break;
            case "EDLEMAX1": qA216 = [ "EDLEMIN0", "EDLEMIN1" ]; break;
            case "EDLEMAX2": qA216 = [ "EDLEMIN0", "EDLEMIN1", "EDLEMIN2" ]; break;
            case "EDLEMAX3": qA216 = [ "EDLEMIN0", "EDLEMIN1", "EDLEMIN2", "EDLEMIN3" ]; break;
            case "EDLEMAX4": qA216 = [ "EDLEMIN0", "EDLEMIN1", "EDLEMIN2", "EDLEMIN3", "EDLEMIN4" ]; break;
            case "EDLEMAX5": qA216 = [ "EDLEMIN0", "EDLEMIN1", "EDLEMIN2", "EDLEMIN3", "EDLEMIN4", "EDLEMIN5" ]; break;
            case "EDLEMAX6": case "EDLEMAX7": qA216 = [ "EDLEMIN0", "EDLEMIN1", "EDLEMIN2", "EDLEMIN3", "EDLEMIN4", "EDLEMIN5", "EDLEMIN6" ]; break;
        }
        
        let school = CANADIAN_SCHOOLS.find((school, index) => {
            return school.value == qA23;
        });

        if (school) {
            switch (school.Province) {
                case "Alberta": qA24 = "AB"; break;
                case "British Columbia": qA24 = "BC"; break;
                case "Manitoba": qA24 = "MB"; break;
                case "New Brunswick": qA24 = "NB"; break;
                case "Newfoundland and Labrador": qA24 = "NL"; break;
                case "Northwest Terriories": qA24 = "NT"; break;
                case "Nova Scotia": qA24 = "NS"; break;
                case "Nunavut": qA24 = "NU"; break;
                case "Ontario": qA24 = "ON"; break;
                case "Prince Edward Island": qA24 = "PE"; break;
                case "Quebec": qA24 = "QC"; break;
                case "Saskatchewan": qA24 = "SK"; break;
                case "Yukon": qA24 = "YT"; break;
            }
            if (school.PGWP == 1)
                qA25 = "EDCACWP1";
            else
                qA25 = "EDCACWP0";
        }

        // update redux
        this.props.updateAnswer({
            Q21: qA21, Q22: qA22, Q23: qA23, Q24: qA24, Q25: qA25, Q26: qA26, Q27: qA27, Q28_1: qA28_1, Q28_2: qA28_2, Q29_1: qA29_1, Q29_2: qA29_2
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA21, "QuestionCode" : "21" });
        body.push({ "ProfileEmail": email, "Text": "", "MultiAnswerCodes" : qA216, "QuestionCode" : "216" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA22, "QuestionCode" : "22" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA23 ? "EDCACSN-" + qA23 : "", "QuestionCode" : "23" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA24 ? "EDCACS" + qA24 : "", "QuestionCode" : "24" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA25, "QuestionCode" : "25" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA26, "QuestionCode" : "26" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA27, "QuestionCode" : "27" });
        body.push({ "ProfileEmail": email, "Text": qA28_1 ? (qA28_1 + '/' + qA28_2) : "", "AnswerCode" : qA28_1 ? "EDCACPS" : "", "QuestionCode" : "28" });
        body.push({ "ProfileEmail": email, "Text": qA29_1 ? (qA29_1 + '/' + qA29_2) : "", "AnswerCode" : qA29_1 ? "EDCACPT" : "", "QuestionCode" : "29" });

        QAService.saveUserResponse(body)
            .then(res => {
                if (res.data.success == null) {
                    console.log("server error");
                }
            })
            .catch(err => {
                console.log("server error");
            });
    }

    onClickNextPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });
        
        setTimeout(() => {
            this.props.history.push({
                pathname: '/question_advert',
                state: { nextUrl: '/question_education2', prevUrl: '/question_education1', direction: 'next' }
            });
        }, 1200);
    }
    onClickBackPage = () => {
        this.saveResponse();
        
        this.setState({
            show: false
        });

        setTimeout(() => {
            this.props.history.push({
                pathname: '/question_advert',
                state: { nextUrl: '/question_education1', prevUrl: '/question_travel', direction: 'back' }
            });
        }, 1200);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA21: getQASingle(state, "21"),
        qA22: getQASingle(state, "22"),
        qA23: getQASingle(state, "23"),
        qA26: getQASingle(state, "26"),
        qA27: getQASingle(state, "27"),
        qA28_1: getQASingle(state, "28_1"),
        qA28_2: getQASingle(state, "28_2"),
        qA29_1: getQASingle(state, "29_1"),
        qA29_2: getQASingle(state, "29_2")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionEducation1));
