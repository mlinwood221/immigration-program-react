import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getQASingle, getQAGroup, getStore, getQAEmail } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import PlusIcon from "../../../../Assests/Icons/icon  plus.png";
import { AddButton } from "../../../BasicComponent/Button/button";
import { CustomGroup, CustomGroupDeleteButton } from "../../../BasicComponent/CustomGroup/customGroup";
import CustomInput from "../../../BasicComponent/CustomControl/customInput";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { TextFields, LabelDark, Labels } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard,  CardBody, CardFooter, CardHeader, MoreOptions, SmoothSwitch } from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { countryCodes } from "../../../../Assests/country_codes";

class QuestionEducation4 extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            show: false,
            qA64: props.qA64,
            qA65_71: props.qA65_71.length 
                        ? [ ...props.qA65_71] 
                        : [{ key: 0, qA65: '', qA66: '', qA67: '', qA68: '', qA69_1: '', qA69_2: '', qA70_1: '', qA70_2: '', qA71: '' }]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        }, 1000);
    }

    onAddEducation = () => {
        let tmp = [ ...this.state.qA65_71 ];
        let key = 0;

        if (tmp.length)
            key = tmp[tmp.length-1].key + 1;

        tmp.push({ key: key, qA65: '', qA66: '', qA67: '', qA68: '', qA69_1: '', qA69_2: '', qA70_1: '', qA70_2: '', qA71: '' });

        this.setState({
            qA65_71: tmp
        });
    }
    
    render() { 
        let { show } = this.state;
        let { qA64, qA65_71 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Have you studied outside of Canada? (post-secondary only)
                    </CardHeader>
                    <CardBody>
                        <Row>
                            {/* EDINS */}
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA64 == "EDINS1" ? " active" : "")}
                                    onClick={() => this.updateProperty("64", "EDINS1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA64 == "EDINS0" ? " active" : "")}
                                    onClick={() => this.updateProperty("64", "EDINS0")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <MoreOptions>
                            <SmoothSwitch identifier={qA64 == "EDINS1" ? "case1" : "case2"}>
                            {qA64 == "EDINS1" ? (
                                <React.Fragment>
                                {qA65_71.map((value, index) => {
                                    return (
                                        <CustomGroup key={value.key} className="">
                                            <FormGroup>
                                                <Labels>Non-Canadian School {index + 1}</Labels>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>In what country did you study?</LabelDark>
                                                <CustomInput 
                                                    suggestions={countryCodes} 
                                                    groupId="65_71"
                                                    index={index}
                                                    qId="65" 
                                                    onChange={this.updateGroupField} 
                                                    prefix={`EDIN0${index}-CN`}
                                                    value={value.qA65} 
                                                    placeholder="Type country here..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Which school did you attend?</LabelDark>
                                                <TextFields 
                                                    type="text" 
                                                    groupId="65_71"
                                                    index={index}
                                                    qId="66" 
                                                    value={value.qA66} 
                                                    onChange={this.updateGroupField} 
                                                    placeholder="Type here..."/>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Type of program</LabelDark>
                                                <CustomSelect options={[
                                                        { name: "Certificate Program",              value: `EDIN0${index}-PR0`},
                                                        { name: "College or University Diploma",    value: `EDIN0${index}-PR1`},
                                                        { name: "Associate Degree",                 value: `EDIN0${index}-PR2`},
                                                        { name: "Bachelors Degree",                 value: `EDIN0${index}-PR3`},
                                                        { name: "Postgraduate Diploma",             value: `EDIN0${index}-PR4`},
                                                        { name: "Master's Degree/Professional Degree", value: `EDIN0${index}-PR5`},
                                                        { name: "Doctorate Degree/ PhD",            value: `EDIN0${index}-PR6`}
                                                    ]} 
                                                    groupId="65_71"
                                                    index={index}
                                                    qId="67"
                                                    onChange={this.updateGroupField}
                                                    value={value.qA67}
                                                    placeholder="Select" />
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Duration of program</LabelDark>
                                                <CustomSelect options={[
                                                        { name: "One (1) Academic year",            value: `EDIN0${index}-PD0`},
                                                        { name: "Two (2) Academic years",           value: `EDIN0${index}-PD1`},
                                                        { name: "Three (3) Academic Years",         value: `EDIN0${index}-PD2`},
                                                        { name: "Four (4) or more Academic Years",  value: `EDIN0${index}-PD3`}
                                                    ]} 
                                                    groupId="65_71"
                                                    index={index}
                                                    qId="68"
                                                    onChange={this.updateGroupField}
                                                    value={value.qA68}
                                                    placeholder="Select" />
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Program start date</LabelDark>
                                                <Row>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={MONTHS} 
                                                            groupId="65_71"
                                                            index={index}
                                                            qId="69_1" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA69_1} 
                                                            placeholder="Select" />
                                                    </Col>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={YEARS(2021, 1970)} 
                                                            groupId="65_71"
                                                            index={index}
                                                            qId="69_2" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA69_2} 
                                                            placeholder="Select" />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Program end date</LabelDark>
                                                <Row>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={MONTHS} 
                                                            groupId="65_71"
                                                            index={index}
                                                            qId="70_1" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA70_1} 
                                                            placeholder="Select" />
                                                    </Col>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={YEARS(2026, 1970)} 
                                                            groupId="65_71"
                                                            index={index}
                                                            qId="70_2" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA70_2} 
                                                            placeholder="Select" />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Did you graduate?</LabelDark>
                                                <Row>
                                                    <Col>
                                                        <SelectButtons
                                                            className={value.qA71 == `EDIN0${index}-PGR1` ? " active" : ""}
                                                            onClick={() => this.updateGroupField("65_71", index, "71", `EDIN0${index}-PGR1`)}>Yes</SelectButtons>
                                                    </Col>
                                                    <Col>
                                                        <SelectButtons
                                                            className={value.qA71 == `EDIN0${index}-PGR0` ? " active" : ""}
                                                            onClick={() => this.updateGroupField("65_71", index, "71", `EDIN0${index}-PGR0`)}>No</SelectButtons>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            {index != 0 && (
                                                <CustomGroupDeleteButton onClick={() => this.deleteGroup("65_71", index)} />
                                            )}
                                        </CustomGroup>
                                    );
                                })}
                                {(qA65_71.length < 4) && (
                                    <p className="text-right mt-3">Add another education<AddButton onClick={this.onAddEducation}> <img src={PlusIcon}/> </AddButton></p> 
                                )}
                                </React.Fragment>
                            ) : (
                                <span>If yes, more required.</span>
                            )}
                            </SmoothSwitch>
                        </MoreOptions>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={true} />
            </React.Fragment>
         );
    }
    
    canForward = () => {
        let { qA64, qA65_71 } = this.state;

        if (!qA64) {
            return false;
        }
        else if (qA64 == "EDINS1") {
            for (let i = 0; i < qA65_71.length; i ++) {
                if (!qA65_71[i].qA65 || !qA65_71[i].qA66 || !qA65_71[i].qA67 || !qA65_71[i].qA68 || !qA65_71[i].qA69_1 
                    || !qA65_71[i].qA69_2 || !qA65_71[i].qA70_1 || !qA65_71[i].qA70_2 || !qA65_71[i].qA71)
                    return false;
            };
        }
        else {
            this.state.qA65_71 = [{ key: 0, qA65: '', qA66: '', qA67: '', qA68: '', qA69_1: '', qA69_2: '', qA70_1: '', qA70_2: '', qA71: '' }];
        }

        return true;
    }

    updateProperty = (qId, value) => {
        this.setState({
            [`qA${qId}`]: value
        });
    }

    updateGroupField = (groupId, index, qId, value) => {
        let tmp1 = { ...this.state[`qA${groupId}`][index] };
        tmp1[`qA${qId}`] = value;

        let tmp2 = [ ...this.state[`qA${groupId}`] ];
        tmp2[index] = tmp1;

        this.setState({
            [`qA${groupId}`] : tmp2
        });
    }

    deleteGroup = (groupId, index) => {
        let tmp = [ ...this.state[`qA${groupId}`] ];
        tmp.splice(index, 1);

        this.setState({
            [`qA${groupId}`] : tmp
        });
    }

    saveResponse = () => {
        let { store } = this.props;
        let { qA64, qA65_71 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        // update redux
        this.props.updateAnswer({
            Q64: qA64, Q65_71: JSON.parse(JSON.stringify(qA65_71))
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA64, "QuestionCode" : "64" });
        qA65_71.map((value, index) => {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA65, "QuestionCode" : (index != 0 ? `65-${index}` : "65") });
            body.push({ "ProfileEmail": email, "Text": value.qA66, "AnswerCode" : `EDIN0${index}-SN`, "QuestionCode" : (index != 0 ? `66-${index}` : "66") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA67, "QuestionCode" : (index != 0 ? `67-${index}` : "67") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA68, "QuestionCode" : (index != 0 ? `68-${index}` : "68") });
            body.push({ "ProfileEmail": email, "Text": value.qA69_1 ? value.qA69_1 + '/' + value.qA69_2 : "", "AnswerCode" : value.qA69_1 ? `EDIN0${index}-PS` : "", "QuestionCode" : (index != 0 ? `69-${index}` : "69") });
            body.push({ "ProfileEmail": email, "Text": value.qA70_1 ? value.qA70_1 + '/' + value.qA70_2 : "", "AnswerCode" : value.qA70_1 ? `EDIN0${index}-PT` : "", "QuestionCode" : (index != 0 ? `70-${index}` : "70") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA71, "QuestionCode" : (index != 0 ? `71-${index}` : "71") });
        });
        for (let i = qA65_71.length; i < 4; i ++) {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `65-${i}` : "65") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `66-${i}` : "66") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `67-${i}` : "67") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `68-${i}` : "68") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `69-${i}` : "69") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `70-${i}` : "70") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `71-${i}` : "71") });
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
    }

    onClickNextPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });
        
        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_work1', prevUrl: '/question_education4', direction: 'next' }
        });
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_education4', prevUrl: '/question_education2', direction: 'back' }
        });
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA64: getQASingle(state, "64"),
        qA65_71: getQAGroup(state, "65_71")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionEducation4));
