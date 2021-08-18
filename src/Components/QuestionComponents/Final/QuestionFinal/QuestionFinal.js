import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer, resetAnswers } from "../../../../Redux/Actions/actions";
import { getStore, getQAEmail, getQASingle } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import CustomRadio from "../../../BasicComponent/RadioButton/radioButton";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { TextFields } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, SlideArea} from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";

class QuestionFinal extends Component {
    constructor(props) {
        super(props)

        this.myRef = React.createRef()   // Create a ref object 

        this.state = {
            show: false,
            qA201: props.qA201,
            qA202: props.qA202,
            qA203: props.qA203,
            qA204: props.qA204,
            qA205: props.qA205,
            qA206: props.qA206,
            qA207: props.qA207,
            qA208: props.qA208,
            qA209: props.qA209
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
        let { qA201, qA202, qA203, qA204, qA205, qA206, qA207, qA208, qA209 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Have any of your Canadian immigration applications been refused?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons 
                                    className={"btn-bg" + (qA201 == "IMMRE1" ? " active" : "")}
                                    onClick={() => this.updateProperty("201", "IMMRE1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons 
                                    className={"btn-bg" + (qA201 == "IMMRE0" ? " active" : "")}
                                    onClick={() => this.updateProperty("201", "IMMRE0")}>No</SelectButtons>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <SlideArea show={show}>
                    <Cards>
                        <CardHeader>
                            Have you ever been charged or convicted of any crimes? 
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA202 == "PRFCC1" ? " active" : "")}
                                        onClick={() => this.updateProperty("202", "PRFCC1")}>Yes</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA202 == "PRFCC0" ? " active" : "")}
                                        onClick={() => this.updateProperty("202", "PRFCC0")}>No</SelectButtons>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                    <Cards>
                        <CardHeader>
                            What is your household's networth? 
                        </CardHeader>
                        <CardBody>
                            <CustomRadio checked={qA203 == "PRFNW0" ? "true" : "false"} qId="203" onChange={this.updateProperty} name="qA203" value="PRFNW0">$1,000 USD to $10,000 USD</CustomRadio>
                            <CustomRadio checked={qA203 == "PRFNW1" ? "true" : "false"} qId="203" onChange={this.updateProperty} name="qA203" value="PRFNW1">$10,000 USD TO $25,000 USD</CustomRadio>
                            <CustomRadio checked={qA203 == "PRFNW2" ? "true" : "false"} qId="203" onChange={this.updateProperty} name="qA203" value="PRFNW2">$25,000 USD to $100,000 USD</CustomRadio>
                            <CustomRadio checked={qA203 == "PRFNW3" ? "true" : "false"} qId="203" onChange={this.updateProperty} name="qA203" value="PRFNW3">$100,000 USD to $500,000 USD</CustomRadio>
                            <CustomRadio checked={qA203 == "PRFNW4" ? "true" : "false"} qId="203" onChange={this.updateProperty} name="qA203" value="PRFNW4">$500,000 USD to $1,500,000 USD</CustomRadio>
                            <CustomRadio checked={qA203 == "PRFNW5" ? "true" : "false"} qId="203" onChange={this.updateProperty} name="qA203" value="PRFNW5">$1,500,000 USD +</CustomRadio>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                    <Cards>
                        <CardHeader>
                            Why are you considering coming to Canada?
                        </CardHeader>
                        <CardBody>
                            <TextFields type="text" qId="204" onChange={this.updateProperty} value={qA204} placeholder="Type here..." />
                        </CardBody>
                        <CardHeader>
                            Do you prefer living in a rural area or a city?
                        </CardHeader>
                        <CardBody>
                            <Row lg={3} xs={2}>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA205 == "PRFPR0" ? " active" : "")}
                                        onClick={() => this.updateProperty("205", "PRFPR0")}>Rural</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA205 == "PRFPR1" ? " active" : "")}
                                        onClick={() => this.updateProperty("205", "PRFPR1")}>City</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA205 == "PRFPR2" ? " active" : "")}
                                        onClick={() => this.updateProperty("205", "PRFPR2")}>No preference</SelectButtons>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardHeader>
                            Which province do you prefer to settle in?
                        </CardHeader>
                        <CardBody>
                            <CustomSelect options={[
                                    { name: "Alberta",                      value: "PRFP-AB"},
                                    { name: "British Columbia",             value: "PRFP-BC"},
                                    { name: "Manitoba",                     value: "PRFP-MB"},
                                    { name: "New Brunswick",                value: "PRFP-NB"},
                                    { name: "Newfoundland and Labrador",    value: "PRFP-NL"},
                                    { name: "Northwest Terriories",         value: "PRFP-NT"},
                                    { name: "Nova Scotia",                  value: "PRFP-NS"},
                                    { name: "Nunavut",                      value: "PRFP-NU"},
                                    { name: "Ontario",                      value: "PRFP-ON"},
                                    { name: "Prince Edward Island",         value: "PRFP-PE"},
                                    { name: "Quebec",                       value: "PRFP-QC" },
                                    { name: "Saskatchewan",                 value: "PRFP-SK" },
                                    { name: "Yukon",                        value: "PRFP-YT" },
                                    { name: "No preference",                value: "PRFP-NO" },
                                ]} 
                                qId="206"
                                onChange={this.updateProperty}
                                value={qA206}
                                placeholder="Select" />
                        </CardBody>
                        <CardHeader>
                            When are you considering immigrating to Canada?
                        </CardHeader>
                        <CardBody>
                            <CustomRadio checked={qA207 == "PRFIH0" ? "true" : "false"} qId="207" onChange={this.updateProperty} name="qA207" value="PRFIH0">1 to 6 months</CustomRadio>
                            <CustomRadio checked={qA207 == "PRFIH1" ? "true" : "false"} qId="207" onChange={this.updateProperty} name="qA207" value="PRFIH1">6 months to 12 months</CustomRadio>
                            <CustomRadio checked={qA207 == "PRFIH2" ? "true" : "false"} qId="207" onChange={this.updateProperty} name="qA207" value="PRFIH2">12 months to 24 months</CustomRadio>
                            <CustomRadio checked={qA207 == "PRFIH3" ? "true" : "false"} qId="207" onChange={this.updateProperty} name="qA207" value="PRFIH3">24 months to 36 months</CustomRadio>
                            <CustomRadio checked={qA207 == "PRFIH4" ? "true" : "false"} qId="207" onChange={this.updateProperty} name="qA207" value="PRFIH4">36+ months from today</CustomRadio>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                    <Cards>
                        <CardHeader>
                            Are you considering hiring a professional firm to assist with the process?
                        </CardHeader>
                        <CardBody>
                            <CustomRadio checked={qA208 == "PRFHP0" ? "true" : "false"} qId="208" onChange={this.updateProperty} name="qA208" value="PRFHP0">No, I want to do this process on my own.</CustomRadio>
                            <CustomRadio checked={qA208 == "PRFHP1" ? "true" : "false"} qId="208" onChange={this.updateProperty} name="qA208" value="PRFHP1">Yes, I am looking to hire someone.</CustomRadio>
                            <CustomRadio checked={qA208 == "PRFHP2" ? "true" : "false"} qId="208" onChange={this.updateProperty} name="qA208" value="PRFHP2">Yes, I have hired a representative.</CustomRadio>
                        </CardBody>
                        <CardHeader>
                            Would you like to schedule an appointment with a licensed immigration expert to discuss your results?
                        </CardHeader>
                        <CardBody>                            
                            <Row>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA209 == "PRFSA1" ? " active" : "")}
                                        onClick={() => this.updateProperty("209", "PRFSA1")}>Yes</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons
                                        className={"btn-bg" + (qA209 == "PRFSA0" ? " active" : "")}
                                        onClick={() => this.updateProperty("209", "PRFSA0")}>No</SelectButtons>
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
        let { qA201, qA202, qA203, qA204, qA205, qA206, qA207, qA208, qA209 } = this.state;

        if (!qA201 || !qA202 || !qA203 || !qA204 || !qA205 || !qA206 || !qA207 || !qA208 || !qA209)
            return false;

        return true;
    }

    updateProperty = (qId, value) => {
        this.setState({
            [`qA${qId}`]: value
        });
    }

    saveResponse = () => {
        let { store } = this.props;
        const { qA201, qA202, qA203, qA204, qA205, qA206, qA207, qA208, qA209 } = this.state;
        let email = getQAEmail(store);
        let body = [];

        // update redux
        this.props.updateAnswer({
            Q201: qA201, Q202: qA202, Q203: qA203, Q204: qA204, Q205: qA205, Q206: qA206, Q207: qA207, Q208: qA208, Q209: qA209
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA201, "QuestionCode" : "201" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA202, "QuestionCode" : "202" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA203, "QuestionCode" : "203" });
        body.push({ "ProfileEmail": email, "Text": qA204, "AnswerCode" : qA204 ? "PRFWCC" : "", "QuestionCode" : "204" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA205, "QuestionCode" : "205" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA206, "QuestionCode" : "206" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA207, "QuestionCode" : "207" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA208, "QuestionCode" : "208" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA209, "QuestionCode" : "209" });

        let qA197 = 0, qA198 = 0, qA199 = 0, qA200 = 0;
        if (this.props.qA137 == "LANEF0" || (this.props.qA137 == "LANEF2" && this.props.qA138 == "LANEFX0")) {
            // primary language is english
            let tmp;

            // CELPIP
            tmp = this.props.qA141 ? parseInt(this.props.qA141.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA197 += tmp;
            tmp = this.props.qA142 ? parseInt(this.props.qA142.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA197 += tmp;
            tmp = this.props.qA143 ? parseInt(this.props.qA143.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA197 += tmp;
            tmp = this.props.qA144 ? parseInt(this.props.qA144.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA197 += tmp;

            // IELTS
            tmp = this.props.qA145 ? parseInt(this.props.qA145.slice(-2) / 2) : 0;
            qA197 += tmp;
            tmp = this.props.qA146 ? parseInt(this.props.qA146.slice(-2) / 2) : 0;
            qA197 += tmp;
            tmp = this.props.qA147 ? parseInt(this.props.qA147.slice(-2) / 2) : 0;
            qA197 += tmp;
            tmp = this.props.qA148 ? parseInt(this.props.qA148.slice(-2) / 2) : 0;
            qA197 += tmp;

            // No exam
            tmp = this.props.qA149 ? parseInt(this.props.qA149.slice(-2)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA150 ? parseInt(this.props.qA150.slice(-2)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA151 ? parseInt(this.props.qA151.slice(-2)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA152 ? parseInt(this.props.qA152.slice(-2)) + 1 : 0;
            qA197 += tmp;

            // secondary language is french

            // TEF
            tmp = this.props.qA156 ? parseInt(this.props.qA156.slice(-2)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA157 ? parseInt(this.props.qA157.slice(-2)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA158 ? parseInt(this.props.qA158.slice(-2)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA159 ? parseInt(this.props.qA159.slice(-2)) + 1 : 0;
            qA198 += tmp;

            // TCF
            tmp = this.props.qA160 ? parseInt(this.props.qA160.slice(-2)) : 0;
            qA198 += tmp;
            tmp = this.props.qA161 ? parseInt(this.props.qA161.slice(-2)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA162 ? parseInt(this.props.qA162.slice(-2)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA163 ? parseInt(this.props.qA163.slice(-2)) + 1 : 0;
            qA198 += tmp;

            // No exam
            tmp = this.props.qA164 ? parseInt(this.props.qA164.slice(-1)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA165 ? parseInt(this.props.qA165.slice(-1)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA166 ? parseInt(this.props.qA166.slice(-1)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA167 ? parseInt(this.props.qA167.slice(-1)) + 1 : 0;
            qA198 += tmp;
        }

        if (this.props.qA137 == "LANEF1" || (this.props.qA137 == "LANEF2" && this.props.qA138 == "LANEFX1")) {
            // primary language is french
            let tmp;

            // TEF
            tmp = this.props.qA170 ? parseInt(this.props.qA170.slice(-1)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA171 ? parseInt(this.props.qA171.slice(-1)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA172 ? parseInt(this.props.qA172.slice(-1)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA173 ? parseInt(this.props.qA173.slice(-1)) + 1 : 0;
            qA197 += tmp;
            
            // TCF
            tmp = this.props.qA174 ? parseInt(this.props.qA174.slice(-2)) : 0;
            qA197 += tmp;
            tmp = this.props.qA175 ? parseInt(this.props.qA175.slice(-2)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA176 ? parseInt(this.props.qA176.slice(-2)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA177 ? parseInt(this.props.qA177.slice(-2)) + 1 : 0;
            qA197 += tmp;
            
            // no exam
            tmp = this.props.qA178 ? parseInt(this.props.qA178.slice(-1)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA179 ? parseInt(this.props.qA179.slice(-1)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA180 ? parseInt(this.props.qA180.slice(-1)) + 1 : 0;
            qA197 += tmp;
            tmp = this.props.qA181 ? parseInt(this.props.qA181.slice(-1)) + 1 : 0;
            qA197 += tmp;

            // secondary language is english

            // CELPIP
            tmp = this.props.qA185 ? parseInt(this.props.qA185.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA198 += tmp;
            tmp = this.props.qA186 ? parseInt(this.props.qA186.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA198 += tmp;
            tmp = this.props.qA187 ? parseInt(this.props.qA187.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA198 += tmp;
            tmp = this.props.qA188 ? parseInt(this.props.qA188.slice(-2)) - 1 : 0;
            if (tmp < 0) tmp = 0;
            qA198 += tmp;

            // IELTS
            tmp = this.props.qA189 ? parseInt(this.props.qA189.slice(-2) / 2) : 0;
            qA198 += tmp;
            tmp = this.props.qA190 ? parseInt(this.props.qA190.slice(-2) / 2) : 0;
            qA198 += tmp;
            tmp = this.props.qA191 ? parseInt(this.props.qA191.slice(-2) / 2) : 0;
            qA198 += tmp;
            tmp = this.props.qA192 ? parseInt(this.props.qA192.slice(-2) / 2) : 0;
            qA198 += tmp;

            // no exam
            tmp = this.props.qA193 ? parseInt(this.props.qA193.slice(-1)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA194 ? parseInt(this.props.qA194.slice(-1)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA195 ? parseInt(this.props.qA195.slice(-1)) + 1 : 0;
            qA198 += tmp;
            tmp = this.props.qA196 ? parseInt(this.props.qA196.slice(-1)) + 1 : 0;
            qA198 += tmp;
        }

        let qA197_ = '', qA198_ = '', qA199_ = '', qA200_ = '';
        {
            if (qA197 <= 4) qA197_ = "CLBPTOT04";
            else if (qA197 <= 6) qA197_ = "CLBPTOT06";
            else if (qA197 <= 8) qA197_ = "CLBPTOT08";
            else if (qA197 <= 10) qA197_ = "CLBPTOT10";
            else if (qA197 <= 12) qA197_ = "CLBPTOT12";
            else if (qA197 <= 14) qA197_ = "CLBPTOT14";
            else if (qA197 <= 16) qA197_ = "CLBPTOT16";
            else if (qA197 <= 18) qA197_ = "CLBPTOT18";
            else if (qA197 <= 20) qA197_ = "CLBPTOT20";
            else if (qA197 <= 22) qA197_ = "CLBPTOT22";
            else if (qA197 <= 24) qA197_ = "CLBPTOT24";
            else if (qA197 <= 26) qA197_ = "CLBPTOT26";
            else if (qA197 <= 28) qA197_ = "CLBPTOT28";
            else if (qA197 <= 30) qA197_ = "CLBPTOT30";
            else if (qA197 <= 32) qA197_ = "CLBPTOT32";
            else if (qA197 <= 34) qA197_ = "CLBPTOT34";
            else if (qA197 <= 36) qA197_ = "CLBPTOT36";
            else if (qA197 <= 38) qA197_ = "CLBPTOT38";
            else qA197_ = "CLBPTOT40";
            if (qA198 <= 4) qA198_ = "CLBSTOT04";
            else if (qA198 <= 6) qA198_ = "CLBSTOT06";
            else if (qA198 <= 8) qA198_ = "CLBSTOT08";
            else if (qA198 <= 10) qA198_ = "CLBSTOT10";
            else if (qA198 <= 12) qA198_ = "CLBSTOT12";
            else if (qA198 <= 14) qA198_ = "CLBSTOT14";
            else if (qA198 <= 16) qA198_ = "CLBSTOT16";
            else if (qA198 <= 18) qA198_ = "CLBSTOT18";
            else if (qA198 <= 20) qA198_ = "CLBSTOT20";
            else if (qA198 <= 22) qA198_ = "CLBSTOT22";
            else if (qA198 <= 24) qA198_ = "CLBSTOT24";
            else if (qA198 <= 26) qA198_ = "CLBSTOT26";
            else if (qA198 <= 28) qA198_ = "CLBSTOT28";
            else if (qA198 <= 30) qA198_ = "CLBSTOT30";
            else if (qA198 <= 32) qA198_ = "CLBSTOT32";
            else if (qA198 <= 34) qA198_ = "CLBSTOT34";
            else if (qA198 <= 36) qA198_ = "CLBSTOT36";
            else if (qA198 <= 38) qA198_ = "CLBSTOT38";
            else qA198_ = "CLBSTOT40";

            qA199_ = parseInt(qA197_.slice(-2)) / 4;
            qA199_ = Number.isInteger(qA199_) ? "CLBPAVG" + qA199_ : "CLBPAVG" + qA199_.toFixed(1);
            qA200_ = parseInt(qA198_.slice(-2)) / 4;
            qA200_ = Number.isInteger(qA200_) ? "CLBSAVG" + qA200_ : "CLBSAVG" + qA200_.toFixed(1);
        }
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA197_, "QuestionCode" : "197" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA198_, "QuestionCode" : "198" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA199_, "QuestionCode" : "199" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA200_, "QuestionCode" : "200" });

        let qA233 = '';
        if (this.props.qA137 == "LANEF0" || (this.props.qA137 == "LANEF2" && this.props.qA138 == "LANEFX0")) {
            // primary language is english
            if (qA198 >= 28) {
                if (qA197 <= 18) {
                    qA233 = "ADDQ00";
                }
                else {
                    qA233 = "ADDQ01";
                }
            }
            else {
                if (qA197 <= 18) {
                    qA233 = "ADDQ02";
                }
                else {
                    qA233 = "ADDQ03";
                }
            }
        }
        else {
            if (qA197 >= 28) {
                if (qA198 <= 18) {
                    qA233 = "ADDQ00";
                }
                else {
                    qA233 = "ADDQ01";
                }
            }
            else {
                if (qA198 <= 18) {
                    qA233 = "ADDQ02";
                }
                else {
                    qA233 = "ADDQ03";
                }
            }
        }
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA233, "QuestionCode" : "233" });

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

    onClickNextPage = async () => {
        this.saveResponse();

        this.setState({
            show: false
        });
        
        let pathname= '/question_recommendation';
        if (this.props.isSpouse == false && this.props.qA217 == "CALWCA0") {
            let orgEmail = getQAEmail(this.props.store);
            await this.props.resetAnswers();
            this.props.updateAnswer({
                isSpouse: true,
                orgEmail: orgEmail
            });
            pathname = '/';
        }

        setTimeout(() => {
            this.props.history.push({
                pathname: pathname,
                state: { direction: 'next' }
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
                state: { nextUrl: '/question_final', prevUrl: '/question_language3', direction: 'back' }
            });
        }, 1200);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    let obj = {
        store : getStore(state),
        isSpouse: state.qAnswers.isSpouse ? state.qAnswers.isSpouse : false,
        qA217: getQASingle(state, "217"),
        qA201: getQASingle(state, "201"),
        qA202: getQASingle(state, "202"),
        qA203: getQASingle(state, "203"),
        qA204: getQASingle(state, "204"),
        qA205: getQASingle(state, "205"),
        qA206: getQASingle(state, "206"),
        qA207: getQASingle(state, "207"),
        qA208: getQASingle(state, "208"),
        qA209: getQASingle(state, "209")
    }

    // for language score
    for (let i = 137; i <= 196; i ++)
        obj[`qA${i}`] = getQASingle(state, `${i}`);

    return { ...obj };
};

const mapDispatchToProps = { updateAnswer, resetAnswers };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionFinal));
