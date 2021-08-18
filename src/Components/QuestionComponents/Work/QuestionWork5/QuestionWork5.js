import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getStore, getQAEmail, getQASingle, getQAGroup } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import PlusIcon from "../../../../Assests/Icons/icon  plus.png";
import { AddButton } from "../../../BasicComponent/Button/button";
import { CustomGroup, CustomGroupDeleteButton } from "../../../BasicComponent/CustomGroup/customGroup";
import CustomInput from "../../../BasicComponent/CustomControl/customInput";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { TextFields, LabelDark, Labels } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, CardBody, CardFooter, CardHeader, MoreOptions, SmoothSwitch } from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { countryCodes } from '../../../../Assests/country_codes';
import { JOB_TITLES } from "../../../../Assests/job_titles";

class QuestionWork5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            qA127: props.qA127,
            qA128_136: props.qA128_136.length 
                        ? [ ...props.qA128_136] 
                        : [{ key: 0, qA128: '', qA129: '', qA134: '', qA135_1: '', qA135_2: '', qA136_1: '', qA136_2: '' }]
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        }, 1000);
    }

    onAddWorkExperience = () => {
        let tmp = [ ...this.state.qA128_136 ];
        let key = 0;

        if (tmp.length)
            key = tmp[tmp.length-1].key + 1;

        tmp.push({ key: key, qA128: '', qA129: '', qA134: '', qA135_1: '', qA135_2: '', qA136_1: '', qA136_2: '' });

        this.setState({
            qA128_136: tmp
        });
    }

    render() { 
        let { show } = this.state;
        let { qA127, qA128_136 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Do you have any additional work experience <u>outside</u> Canada?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA127 == "JPEINT1" ? " active" : "")}
                                    onClick={() => this.updateProperty("127", "JPEINT1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA127 == "JPEINT0" ? " active" : "")}
                                    onClick={() => this.updateProperty("127", "JPEINT0")}>No</SelectButtons>
                            </Col>
                        </Row>                        
                        <MoreOptions>
                            <SmoothSwitch identifier={qA127 == "JPEINT1" ? "case1" : "case2"}>
                            {qA127 == "JPEINT1" ? (
                                <React.Fragment>
                                {qA128_136.map((value, index) => {
                                    return (
                                        <CustomGroup key={value.key}>
                                            <FormGroup>
                                                <Labels>Non-Canadian Work Experience {index + 1}</Labels>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    Job Title
                                                </LabelDark>
                                                <CustomInput
                                                    type="work"
                                                    suggestions={JOB_TITLES}
                                                    groupId="128_136"
                                                    index={index}
                                                    qId="128" 
                                                    onChange={this.updateGroupField} 
                                                    value={value.qA128} 
                                                    placeholder="Type here..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>In what country did you work?</LabelDark>
                                                <CustomInput 
                                                    suggestions={countryCodes} 
                                                    groupId="128_136"
                                                    index={index}
                                                    qId="129" 
                                                    onChange={this.updateGroupField} 
                                                    prefix={`JPEIN0${index}-CN`}
                                                    value={value.qA129} 
                                                    placeholder="Type here to search..." />
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    Were you working full-time or part-time?
                                                </LabelDark>
                                                <Row>
                                                    <Col>
                                                        <SelectButtons
                                                            className={value.qA134 == `JPEIN0${index}-FT1` ? " active" : ""}
                                                            onClick={() => this.updateGroupField("128_136", index, "134", `JPEIN0${index}-FT1`)}>Full-time</SelectButtons>
                                                    </Col>
                                                    <Col>
                                                        <SelectButtons
                                                            className={value.qA134 == `JPEIN0${index}-FT0` ? " active" : ""}
                                                            onClick={() => this.updateGroupField("128_136", index, "134", `JPEIN0${index}-FT0`)}>Part-time</SelectButtons>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Start date</LabelDark>
                                                <Row>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={MONTHS} 
                                                            groupId="128_136"
                                                            index={index}
                                                            qId="135_1" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA135_1} 
                                                            placeholder="Select" />
                                                    </Col>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={YEARS(2021, 1970)} 
                                                            groupId="128_136"
                                                            index={index}
                                                            qId="135_2" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA135_2} 
                                                            placeholder="Select" />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>End date</LabelDark>
                                                <Row>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={MONTHS} 
                                                            groupId="128_136"
                                                            index={index}
                                                            qId="136_1" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA136_1} 
                                                            placeholder="Select" />
                                                    </Col>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={YEARS(2021, 1970)} 
                                                            groupId="128_136"
                                                            index={index}
                                                            qId="136_2" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA136_2} 
                                                            placeholder="Select" />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            {index != 0 && (
                                                <CustomGroupDeleteButton onClick={() => this.deleteGroup("128_136", index)} />
                                            )}
                                        </CustomGroup>
                                    );
                                })}
                                {(qA128_136.length < 10) && (
                                    <p className="text-right mt-3">Add another past work experience<AddButton onClick={this.onAddWorkExperience}> <img src={PlusIcon}/> </AddButton></p> 
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
        let { qA127, qA128_136 } = this.state;

        if (!qA127) {
            return false;
        }
        else if (qA127 == "JPEINT1") {
            for (let i = 0; i < qA128_136.length; i ++)
                if (!qA128_136[i].qA128 || !qA128_136[i].qA129 || !qA128_136[i].qA134 || !qA128_136[i].qA135_1 || !qA128_136[i].qA135_2 || !qA128_136[i].qA136_1 || !qA128_136[i].qA136_2)
                    return false;
        }
        else {
            this.state.qA128_136 = [{ key: 0, qA128: '', qA129: '', qA134: '', qA135_1: '', qA135_2: '', qA136_1: '', qA136_2: '' }];
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

    monthDiff = (dy1, dm1, dy2, dm2) => {
        var months;
        months = (dy2 - dy1) * 12;
        months -= (dm1 - 1);
        months += dm2;
        return months <= 0 ? 0 : months;
    }

    saveResponse = async () => {
        let { store, qA90, qA96, qA99, qA100_1, qA100_2 } = this.props;
        let { qA127, qA128_136 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        qA96 = qA96.slice(qA96.indexOf("-") + 1);
        
        // update redux
        this.props.updateAnswer({
            Q127: qA127, Q128_136: JSON.parse(JSON.stringify(qA128_136))
        });

        let qA228 = 0, qA236 = 0;
        if (qA90 == "JOCPL0") {
            let months = this.monthDiff(qA100_2, qA100_1, new Date().getFullYear(), new Date().getMonth() + 1);

            qA228 += months;

            if ((qA96 == "00" || qA96 == "0" || qA96 == "A" || qA96 == "B") && qA99 == "JOCFT1") {
                qA236 += months;
            }
        }
        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA127, "QuestionCode" : "127" });
        await Promise.all(qA128_136.map(async (value, index) => {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA129, "QuestionCode" : (index != 0 ? `129-${index}` : "129") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA134, "QuestionCode" : (index != 0 ? `134-${index}` : "134") });
            body.push({ "ProfileEmail": email, "Text": value.qA135_1 ? value.qA135_1 + '/' + value.qA135_2 : "", "AnswerCode" : value.qA135_1 ? `JPEIN0${index}-STD` : "", "QuestionCode" : (index != 0 ? `135-${index}` : "135") });
            body.push({ "ProfileEmail": email, "Text": value.qA136_1 ? value.qA136_1 + '/' + value.qA136_2 : "", "AnswerCode" : value.qA136_1 ? `JPEIN0${index}-END` : "", "QuestionCode" : (index != 0 ? `136-${index}` : "136") });

            let qA215 = '';
            let duration = 0;

            if (value.qA136_2)
            {
                let months = this.monthDiff(value.qA135_2, value.qA135_1, value.qA136_2, value.qA136_1);
                if (months <= 3) qA215 = `JPEIN0${index}-DUR-03`;
                else if (months <= 6) qA215 = `JPEIN0${index}-DUR-06`;
                else if (months <= 9) qA215 = `JPEIN0${index}-DUR-09`;
                else if (months <= 12) qA215 = `JPEIN0${index}-DUR-12`;
                else if (months <= 18) qA215 = `JPEIN0${index}-DUR-18`;
                else if (months <= 24) qA215 = `JPEIN0${index}-DUR-24`;
                else if (months <= 36) qA215 = `JPEIN0${index}-DUR-36`;
                else if (months <= 48) qA215 = `JPEIN0${index}-DUR-48`;
                else if (months <= 60) qA215 = `JPEIN0${index}-DUR-60`;
                else qA215 = `JPEIN0${index}-DUR-61`;

                qA228 += months;
            }

            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA215, "QuestionCode" : (index != 0 ? `215-${index}` : "215") });

            let qA130 = '', qA131 = '', qA132 = '', qA133 = '';
            let work = JOB_TITLES.find((job, index) => {
                return job.value == value.qA128;
            });
            if (work) {
                value.qA128 = work.JobTitle;
            }
            body.push({ "ProfileEmail": email, "Text": value.qA128, "AnswerCode" : value.qA128 ? `JPEIN0${index}-TLE` : "", "QuestionCode" : (index != 0 ? `128-${index}` : "128") });
            if (work) {
                qA130 = `JPEIN0${index}-NOCC-${work.NOCCode}`;
                await QAService.getNocGroup(work.NOCCode)
                    .then(res => {
                        if (res.data.nocGroup == "00")
                            qA131 = `JPEIN0${index}-NOCG-0`;
                        else
                            qA131 = `JPEIN0${index}-NOCG-${res.data.nocGroup}`;
                        qA132 = `JPEIN0${index}-NCMAG-${res.data.nocMajorGroup}`;
                        qA133 = `JPEIN0${index}-NCMIG-${res.data.nocMinorGroup}`;
                        
                        if ((res.data.nocGroup == "00" || res.data.nocGroup == "0" || res.data.nocGroup == "A" || res.data.nocGroup == "B") && value.qA134 == `JPEIN0${index}-FT1`) {
                            let duration = 0;
                            if (parseInt(value.qA135_2) >= parseInt(new Date().getFullYear()) - 10)
                                duration = this.monthDiff(value.qA135_2, value.qA135_1, value.qA136_2, value.qA136_1);
                            else
                                duration = this.monthDiff(new Date().getFullYear() - 10, 1, value.qA136_2, value.qA136_1);
                            if (duration < 0) duration = 0;
                            qA236 += duration;
                        }
                    });
            }
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA130, "QuestionCode" : (index != 0 ? `130-${index}` : "130") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA131, "QuestionCode" : (index != 0 ? `131-${index}` : "131") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA132, "QuestionCode" : (index != 0 ? `132-${index}` : "132") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA133, "QuestionCode" : (index != 0 ? `133-${index}` : "133") });
        }));

        let qA228_ = '';
        if (qA228 < 1 * 12) qA228_ = "INTEX00";
        else if (qA228 < 2 * 12) qA228_ = "INTEX01";
        else if (qA228 < 3 * 12) qA228_ = "INTEX02";
        else if (qA228 < 4 * 12) qA228_ = "INTEX03";
        else if (qA228 < 5 * 12) qA228_ = "INTEX04";
        else qA228_ = "INTEX05";
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA228_, "QuestionCode" : "228" });

        let qA236_ = '';
        if (qA236 < 1 * 12) qA236_ = "JINNOCGP-0";
        else if (qA236 < 2 * 12) qA236_ = "JINNOCGP-1";
        else if (qA236 < 3 * 12) qA236_ = "JINNOCGP-2";
        else if (qA236 < 4 * 12) qA236_ = "JINNOCGP-3";
        else if (qA236 < 5 * 12) qA236_ = "JINNOCGP-4";
        else qA236_ = "JINNOCGP-5";
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA236_, "QuestionCode" : "236" });
        
        for (let i = qA128_136.length; i < 10; i ++) {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `128-${i}` : "128") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `129-${i}` : "129") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `134-${i}` : "134") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `135-${i}` : "135") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `136-${i}` : "136") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `215-${i}` : "215") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `130-${i}` : "130") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `131-${i}` : "131") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `132-${i}` : "132") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `133-${i}` : "133") });
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
            state: { nextUrl: '/question_language1', prevUrl: '/question_work5', direction: 'next' }
        });
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_work5', prevUrl: '/question_work4', direction: 'back' }
        });
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA90: getQASingle(state, "90"),
        qA96: getQASingle(state, "96"),
        qA99: getQASingle(state, "99"),
        qA100_1: getQASingle(state, "100_1"),
        qA100_2: getQASingle(state, "100_2"),
        qA127: getQASingle(state, "127"),
        qA128_136: getQAGroup(state, "128_136")
    };
};

const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionWork5));
