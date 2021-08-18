import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getStore, getQAEmail, getQASingle } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import CustomInput from "../../../BasicComponent/CustomControl/customInput";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { LabelDark } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SlideArea, SmoothSwitch} from "../../../BasicComponent/Card/card";
import { TextFields } from "../../../BasicComponent/TextFields/textFields";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { JOB_TITLES } from "../../../../Assests/job_titles";
import { countryCodes } from "../../../../Assests/country_codes";

class QuestionWork3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            qA227: props.qA227,
            qA90: props.qA90,
            qA91: props.qA91,
            qA237: props.qA237,
            qA93: props.qA93,
            qA94: props.qA94,
            qA99: props.qA99,
            qA100_1: props.qA100_1,
            qA100_2: props.qA100_2,
            qA102: props.qA102,
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
        let { qA81 } = this.props;
        let { show } = this.state;
        let { qA227, qA90, qA91, qA237, qA93, qA94,qA99, qA100_1, qA100_2, qA102 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Are you currently employed?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA227 == "JOEMP1" ? " active" : "")}
                                    onClick={() => this.updateProperty("227", "JOEMP1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA227 == "JOEMP0" ? " active" : "")}
                                    onClick={() => this.updateProperty("227", "JOEMP0")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <SmoothSwitch identifier={qA227 == "JOEMP1" ? "case1" : "case2"}>
                        {qA227 == "JOEMP1" && (
                            <MoreOptions>
                                <FormGroup>
                                    <LabelDark>
                                        Are you currently working inside Canada?
                                    </LabelDark>
                                    <Row>
                                        <Col>
                                            <SelectButtons
                                                className={qA90 == "JOCPL1" ? " active" : ""}
                                                onClick={() => this.updateProperty("90", "JOCPL1")}>Yes</SelectButtons>
                                        </Col>
                                        <Col>
                                            <SelectButtons
                                                className={qA90 == "JOCPL0" ? " active" : ""}
                                                onClick={() => this.updateProperty("90", "JOCPL0")}>No</SelectButtons>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <SmoothSwitch identifier={qA90 ? qA90 : "case_null"}>
                                {qA90 == "JOCPL1" && (
                                    <React.Fragment>
                                        <FormGroup>
                                            <LabelDark>What province is your Canadian employer located in?</LabelDark>
                                            <CustomSelect options={[
                                                    { name: "Alberta",                      value: "JOCPAB"},
                                                    { name: "British Columbia",             value: "JOCPBC"},
                                                    { name: "Manitoba",                     value: "JOCPMB"},
                                                    { name: "New Brunswick",                value: "JOCPNB"},
                                                    { name: "Newfoundland and Labrador",    value: "JOCPNL"},
                                                    { name: "Northwest Terriories",         value: "JOCPNT"},
                                                    { name: "Nova Scotia",                  value: "JOCPNS"},
                                                    { name: "Nunavut",                      value: "JOCPNU"},
                                                    { name: "Ontario",                      value: "JOCPON"},
                                                    { name: "Prince Edward Island",         value: "JOCPPE"},
                                                    { name: "Quebec",                       value: "JOCPQC" },
                                                    { name: "Saskatchewan",                 value: "JOCPSK" },
                                                    { name: "Yukon",                        value: "JOCPYT" },
                                                ]} 
                                                qId="91"
                                                onChange={this.updateProperty}
                                                value={qA91}
                                                placeholder="Select" />
                                        </FormGroup>
                                    </React.Fragment>
                                )}
                                {qA90 == "JOCPL0" && (
                                    <React.Fragment>                                        
                                        <FormGroup>
                                            <LabelDark>In what country do you work?</LabelDark>
                                            <CustomInput 
                                                suggestions={countryCodes} 
                                                qId="237" 
                                                onChange={this.updateProperty} 
                                                prefix={`JOCCN`}
                                                value={qA237} 
                                                placeholder="Type country here..." />
                                        </FormGroup>
                                    </React.Fragment>
                                )}
                                </SmoothSwitch>
                                <FormGroup>
                                    <LabelDark>
                                        Current Job Title
                                    </LabelDark>
                                    <CustomInput
                                        suggestions={JOB_TITLES}
                                        type="work" 
                                        qId="93" 
                                        onChange={this.updateProperty} 
                                        value={qA93} />
                                </FormGroup>
                                <SmoothSwitch identifier={qA90 == "JOCPL0" ? "case1" : "case2"}>
                                {qA90 == "JOCPL0" && (
                                    <FormGroup>
                                        <LabelDark>
                                            Does your company have a Canadian office?
                                        </LabelDark>
                                        <Row>
                                            <Col>
                                                <SelectButtons
                                                    className={qA94 == "JOCCO1" ? " active" : ""}
                                                    onClick={() => this.updateProperty("94", "JOCCO1")}>Yes</SelectButtons>
                                            </Col>
                                            <Col>
                                                <SelectButtons
                                                    className={qA94 == "JOCCO0" ? " active" : ""}
                                                    onClick={() => this.updateProperty("94", "JOCCO0")}>No</SelectButtons>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                )}
                                </SmoothSwitch>
                                <FormGroup>
                                    <LabelDark>
                                        Are you working full-time or part-time?
                                    </LabelDark>
                                    <Row>
                                        <Col>
                                            <SelectButtons
                                                className={qA99 == "JOCFT1" ? " active" : ""}
                                                onClick={() => this.updateProperty("99", "JOCFT1")}>Full-time</SelectButtons>
                                        </Col>
                                        <Col>
                                            <SelectButtons
                                                className={qA99 == "JOCFT0" ? " active" : ""}
                                                onClick={() => this.updateProperty("99", "JOCFT0")}>Part-time</SelectButtons>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <LabelDark>Start date</LabelDark>
                                    <Row>
                                        <Col>
                                            <CustomSelect options={MONTHS} qId="100_1" onChange={this.updateProperty} value={qA100_1} placeholder="Select" />
                                        </Col>
                                        <Col>
                                            <CustomSelect options={YEARS(2021, 1970)} qId="100_2" onChange={this.updateProperty} value={qA100_2} placeholder="Select" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                {/* <FormGroup>
                                    <LabelDark>End date</LabelDark>
                                    <Row>
                                        <Col>
                                            <CustomSelect options={MONTHS} qId="101_1" onChange={this.updateProperty} value={qA101_1} placeholder="Select" />
                                        </Col>
                                        <Col>
                                            <CustomSelect options={YEARS} qId="101_2" onChange={this.updateProperty} value={qA101_2} placeholder="Select" />
                                        </Col>
                                    </Row>
                                </FormGroup> */}
                                <SmoothSwitch identifier={qA90 == "JOCPL1" || (qA90 == "JOCPL0" && qA94 == "JOCCO1") ? "case1" : "case2"}>
                                {(qA90 == "JOCPL1" || (qA90 == "JOCPL0" && qA94 == "JOCCO1")) && (
                                    <FormGroup>
                                        <LabelDark>How would you rate your relationship with your employer?</LabelDark>
                                        <CustomSelect options={[
                                                { name: "Excellent",        value: "JOCRE0"},
                                                { name: "Above Average",    value: "JOCRE1"},
                                                { name: "Average",          value: "JOCRE2"},
                                                { name: "Below Average",    value: "JOCRE3"},
                                                { name: "Very Poor",        value: "JOCRE4"}
                                            ]} 
                                            qId="102"
                                            onChange={this.updateProperty}
                                            value={qA102}
                                            placeholder="Select" />
                                    </FormGroup>
                                )}
                                </SmoothSwitch>
                            </MoreOptions>
                        )}
                        </SmoothSwitch>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={true} />
            </React.Fragment>
         );
    }
    
    canForward = () => {
        let { qA81 } = this.props;
        let { qA227, qA90, qA91, qA237, qA93, qA94, qA99, qA100_1, qA100_2, qA102 } = this.state;

        if (!qA227) {
            return false;
        }
        else if (qA227 == "JOEMP1") {
            if (!qA90) {
                return false;
            }
            else if (qA90 == "JOCPL1") {
                if (!qA102)
                    return false;

                if (!qA91)
                    return false;

                this.state.qA94 = this.state.qA237 = '';
            }
            else {
                this.state.qA91 = '';

                if (!qA237)
                    return false;

                if (!qA94)
                    return false;
                else if (qA94 != "JOCCO1") {
                    this.state.qA102 = '';
                }
                else {
                    if (!qA102)
                        return false;
                }
            }

            if (!qA93 || !qA99 || !qA100_1 || !qA100_2)
                return false;
        }
        else {
            this.state.qA90 = this.state.qA91 = this.state.qA93 = this.state.qA94 = this.state.qA99 = this.state.qA100_1 = this.state.qA100_2 = this.state.qA102 = '';
        }

        return true;
    }

    updateProperty = (qId, value) => {
        this.setState({
            [`qA${qId}`]: value
        });
    }

    monthDiff = (dy1, dm1, dy2, dm2) => {
        var months;
        months = (dy2 - dy1) * 12;
        months -= (dm1 - 1);
        months += dm2;
        return months <= 0 ? 0 : months;
    }

    saveResponse = async () => {
        let { store, qA81, qA88 } = this.props;
        let { qA227, qA90, qA91, qA237, qA93, qA94, qA99, qA100_1, qA100_2, qA102 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        // update redux
        this.props.updateAnswer({
            Q227: qA227, Q90: qA90, Q91: qA91, Q237: qA237, Q93: qA93, Q94: qA94, Q99: qA99, Q100_1: qA100_1, Q100_2: qA100_2, Q102: qA102
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA227, "QuestionCode" : "227" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA90, "QuestionCode" : "90" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA91, "QuestionCode" : "91" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA237, "QuestionCode" : "237" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA94, "QuestionCode" : "94" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA99, "QuestionCode" : "99" });
        body.push({ "ProfileEmail": email, "Text": qA100_1 ? (qA100_1 + '/' + qA100_2) : "", "AnswerCode" : qA100_1 ? "JOCSTD" : "", "QuestionCode" : "100" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA102, "QuestionCode" : "102" });

        let qA92 = '', qA95 = '', qA96 = '', qA97 = '', qA98 = '', qA213 = '';

        if (qA227 == "JOEMP1")
        {
            let duration = this.monthDiff(qA100_2, qA100_1, new Date().getFullYear(), new Date().getMonth() + 1);
            if (duration <= 3) qA213 = "JOCDUR-03";
            else if (duration <= 6) qA213 = "JOCDUR-06";
            else if (duration <= 9) qA213 = "JOCDUR-09";
            else if (duration <= 12) qA213 = "JOCDUR-12";
            else if (duration <= 18) qA213 = "JOCDUR-18";
            else if (duration <= 24) qA213 = "JOCDUR-24";
            else if (duration <= 36) qA213 = "JOCDUR-36";
            else if (duration <= 48) qA213 = "JOCDUR-48";
            else if (duration <= 60) qA213 = "JOCDUR-60";
            else qA213 = "JOCDUR-61";
        }

        let work = JOB_TITLES.find((job, index) => {
            return job.value == qA93;
        });
        if (work) {
            qA93 = work.JobTitle;
        }
        
        body.push({ "ProfileEmail": email, "Text": qA93, "AnswerCode" : qA93 ? "JOCTLE" : "", "QuestionCode" : "93" });
        if (work) {
            qA95 = `JOCNOCC-${work.NOCCode}`;
            await QAService.getNocGroup(work.NOCCode)
                .then(res => {
                    if (res.data.nocGroup == "00")
                        qA96 = `JOCNOCG-0`;
                    else
                        qA96 = `JOCNOCG-${res.data.nocGroup}`;
                    qA97 = `JOCNCMAG-${res.data.nocMajorGroup}`;
                    qA98 = `JOCNCMIG-${res.data.nocMinorGroup}`;
                    
                    this.props.updateAnswer({
                        Q96: qA96
                    });
                });
        }

        if (qA81 == "JOBOF1" && qA90 == "JOCPL1") {
            if (qA88.slice(-2) == qA97.slice(-2)) {
                qA92 = "JOBCW1";
            }
            else {
                qA92 = "JOBCW0";
            }
        }
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA92, "QuestionCode" : "92" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA95, "QuestionCode" : "95" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA96, "QuestionCode" : "96" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA97, "QuestionCode" : "97" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA98, "QuestionCode" : "98" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA213, "QuestionCode" : "213" });

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
            state: { nextUrl: '/question_work4', prevUrl: '/question_work3', direction: 'next' }
        });
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_work3', prevUrl: '/question_work2', direction: 'back' }
        });
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA81: getQASingle(state, "81"),
        qA88: getQASingle(state, "88"),
        qA227: getQASingle(state, "227"),
        qA90: getQASingle(state, "90"),
        qA91: getQASingle(state, "91"),
        qA237: getQASingle(state, "237"),
        qA92: getQASingle(state, "92"),
        qA93: getQASingle(state, "93"),
        qA94: getQASingle(state, "94"),
        qA99: getQASingle(state, "99"),
        qA100_1: getQASingle(state, "100_1"),
        qA100_2: getQASingle(state, "100_2"),
        qA102: getQASingle(state, "102"),
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionWork3));
