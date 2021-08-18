import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getQASingle, getQAGroup, getStore, getQAEmail } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import CustomInput from "../../../BasicComponent/CustomControl/customInput";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import CustomCheckbox from "../../../BasicComponent/CheckBox/checkBox";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { LabelDark } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SlideArea, SmoothSwitch} from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { CANADIAN_SCHOOLS } from '../../../../Assests/canadian_schools';

class QuestionWork1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: false,
             qA72: props.qA72,
             qA73_1: props.qA73_1,
             qA73_2: props.qA73_2,
             qA74_1: props.qA74_1,
             qA74_2: props.qA74_2,
             qA75: props.qA75,
             qA78: props.qA78,
             qA80: props.qA80,
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
        let { qA72, qA73_1, qA73_2, qA74_1, qA74_2, qA75, qA78, qA80 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Do you hold (or have you previously held) a Canadian work permit?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA72 == "WKPGR1" ? " active" : "")}
                                    onClick={() => this.updateProperty("72", "WKPGR1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA72 == "WKPGR0" ? " active" : "")}
                                    onClick={() => this.updateProperty("72", "WKPGR0")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <MoreOptions>
                            <SmoothSwitch identifier={qA72 == "WKPGR1" ? "case1" : "case2"}>
                            {qA72 == "WKPGR1" ? (
                                <React.Fragment>
                                    <FormGroup>
                                        <LabelDark>When was the most recent work permit issued?</LabelDark>
                                        <Row>
                                            <Col>
                                                <CustomSelect options={MONTHS} qId="73_1" onChange={this.updateProperty} value={qA73_1} placeholder="Select" />
                                            </Col>
                                            <Col>
                                                <CustomSelect options={YEARS(2021, 1970)} qId="73_2" onChange={this.updateProperty} value={qA73_2} placeholder="Select" />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <LabelDark>When will the most recent work permit expire?</LabelDark>
                                        <Row>
                                            <Col>
                                                <CustomSelect options={MONTHS} qId="74_1" onChange={this.updateProperty} value={qA74_1} placeholder="Select" />
                                            </Col>
                                            <Col>
                                                <CustomSelect options={YEARS(2026, 1970)} qId="74_2" onChange={this.updateProperty} value={qA74_2} placeholder="Select" />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <LabelDark>Type of work permit. Please note part-time work permits provided while attending school and/or co-op work permits do not count.</LabelDark>
                                        <CustomSelect options={[
                                                { name: "I do not know",                        value: "WKPT00"},
                                                { name: "Post Graduate Work Permit (Open)",     value: "WKPT01"},
                                                { name: "Spousal Work Permit (Open)",           value: "WKPT02"},
                                                { name: "IEC- Working Holiday (Open)",          value: "WKPT03"},
                                                { name: "IEC- Young Professionals (Closed)",    value: "WKPT04"},
                                                { name: "IEC- Co-Op (Closed)",                  value: "WKPT05"},
                                                { name: "LMIA- Employer Specific (Closed)",     value: "WKPT06"},
                                                { name: "LMIA Exempt (Closed)",                 value: "WKPT07"},
                                                { name: "Intra-Company Transferee (Closed)",    value: "WKPT08"},
                                                { name: "French Mobility (Closed)",             value: "WKPT09"},
                                                { name: "Start-Up Visa (Closed)",               value: "WKPT10"},
                                                { name: "Other Closed Work Permit",             value: "WKPT11"},
                                                { name: "Other Open Work Permit",               value: "WKPT12"},
                                            ]} 
                                            qId="75"
                                            onChange={this.updateProperty}
                                            value={qA75}
                                            placeholder="Select" />
                                    </FormGroup>
                                    {/* <FormGroup>
                                        <LabelDark>Do you qualify for a 1-year PGWP? (IMPLICIT)</LabelDark>
                                        <Row>
                                            <Col>
                                                <SelectButtons>Yes</SelectButtons>
                                            </Col>
                                            <Col>
                                                <SelectButtons>No</SelectButtons>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <LabelDark>Do you qualify for a 3-year PGWP? (IMPLICIT)</LabelDark>
                                        <Row>
                                            <Col>
                                                <SelectButtons>Yes</SelectButtons>
                                            </Col>
                                            <Col>
                                                <SelectButtons>No</SelectButtons>
                                            </Col>
                                        </Row>
                                    </FormGroup> */}
                                </React.Fragment>
                            ) : (
                                <span>If yes, more required.</span>
                            )}
                            </SmoothSwitch>
                        </MoreOptions>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <SlideArea show={show}>
                    <Cards>
                        <CardHeader>
                            Do you have a certificate of qualification from a Canadian province, territory, or federal body?
                        </CardHeader>
                        <CardBody>                            
                            <Row>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA78 == "IMMCQ1" ? " active" : "")}
                                        onClick={() => this.updateProperty("78", "IMMCQ1")}>Yes</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA78 == "IMMCQ0" ? " active" : "")}
                                        onClick={() => this.updateProperty("78", "IMMCQ0")}>No</SelectButtons>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                    <Cards>
                        <CardHeader>
                            Do you have a provincial nomination?
                        </CardHeader>
                        <CardBody>      
                            <Row>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA80 == "IMMPN1" ? " active" : "")}
                                        onClick={() => this.updateProperty("80", "IMMPN1")}>Yes</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA80 == "IMMPN0" ? " active" : "")}
                                        onClick={() => this.updateProperty("80", "IMMPN0")}>No</SelectButtons>
                                </Col>
                            </Row>
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
        let { qA72, qA73_1, qA73_2, qA74_1, qA74_2, qA75, qA78, qA80 } = this.state;

        if (!qA72) {
            return false;
        }
        else if (qA72 == "WKPGR1") {
            if (!qA73_1 || !qA73_2 || !qA74_1 || !qA74_2 || !qA75)
                return false;
        }
        else {
            this.state.qA73_1 = this.state.qA73_2 = this.state.qA74_1 = this.state.qA74_2 = this.state.qA75 = '';
        }

        if (!qA78 || !qA80)
            return false;

        return true;
    }

    updateProperty = (qId, value) => {
        this.setState({
            [`qA${qId}`]: value
        });
    }

    saveResponse = () => {
        let { store, qA23, qA27, qA32_39 } = this.props;
        let { qA72, qA73_1, qA73_2, qA74_1, qA74_2, qA75, qA78, qA80 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        // update redux
        this.props.updateAnswer({
            Q72: qA72, Q73_1: qA73_1, Q73_2: qA73_2, Q74_1: qA74_1, Q74_2: qA74_2, Q75: qA75, Q78: qA78, Q80: qA80
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA72, "QuestionCode" : "72" });
        body.push({ "ProfileEmail": email, "Text": qA73_1 ? (qA73_1 + '/' + qA73_2) : "", "AnswerCode" : qA73_1 ? "WKPMID" : "", "QuestionCode" : "73" });
        body.push({ "ProfileEmail": email, "Text": qA74_1 ? (qA74_1 + '/' + qA74_2) : "", "AnswerCode" : qA74_1 ? "WKPMED" : "", "QuestionCode" : "74" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA75, "QuestionCode" : "75" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA78, "QuestionCode" : "78" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA80, "QuestionCode" : "80" });

        let qA76 = 'WKPY10', qA77 = 'WKPY30';
        
        let school = CANADIAN_SCHOOLS.find((school, index) => {
            return school.value == qA23;
        });
        if (school) {
            if (school.PGWP == 1) {
                if (qA27.slice(-1) === 0) {
                    qA76 = "WKPY11";
                }
                else {
                    qA77 = "WKPY31";
                }
            }
        }

        qA32_39.map((value, index) => {
            if (parseInt(new Date().getFullYear()) - parseInt(value.qA38_2) <= 2) {
                let school = CANADIAN_SCHOOLS.find((school, index) => {
                    return school.value == value.qA32;
                });
                if (school) {
                    if (school.PGWP == 1) {
                        if (value.qA36.slice(-1) === 0) {
                            qA76 = "WKPY11";
                        }
                        else {
                            qA77 = "WKPY31";
                        }
                    }
                }
            }
        });
        
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA76, "QuestionCode" : "76" });        
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA77, "QuestionCode" : "77" });

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
                state: { nextUrl: '/question_work2', prevUrl: '/question_work1', direction: 'next' }
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
                state: { nextUrl: '/question_work1', prevUrl: '/question_education4', direction: 'back' }
            });
        }, 1200);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA23: getQASingle(state, "23"),
        qA27: getQASingle(state, "27"),
        qA32_39: getQAGroup(state, "32_39"),

        qA72: getQASingle(state, "72"),
        qA73_1: getQASingle(state, "73_1"),
        qA73_2: getQASingle(state, "73_2"),
        qA74_1: getQASingle(state, "74_1"),
        qA74_2: getQASingle(state, "74_2"),
        qA75: getQASingle(state, "75"),
        qA78: getQASingle(state, "78"),
        qA80: getQASingle(state, "80")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionWork1));
