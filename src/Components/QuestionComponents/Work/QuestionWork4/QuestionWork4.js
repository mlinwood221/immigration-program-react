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
import CustomCheckbox from "../../../BasicComponent/CheckBox/checkBox";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { TextFields, LabelDark, Labels } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SmoothSwitch } from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { JOB_TITLES } from "../../../../Assests/job_titles";

class QuestionWork4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            qA103: props.qA103,
            qA104_113: props.qA104_113.length 
                        ? [ ...props.qA104_113] 
                        : [{ key: 0, qA104: '', qA105: '', qA110: '', qA111_1: '', qA111_2: '', qA112_1: '', qA112_2: '', qA113: '' }]
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
        let tmp = [ ...this.state.qA104_113 ];
        let key = 0;

        if (tmp.length)
            key = tmp[tmp.length-1].key + 1;

        tmp.push({ key: key, qA104: '', qA105: '', qA110: '', qA111_1: '', qA111_2: '', qA112_1: '', qA112_2: '', qA113: '' });

        this.setState({
            qA104_113: tmp
        });
    }

    render() { 
        let { show } = this.state;
        let { qA103, qA104_113 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Have you ever worked in Canada <u>in the past</u>?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA103 == "JPECA1" ? " active" : "")}
                                    onClick={() => this.updateProperty("103", "JPECA1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA103 == "JPECA0" ? " active" : "")}
                                    onClick={() => this.updateProperty("103", "JPECA0")}>No</SelectButtons>
                            </Col>
                        </Row>                        
                        <MoreOptions>
                            <SmoothSwitch identifier={qA103 == "JPECA1" ? "case1" : "case2"}>
                            {qA103 == "JPECA1" ? (
                                <React.Fragment>
                                {qA104_113.map((value, index) => {
                                    return (
                                        <CustomGroup key={value.key}>
                                            <FormGroup>
                                                <Labels>Canadian Work Experience {index + 1}</Labels>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    Job Title
                                                </LabelDark>
                                                <CustomInput
                                                    suggestions={JOB_TITLES}
                                                    type="work" 
                                                    groupId="104_113"
                                                    index={index}
                                                    qId="104" 
                                                    onChange={this.updateGroupField} 
                                                    value={value.qA104} />
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>In which province did you work?</LabelDark>
                                                <CustomSelect options={[
                                                        { name: "Alberta",                      value: `JPECA0${index}-PAB`},
                                                        { name: "British Columbia",             value: `JPECA0${index}-PBC`},
                                                        { name: "Manitoba",                     value: `JPECA0${index}-PMB`},
                                                        { name: "New Brunswick",                value: `JPECA0${index}-PNB`},
                                                        { name: "Newfoundland and Labrador",    value: `JPECA0${index}-PNL`},
                                                        { name: "Northwest Terriories",         value: `JPECA0${index}-PNT`},
                                                        { name: "Nova Scotia",                  value: `JPECA0${index}-PNS`},
                                                        { name: "Nunavut",                      value: `JPECA0${index}-PNU`},
                                                        { name: "Ontario",                      value: `JPECA0${index}-PON`},
                                                        { name: "Prince Edward Island",         value: `JPECA0${index}-PPE`},
                                                        { name: "Quebec",                       value: `JPECA0${index}-PQC`},
                                                        { name: "Saskatchewan",                 value: `JPECA0${index}-PSK`},
                                                        { name: "Yukon",                        value: `JPECA0${index}-PYT`},
                                                    ]} 
                                                    groupId="104_113"
                                                    index={index}
                                                    qId="105"
                                                    onChange={this.updateGroupField}
                                                    value={value.qA105}
                                                    placeholder="Select" />
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    Were you working full-time or part-time?
                                                </LabelDark>
                                                <Row>
                                                    <Col>
                                                        <SelectButtons
                                                            className={value.qA110 == `JPECA0${index}-FT1` ? " active" : ""}
                                                            onClick={() => this.updateGroupField("104_113", index, "110", `JPECA0${index}-FT1`)}>Full-time</SelectButtons>
                                                    </Col>
                                                    <Col>
                                                        <SelectButtons
                                                            className={value.qA110 == `JPECA0${index}-FT0` ? " active" : ""}
                                                            onClick={() => this.updateGroupField("104_113", index, "110", `JPECA0${index}-FT0`)}>Part-time</SelectButtons>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>Start date</LabelDark>
                                                <Row>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={MONTHS} 
                                                            groupId="104_113"
                                                            index={index}
                                                            qId="111_1" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA111_1} 
                                                            placeholder="Select" />
                                                    </Col>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={YEARS(2021, 1970)} 
                                                            groupId="104_113"
                                                            index={index}
                                                            qId="111_2" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA111_2} 
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
                                                            groupId="104_113"
                                                            index={index}
                                                            qId="112_1" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA112_1} 
                                                            placeholder="Select" />
                                                    </Col>
                                                    <Col>
                                                        <CustomSelect 
                                                            options={YEARS(2021, 1970)} 
                                                            groupId="104_113"
                                                            index={index}
                                                            qId="112_2" 
                                                            onChange={this.updateGroupField} 
                                                            value={value.qA112_2} 
                                                            placeholder="Select" />
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>How would you rate your relationship with your employer?</LabelDark>
                                                <CustomSelect options={[
                                                        { name: "Excellent",        value: `JPECA0${index}-RE0`},
                                                        { name: "Above Average",    value: `JPECA0${index}-RE1`},
                                                        { name: "Average",          value: `JPECA0${index}-RE2`},
                                                        { name: "Below Average",    value: `JPECA0${index}-RE3`},
                                                        { name: "Very Poor",        value: `JPECA0${index}-RE4`}
                                                    ]} 
                                                    groupId="104_113"
                                                    index={index}
                                                    qId="113"
                                                    onChange={this.updateGroupField}
                                                    value={value.qA113}
                                                    placeholder="Select" />
                                            </FormGroup>
                                            {index != 0 && (
                                                <CustomGroupDeleteButton onClick={() => this.deleteGroup("104_113", index)} />
                                            )}
                                        </CustomGroup>
                                    );
                                })}
                                {(qA104_113.length < 10) && (
                                    <p className="text-right mt-3">Add another past Canadian work experience<AddButton onClick={this.onAddWorkExperience}> <img src={PlusIcon}/> </AddButton></p> 
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
        let { qA103, qA104_113 } = this.state;

        if (!qA103) {
            return false;
        }
        else if (qA103 == "JPECA1") {
            for (let i = 0; i < qA104_113.length; i ++)
                if (!qA104_113[i].qA104 || !qA104_113[i].qA105 || !qA104_113[i].qA110 || !qA104_113[i].qA111_1 || !qA104_113[i].qA111_2 || !qA104_113[i].qA112_1 || !qA104_113[i].qA112_2 || !qA104_113[i].qA113)
                    return false;
        }
        else {
            this.state.qA104_113 = [{ key: 0, qA104: '', qA105: '', qA110: '', qA111_1: '', qA111_2: '', qA112_1: '', qA112_2: '', qA113: '' }];
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
        let { qA103, qA104_113 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        qA96 = qA96.slice(qA96.indexOf("-") + 1);

        // update redux
        this.props.updateAnswer({
            Q103: qA103, Q104_113: JSON.parse(JSON.stringify(qA104_113))
        });

        // Years of working experience for each province
        let qA114 = 0, qA115 = 0, qA116 = 0, qA210 = 0, qA117 = 0, qA118 = 0, qA119 = 0, qA120 = 0, qA121 = 0, qA122 = 0, qA123 = 0, qA124 = 0, qA125 = 0, qA126 = 0;
        let qA221 = 0;

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA103, "QuestionCode" : "103" });
        await Promise.all(qA104_113.map(async (value, index) => {    
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA105, "QuestionCode" : (index != 0 ? `105-${index}` : "105") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA110, "QuestionCode" : (index != 0 ? `110-${index}` : "110") });
            body.push({ "ProfileEmail": email, "Text": value.qA111_1 ? value.qA111_1 + '/' + value.qA111_2 : "", "AnswerCode" : value.qA111_1 ? `JPECA0${index}-STD` : "", "QuestionCode" : (index != 0 ? `111-${index}` : "111") });
            body.push({ "ProfileEmail": email, "Text": value.qA112_1 ? value.qA112_1 + '/' + value.qA112_2 : "", "AnswerCode" : value.qA112_1 ? `JPECA0${index}-END` : "", "QuestionCode" : (index != 0 ? `112-${index}` : "112") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA113, "QuestionCode" : (index != 0 ? `113-${index}` : "113") });
            
            let qA106 = '', qA107 = '', qA108 = '', qA109 = '', qA214 = '';

            let duration = 0;
            if (value.qA112_2)
            {
                duration = this.monthDiff(value.qA111_2, value.qA111_1, value.qA112_2, value.qA112_1);
                if (duration <= 3) qA214 = `JPECA0${index}-DUR-03`;
                else if (duration <= 6) qA214 = `JPECA0${index}-DUR-06`;
                else if (duration <= 9) qA214 = `JPECA0${index}-DUR-09`;
                else if (duration <= 12) qA214 = `JPECA0${index}-DUR-12`;
                else if (duration <= 18) qA214 = `JPECA0${index}-DUR-18`;
                else if (duration <= 24) qA214 = `JPECA0${index}-DUR-24`;
                else if (duration <= 36) qA214 = `JPECA0${index}-DUR-36`;
                else if (duration <= 48) qA214 = `JPECA0${index}-DUR-48`;
                else if (duration <= 60) qA214 = `JPECA0${index}-DUR-60`;
                else qA214 = `JPECA0${index}-DUR-61`;
            }

            let work = JOB_TITLES.find((job, index) => {
                return job.value == value.qA104;
            });
            if (work) {
                value.qA104 = work.JobTitle;
            }
            body.push({ "ProfileEmail": email, "Text": value.qA104, "AnswerCode" : value.qA104 ? `JPECA0${index}-TLE` : "", "QuestionCode" : (index != 0 ? `104-${index}` : "104") });
            if (work) {
                qA106 = `JPECA0${index}-NOCC-${work.NOCCode}`;
                await QAService.getNocGroup(work.NOCCode)
                    .then(res => {
                        if (res.data.nocGroup == "00")
                            qA107 = `JPECA0${index}-NOCG-0`;
                        else
                            qA107 = `JPECA0${index}-NOCG-${res.data.nocGroup}`;
                        qA108 = `JPECA0${index}-NMAG-${res.data.nocMajorGroup}`;
                        qA109 = `JPECA0${index}-NMIG-${res.data.nocMinorGroup}`;

                        if ((res.data.nocGroup == "00" || res.data.nocGroup == "0" || res.data.nocGroup == "A" || res.data.nocGroup == "B") && value.qA110 == `JPECA0${index}-FT1`) {
                            let duration = 0;
                            if (parseInt(value.qA111_2) >= parseInt(new Date().getFullYear()) - 10)
                                duration = this.monthDiff(value.qA111_2, value.qA111_1, value.qA112_2, value.qA112_1);
                            else
                                duration = this.monthDiff(new Date().getFullYear() - 10, 1, value.qA112_2, value.qA112_1);
                            if (duration < 0) duration = 0;
                            qA221 += duration;
                        }
                    });
            }

            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA106, "QuestionCode" : (index != 0 ? `106-${index}` : "106") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA107, "QuestionCode" : (index != 0 ? `107-${index}` : "107") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA108, "QuestionCode" : (index != 0 ? `108-${index}` : "108") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA109, "QuestionCode" : (index != 0 ? `109-${index}` : "109") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA214, "QuestionCode" : (index != 0 ? `214-${index}` : "214") });

            qA114 += duration;
            switch (value.qA105.slice(-2)) {
                case "AB": qA115 += duration; break;
                case "BC": qA116 += duration; break;
                case "MB": qA210 += duration; break;
                case "NB": qA117 += duration; break;
                case "NL": qA118 += duration; break;
                case "NT": qA119 += duration; break;
                case "NS": qA120 += duration; break;
                case "NU": qA121 += duration; break;
                case "ON": qA122 += duration; break;
                case "PE": qA123 += duration; break;
                case "QC": qA124 += duration; break;
                case "SK": qA125 += duration; break;
                case "YT": qA126 += duration; break;
            }
        }));
        
        for (let i = qA104_113.length; i < 10; i ++) {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `104-${i}` : "104") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `105-${i}` : "105") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `110-${i}` : "110") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `111-${i}` : "111") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `112-${i}` : "112") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `113-${i}` : "113") });
            
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `106-${i}` : "106") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `107-${i}` : "107") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `108-${i}` : "108") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `109-${i}` : "109") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `214-${i}` : "214") });
        }

        if (qA90 == "JOCPL1" && (qA96 == "00" || qA96 == "0" || qA96 == "A" || qA96 == "B") && qA99 == "JOCFT1") {
            let duration = this.monthDiff(qA100_2, qA100_1, new Date().getFullYear(), new Date().getMonth() + 1);
            if (duration < 0) duration = 0;
            if (duration > 10 * 12) duration = 10 * 12;
            qA221 += duration;
            console.log(duration);
        }

        let qA221_ = '';
        if (qA221 < 1 * 12) qA221_ = "JOCNOCGP-0";
        else if (qA221 < 2 * 12) qA221_ = "JOCNOCGP-1";
        else if (qA221 < 3 * 12) qA221_ = "JOCNOCGP-2";
        else if (qA221 < 4 * 12) qA221_ = "JOCNOCGP-3";
        else if (qA221 < 5 * 12) qA221_ = "JOCNOCGP-4";
        else qA221_ = "JOCNOCGP-5";
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA221_, "QuestionCode" : "221" });

        let qA114_ = '', qA115_ = '', qA116_ = '', qA210_ = '', qA117_ = '', qA118_ = '', qA119_ = '', qA120_ = '', qA121_ = '', qA122_ = '', qA123_ = '', qA124_ = '', qA125_ = '', qA126_ = '';
        {
            if (qA114 < 1 * 12) qA114_ = "CAEX00";
            else if (qA114 < 2 * 12) qA114_ = "CAEX01";
            else if (qA114 < 3 * 12) qA114_ = "CAEX02";
            else if (qA114 < 4 * 12) qA114_ = "CAEX03";
            else if (qA114 < 5 * 12) qA114_ = "CAEX04";
            else qA114_ = "CAEX05";
            if (qA115 < 1 * 12) qA115_ = "CAEXAB0";
            else if (qA115 < 2 * 12) qA115_ = "CAEXAB1";
            else if (qA115 < 3 * 12) qA115_ = "CAEXAB2";
            else if (qA115 < 4 * 12) qA115_ = "CAEXAB3";
            else if (qA115 < 5 * 12) qA115_ = "CAEXAB4";
            else qA115_ = "CAEXAB5";
            if (qA116 < 1 * 12) qA116_ = "CAEXBC0";
            else if (qA116 < 2 * 12) qA116_ = "CAEXBC1";
            else if (qA116 < 3 * 12) qA116_ = "CAEXBC2";
            else if (qA116 < 4 * 12) qA116_ = "CAEXBC3";
            else if (qA116 < 5 * 12) qA116_ = "CAEXBC4";
            else qA116_ = "CAEXBC5";
            if (qA210 < 1 * 12) qA210_ = "CAEXMB0";
            else if (qA210 < 2 * 12) qA210_ = "CAEXMB1";
            else if (qA210 < 3 * 12) qA210_ = "CAEXMB2";
            else if (qA210 < 4 * 12) qA210_ = "CAEXMB3";
            else if (qA210 < 5 * 12) qA210_ = "CAEXMB4";
            else qA210_ = "CAEXMB5";
            if (qA117 < 1 * 12) qA117_ = "CAEXNB0";
            else if (qA117 < 2 * 12) qA117_ = "CAEXNB1";
            else if (qA117 < 3 * 12) qA117_ = "CAEXNB2";
            else if (qA117 < 4 * 12) qA117_ = "CAEXNB3";
            else if (qA117 < 5 * 12) qA117_ = "CAEXNB4";
            else qA117_ = "CAEXNB5";
            if (qA118 < 1 * 12) qA118_ = "CAEXNL0";
            else if (qA118 < 2 * 12) qA118_ = "CAEXNL1";
            else if (qA118 < 3 * 12) qA118_ = "CAEXNL2";
            else if (qA118 < 4 * 12) qA118_ = "CAEXNL3";
            else if (qA118 < 5 * 12) qA118_ = "CAEXNL4";
            else qA118_ = "CAEXNL5";
            if (qA119 < 1 * 12) qA119_ = "CAEXNT0";
            else if (qA119 < 2 * 12) qA119_ = "CAEXNT1";
            else if (qA119 < 3 * 12) qA119_ = "CAEXNT2";
            else if (qA119 < 4 * 12) qA119_ = "CAEXNT3";
            else if (qA119 < 5 * 12) qA119_ = "CAEXNT4";
            else qA119_ = "CAEXNT5";
            if (qA120 < 1 * 12) qA120_ = "CAEXNS0";
            else if (qA120 < 2 * 12) qA120_ = "CAEXNS1";
            else if (qA120 < 3 * 12) qA120_ = "CAEXNS2";
            else if (qA120 < 4 * 12) qA120_ = "CAEXNS3";
            else if (qA120 < 5 * 12) qA120_ = "CAEXNS4";
            else qA120_ = "CAEXNS5";
            if (qA121 < 1 * 12) qA121_ = "CAEXNU0";
            else if (qA121 < 2 * 12) qA121_ = "CAEXNU1";
            else if (qA121 < 3 * 12) qA121_ = "CAEXNU2";
            else if (qA121 < 4 * 12) qA121_ = "CAEXNU3";
            else if (qA121 < 5 * 12) qA121_ = "CAEXNU4";
            else qA121_ = "CAEXNU5";
            if (qA122 < 1 * 12) qA122_ = "CAEXON0";
            else if (qA122 < 2 * 12) qA122_ = "CAEXON1";
            else if (qA122 < 3 * 12) qA122_ = "CAEXON2";
            else if (qA122 < 4 * 12) qA122_ = "CAEXON3";
            else if (qA122 < 5 * 12) qA122_ = "CAEXON4";
            else qA122_ = "CAEXON5";
            if (qA123 < 1 * 12) qA123_ = "CAEXPE0";
            else if (qA123 < 2 * 12) qA123_ = "CAEXPE1";
            else if (qA123 < 3 * 12) qA123_ = "CAEXPE2";
            else if (qA123 < 4 * 12) qA123_ = "CAEXPE3";
            else if (qA123 < 5 * 12) qA123_ = "CAEXPE4";
            else qA123_ = "CAEXPE5";
            if (qA124 < 1 * 12) qA124_ = "CAEXQC0";
            else if (qA124 < 2 * 12) qA124_ = "CAEXQC1";
            else if (qA124 < 3 * 12) qA124_ = "CAEXQC2";
            else if (qA124 < 4 * 12) qA124_ = "CAEXQC3";
            else if (qA124 < 5 * 12) qA124_ = "CAEXQC4";
            else qA124_ = "CAEXQC5";
            if (qA125 < 1 * 12) qA125_ = "CAEXSK0";
            else if (qA125 < 2 * 12) qA125_ = "CAEXSK1";
            else if (qA125 < 3 * 12) qA125_ = "CAEXSK2";
            else if (qA125 < 4 * 12) qA125_ = "CAEXSK3";
            else if (qA125 < 5 * 12) qA125_ = "CAEXSK4";
            else qA125_ = "CAEXSK5";
            if (qA126 < 1 * 12) qA126_ = "CAEXYT0";
            else if (qA126 < 2 * 12) qA126_ = "CAEXYT1";
            else if (qA126 < 3 * 12) qA126_ = "CAEXYT2";
            else if (qA126 < 4 * 12) qA126_ = "CAEXYT3";
            else if (qA126 < 5 * 12) qA126_ = "CAEXYT4";
            else qA126_ = "CAEXYT5";
        }
        
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA114_}`, "QuestionCode" : "114" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA115_}`, "QuestionCode" : "115" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA116_}`, "QuestionCode" : "116" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA210_}`, "QuestionCode" : "210" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA117_}`, "QuestionCode" : "117" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA118_}`, "QuestionCode" : "118" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA119_}`, "QuestionCode" : "119" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA120_}`, "QuestionCode" : "120" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA121_}`, "QuestionCode" : "121" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA122_}`, "QuestionCode" : "122" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA123_}`, "QuestionCode" : "123" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA124_}`, "QuestionCode" : "124" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA125_}`, "QuestionCode" : "125" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA126_}`, "QuestionCode" : "126" });

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
            state: { nextUrl: '/question_work5', prevUrl: '/question_work4', direction: 'next' }
        });
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_work4', prevUrl: '/question_work3', direction: 'back' }
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
        qA103: getQASingle(state, "103"),
        qA104_113: getQAGroup(state, "104_113")
    };
};

const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionWork4));
