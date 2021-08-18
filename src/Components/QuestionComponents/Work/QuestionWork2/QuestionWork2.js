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
import { TextFields } from "../../../BasicComponent/TextFields/textFields";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { JOB_TITLES } from "../../../../Assests/job_titles";

class QuestionWork2 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            show: false,
            qA81: props.qA81,
            qA82: props.qA82,
            qA83: props.qA83,
            qA84: props.qA84,
            qA85: props.qA85
        };
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
        let { qA81, qA82, qA83, qA84, qA85 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Do either of these apply to you: <br/>
                        1. You have a job offer from a Canadian employer, OR <br/>
                        2. A Canadian employer is willing to extend you a job offer?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA81 == "JOBOF1" ? " active" : "")}
                                    onClick={() => this.updateProperty("81", "JOBOF1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA81 == "JOBOF0" ? " active" : "")}
                                    onClick={() => this.updateProperty("81", "JOBOF0")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <MoreOptions>
                            <SmoothSwitch identifier={qA81 == "JOBOF1" ? "case1" : "case2"}>
                            {qA81 == "JOBOF1" ? (
                                <React.Fragment>
                                    <FormGroup>
                                        <LabelDark>
                                            Is this job offer supported by an LMIA (Labour Market Impact Assessment) or an LMIA exception code?
                                        </LabelDark>
                                        <CustomSelect options={[
                                                { name: "No",             value: "JOBLM0"},
                                                { name: "Yes",            value: "JOBLM1"},
                                                { name: "I don't know",   value: "JOBLM2"}
                                            ]} 
                                            qId="82"
                                            onChange={this.updateProperty}
                                            value={qA82}
                                            placeholder="Select" />
                                    </FormGroup>
                                    <FormGroup>
                                        <LabelDark>
                                            Title of the Canadian job
                                        </LabelDark>
                                        <CustomInput
                                            suggestions={JOB_TITLES}
                                            type="work" 
                                            qId="83" 
                                            onChange={this.updateProperty} 
                                            value={qA83} />
                                    </FormGroup>
                                    <FormGroup>
                                        <LabelDark>
                                            Is the position part-time or full-time?
                                        </LabelDark>
                                        <Row>
                                            <Col>
                                                <SelectButtons
                                                    className={qA84 == "JOBTP0" ? " active" : ""}
                                                    onClick={() => this.updateProperty("84", "JOBTP0")}>Full-time</SelectButtons>
                                            </Col>
                                            <Col>
                                                <SelectButtons
                                                    className={qA84 == "JOBTP1" ? " active" : ""}
                                                    onClick={() => this.updateProperty("84", "JOBTP1")}>Part-time</SelectButtons>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <LabelDark>In which province is your job offer?</LabelDark>
                                        <CustomSelect options={[
                                                { name: "Alberta",                      value: "JOBPAB"},
                                                { name: "British Columbia",             value: "JOBPBC"},
                                                { name: "Manitoba",                     value: "JOBPMB"},
                                                { name: "New Brunswick",                value: "JOBPNB"},
                                                { name: "Newfoundland and Labrador",    value: "JOBPNL"},
                                                { name: "Northwest Terriories",         value: "JOBPNT"},
                                                { name: "Nova Scotia",                  value: "JOBPNS"},
                                                { name: "Nunavut",                      value: "JOBPNU"},
                                                { name: "Ontario",                      value: "JOBPON"},
                                                { name: "Prince Edward Island",         value: "JOBPPE"},
                                                { name: "Quebec",                       value: "JOBPQC" },
                                                { name: "Saskatchewan",                 value: "JOBPSK" },
                                                { name: "Yukon",                        value: "JOBPYT" },
                                            ]} 
                                            qId="85"
                                            onChange={this.updateProperty}
                                            value={qA85}
                                            placeholder="Select" />
                                    </FormGroup>
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
        let { qA81, qA82, qA83, qA84, qA85 } = this.state;

        if (!qA81) {
            return false;
        }
        else if (qA81 == "JOBOF1") {
            if (!qA82 || !qA83 || !qA84 || !qA85)
                return false;
        }
        else {
            this.state.qA82 = this.state.qA83 = this.state.qA84 = this.state.qA85 = '';
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

    saveResponse = async () => {
        let { store } = this.props;
        let { qA81, qA82, qA83, qA84, qA85 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        // update redux
        this.props.updateAnswer({
            Q81: qA81, Q82: qA82, Q83: qA83, Q84: qA84, Q85: qA85 
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA81, "QuestionCode" : "81" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA82, "QuestionCode" : "82" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA84, "QuestionCode" : "84" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA85, "QuestionCode" : "85" });

        let qA86 = '', qA87 = '', qA88 = '', qA89 = '', qA220 = '';
        let work = JOB_TITLES.find((job, index) => {
            return job.value == qA83;
        });
        if (work) {
            qA83 = work.JobTitle;
        }
        body.push({ "ProfileEmail": email, "Text": qA83, "AnswerCode" : qA83 ? "JOBTLE" : "", "QuestionCode" : "83" });
        if (work) {
            qA86 = `JOBNOCC-${work.NOCCode}`;
            await QAService.getNocGroup(work.NOCCode)
                .then(res => {
                    if (res.data.nocGroup == "00")
                        qA87 = `JOBNOCG-0`;
                    else
                        qA87 = `JOBNOCG-${res.data.nocGroup}`;
                    qA88 = `JOBNCMAG-${res.data.nocMajorGroup}`;
                    qA89 = `JOBNCMIG-${res.data.nocMinorGroup}`;

                    switch (res.data.nocGroup) {
                        case "00":
                            qA220 = "JOBNOCGP-00";
                            break;
                        case "0":
                            if (qA82 == "JOBLM1" && qA84 == "JOBTP0")
                                qA220 = "JOBNOCGP-0";
                            break;
                        case "A":
                            if (qA82 == "JOBLM1" && qA84 == "JOBTP0")
                                qA220 = "JOBNOCGP-A";
                            break;
                        case "B":
                            if (qA82 == "JOBLM1" && qA84 == "JOBTP0")
                                qA220 = "JOBNOCGP-B";
                            break;
                    }
                });
        }
        
        this.props.updateAnswer({
            Q88: qA88
        });

        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA86, "QuestionCode" : "86" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA87, "QuestionCode" : "87" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA88, "QuestionCode" : "88" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA89, "QuestionCode" : "89" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA220, "QuestionCode" : "220" });

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
            state: { nextUrl: '/question_work3', prevUrl: '/question_work2', direction: 'next' }
        });
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_work2', prevUrl: '/question_work1', direction: 'back' }
        });
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA81: getQASingle(state, "81"),
        qA82: getQASingle(state, "82"),
        qA83: getQASingle(state, "83"),
        qA84: getQASingle(state, "84"),
        qA85: getQASingle(state, "85")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionWork2));
