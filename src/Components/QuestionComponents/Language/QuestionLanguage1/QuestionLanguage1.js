import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getStore, getQAEmail, getQASingle } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import CustomRadio from "../../../BasicComponent/RadioButton/radioButton";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { LabelDark } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SlideArea, SmoothSwitch} from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";

class QuestionLanguage1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            qA137: props.qA137, qA138: props.qA138, qA139: props.qA139,
            qA140: props.qA140, qA141: props.qA141, qA142: props.qA142, qA143: props.qA143, qA144: props.qA144, qA145: props.qA145, qA146: props.qA146, qA147: props.qA147, qA148: props.qA148, qA149: props.qA149,
            qA150: props.qA150, qA151: props.qA151, qA152: props.qA152,
            qA168: props.qA168, qA169: props.qA169,
            qA170: props.qA170, qA171: props.qA171, qA172: props.qA172, qA173: props.qA173, qA174: props.qA174, qA175: props.qA175, qA176: props.qA176, qA177: props.qA177, qA178: props.qA178, qA179: props.qA179, 
            qA180: props.qA180, qA181: props.qA181
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
        const { qA137, qA138, qA139, qA140, qA141, qA142, qA143, qA144, qA145, qA146, qA147, qA148, qA149, qA150, qA151, qA152,
                qA168, qA169, qA170, qA171, qA172, qA173, qA174, qA175, qA176, qA177, qA178, qA179, qA180, qA181 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        What is your first language (English, French, or Other)?
                    </CardHeader>
                    <CardBody>
                        <Row lg={3} xs={2} sm={2}>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA137 == "LANEF0" ? " active" : "")}
                                    onClick={() => this.updateProperty("137", "LANEF0")}>English</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA137 == "LANEF1" ? " active" : "")}
                                    onClick={() => this.updateProperty("137", "LANEF1")}>French</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA137 == "LANEF2" ? " active" : "")}
                                    onClick={() => this.updateProperty("137", "LANEF2")}>Other</SelectButtons>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <SlideArea show={show}>
                    {qA137 == "LANEF2" && (
                        <React.Fragment>
                            <Cards>
                                <CardHeader>
                                    Which of the two national languages are you more comfortable communicating in? (English or French)
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA138 == "LANEFX0" ? " active" : "")}
                                                onClick={() => this.updateProperty("138", "LANEFX0")}>English</SelectButtons>
                                        </Col>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA138 == "LANEFX1" ? " active" : "")}
                                                onClick={() => this.updateProperty("138", "LANEFX1")}>French</SelectButtons>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter></CardFooter>
                            </Cards>
                        </React.Fragment>
                    )}
                    {(qA137 == "LANEF0" || (qA137 == "LANEF2" && qA138 == "LANEFX0")) && (
                        <React.Fragment>
                            <Cards>
                                <CardHeader>
                                    Have you completed your English language exams?
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA139 == "LEPTE1" ? " active" : "")}
                                                onClick={() => this.updateProperty("139", "LEPTE1")}>Yes</SelectButtons>
                                        </Col>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA139 == "LEPTE0" ? " active" : "")}
                                                onClick={() => this.updateProperty("139", "LEPTE0")}>No</SelectButtons>
                                        </Col>
                                    </Row>
                                    <MoreOptions>
                                        <SmoothSwitch identifier={qA139 == "LEPTE1" ? "case1" : "case2"}>
                                        {qA139 == "LEPTE1" && (
                                            <React.Fragment>
                                                <FormGroup>
                                                    <LabelDark>
                                                        Which English exam did you take?
                                                    </LabelDark>
                                                    <Row>
                                                        <Col>
                                                            <SelectButtons
                                                                className={qA140 == "LEPTT0" ? " active" : ""}
                                                                onClick={() => this.updateProperty("140", "LEPTT0")}>IELTS</SelectButtons>
                                                        </Col>
                                                        <Col>
                                                            <SelectButtons
                                                                className={qA140 == "LEPTT1" ? " active" : ""}
                                                                onClick={() => this.updateProperty("140", "LEPTT1")}>CELPIP</SelectButtons>
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <SmoothSwitch identifier={qA140 == "LEPTT1" ? "case1" : "case2"}>
                                                {qA140 == "LEPTT1" && (
                                                    <React.Fragment>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                CELPIP: Insert your score for speaking:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS00" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS00">M</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS01" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS01">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS02" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS03" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS03">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS04" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS04">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS05" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS05">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS06" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS06">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS07" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS07">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS08" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS08">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS09" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS09">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS10" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS10">9</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS11" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS11">10</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS12" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS12">11</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA141 == "LEPCS13" ? "true" : "false"} qId="141" onChange={this.updateProperty} name="qA141" value="LEPCS13">12</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                CELPIP: Insert your score for listening:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL00" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL00">M</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL01" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL01">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL02" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL03" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL03">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL04" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL04">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL05" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL05">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL06" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL06">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL07" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL07">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL08" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL08">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL09" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL09">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL10" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL10">9</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL11" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL11">10</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL12" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL12">11</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA142 == "LEPCL13" ? "true" : "false"} qId="142" onChange={this.updateProperty} name="qA142" value="LEPCL13">12</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                CELPIP: Insert your score for reading:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR00" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR00">M</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR01" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR01">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR02" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR03" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR03">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR04" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR04">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR05" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR05">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR06" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR06">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR07" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR07">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR08" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR08">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR09" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR09">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR10" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR10">9</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR11" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR11">10</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR12" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR12">11</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA143 == "LEPCR13" ? "true" : "false"} qId="143" onChange={this.updateProperty} name="qA143" value="LEPCR13">12</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                CELPIP: Insert your score for writing:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW00" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW00">M</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW01" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW01">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW02" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW03" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW03">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW04" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW04">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW05" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW05">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW06" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW06">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW07" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW07">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW08" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW08">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW09" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW09">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW10" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW10">9</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW11" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW11">10</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW12" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW12">11</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA144 == "LEPCW13" ? "true" : "false"} qId="144" onChange={this.updateProperty} name="qA144" value="LEPCW13">12</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                    </React.Fragment>
                                                )}
                                                </SmoothSwitch>
                                                <SmoothSwitch identifier={qA140 == "LEPTT0" ? "case1" : "case2"}>
                                                {qA140 == "LEPTT0" && (
                                                    <React.Fragment>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                IELTS: Insert your score for speaking:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS00" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS00">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS01" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS01">0.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS02" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS03" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS03">1.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS04" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS04">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS05" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS05">2.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS06" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS06">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS07" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS07">3.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS08" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS08">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS09" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS09">4.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS10" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS10">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS11" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS11">5.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS12" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS12">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS13" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS13">6.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS14" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS14">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS15" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS15">7.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS16" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS16">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS17" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS17">8.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA145 == "LEPIS18" ? "true" : "false"} qId="145" onChange={this.updateProperty} name="qA145" value="LEPIS18">9</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>                                                        
                                                        <FormGroup>
                                                            <LabelDark>
                                                                IELTS: Insert your score for listening:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL00" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL00">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL01" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL01">0.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL02" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL03" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL03">1.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL04" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL04">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL05" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL05">2.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL06" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL06">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL07" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL07">3.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL08" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL08">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL09" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL09">4.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL10" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL10">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL11" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL11">5.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL12" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL12">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL13" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL13">6.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL14" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL14">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL15" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL15">7.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL16" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL16">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL17" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL17">8.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA146 == "LEPIL18" ? "true" : "false"} qId="146" onChange={this.updateProperty} name="qA146" value="LEPIL18">9</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>                                                        
                                                        <FormGroup>
                                                            <LabelDark>
                                                                IELTS: Insert your score for reading:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR00" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR00">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR01" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR01">0.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR02" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR03" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR03">1.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR04" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR04">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR05" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR05">2.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR06" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR06">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR07" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR07">3.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR08" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR08">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR09" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR09">4.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR10" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR10">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR11" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR11">5.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR12" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR12">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR13" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR13">6.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR14" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR14">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR15" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR15">7.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR16" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR16">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR17" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR17">8.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA147 == "LEPIR18" ? "true" : "false"} qId="147" onChange={this.updateProperty} name="qA147" value="LEPIR18">9</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>                                                        
                                                        <FormGroup>
                                                            <LabelDark>
                                                                IELTS: Insert your score for writing:
                                                            </LabelDark>
                                                            <Row lg={6} sm={4} xs={3}>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW00" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW00">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW01" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW01">0.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW02" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW02">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW03" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW03">1.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW04" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW04">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW05" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW05">2.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW06" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW06">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW07" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW07">3.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW08" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW08">4</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW09" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW09">4.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW10" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW10">5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW11" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW11">5.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW12" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW12">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW13" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW13">6.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW14" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW14">7</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW15" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW15">7.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW16" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW16">8</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW17" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW17">8.5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA148 == "LEPIW18" ? "true" : "false"} qId="148" onChange={this.updateProperty} name="qA148" value="LEPIW18">9</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                    </React.Fragment>
                                                )}
                                                </SmoothSwitch>
                                            </React.Fragment>
                                        )}
                                        </SmoothSwitch>
                                        
                                        <SmoothSwitch identifier={qA139 == "LEPTE0" ? "case1" : "case2"}>
                                        {qA139 == "LEPTE0" && (
                                            <React.Fragment>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of speaking?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS00" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS00">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS01" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS01">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS02" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS02">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS03" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS03">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS04" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS04">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS05" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS05">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS06" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS06">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS07" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS07">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS08" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS08">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA149 == "LAPELS09" ? "true" : "false"} qId="149" onChange={this.updateProperty} name="qA149" value="LAPELS09">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of listening?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL00" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL00">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL01" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL01">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL02" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL02">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL03" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL03">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL04" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL04">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL05" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL05">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL06" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL06">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL07" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL07">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL08" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL08">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA150 == "LAPELL09" ? "true" : "false"} qId="150" onChange={this.updateProperty} name="qA150" value="LAPELL09">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of reading?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR00" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR00">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR01" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR01">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR02" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR02">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR03" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR03">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR04" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR04">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR05" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR05">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR06" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR06">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR07" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR07">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR08" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR08">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA151 == "LAPELR09" ? "true" : "false"} qId="151" onChange={this.updateProperty} name="qA151" value="LAPELR09">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of writing?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW00" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW00">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW01" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW01">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW02" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW02">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW03" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW03">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW04" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW04">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW05" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW05">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW06" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW06">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW07" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW07">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW08" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW08">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA152 == "LAPELW09" ? "true" : "false"} qId="152" onChange={this.updateProperty} name="qA152" value="LAPELW09">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                            </React.Fragment>
                                        )}
                                        </SmoothSwitch>
                                        
                                        {qA139 != "LEPTE0" && qA139 != "LEPTE1" && (
                                            <span>More required</span>
                                        )}
                                    </MoreOptions>
                                </CardBody>
                                <CardFooter></CardFooter>
                            </Cards>
                        </React.Fragment>
                    )}
                    {(qA137 == "LANEF1" || (qA137 == "LANEF2" && qA138 == "LANEFX1")) && (
                        <React.Fragment>
                            <Cards>
                                <CardHeader>
                                    Have you completed your French language exams?
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA168 == "LFPTE1" ? " active" : "")}
                                                onClick={() => this.updateProperty("168", "LFPTE1")}>Yes</SelectButtons>
                                        </Col>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA168 == "LFPTE0" ? " active" : "")}
                                                onClick={() => this.updateProperty("168", "LFPTE0")}>No</SelectButtons>
                                        </Col>
                                    </Row>
                                    <MoreOptions>
                                        {qA168 == "LFPTE1" && (
                                            <React.Fragment>
                                                <FormGroup>
                                                    <LabelDark>
                                                        Which French exam did you take?
                                                    </LabelDark>
                                                    <Row>
                                                        <Col>
                                                            <SelectButtons
                                                                className={qA169 == "LFPTT0" ? " active" : ""}
                                                                onClick={() => this.updateProperty("169", "LFPTT0")}>TEF</SelectButtons>
                                                        </Col>
                                                        <Col>
                                                            <SelectButtons
                                                                className={qA169 == "LFPTT1" ? " active" : ""}
                                                                onClick={() => this.updateProperty("169", "LFPTT1")}>TCF</SelectButtons>
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                {qA169 == "LFPTT0" && (
                                                    <React.Fragment>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TEF: Insert your score for speaking:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES0" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES0">0 - 60</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES1" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES1">61 - 120</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES2" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES2">121 - 180</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES3" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES3">181 – 225</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES4" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES4">226 – 270</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES5" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES5">271 – 309</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES6" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES6">310 – 348</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES7" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES7">349 – 370</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES8" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES8">371 – 392</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA170 == "LFPTES9" ? "true" : "false"} qId="170" onChange={this.updateProperty} name="qA170" value="LFPTES9">393 – 450</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TEF: Insert your score for listening:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL0" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL0">0 - 50</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL1" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL1">51 - 100</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL2" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL2">101 - 144</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL3" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL3">145 – 180</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL4" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL4">181 – 216</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL5" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL5">217 – 248</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL6" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL6">249 – 279</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL7" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL7">280 – 297</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL8" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL8">298 – 315</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA171 == "LFPTEL9" ? "true" : "false"} qId="171" onChange={this.updateProperty} name="qA171" value="LFPTEL9">316 - 360</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TEF: Insert your score for reading:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER0" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER0">0 - 50</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER1" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER1">51 - 100</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER2" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER2">101 - 144</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER3" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER3">121 – 150</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER4" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER4">151 – 180</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER5" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER5">181 – 206</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER6" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER6">207 – 232</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER7" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER7">233 – 247</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER8" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER8">248 – 262</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA172 == "LFPTER9" ? "true" : "false"} qId="172" onChange={this.updateProperty} name="qA172" value="LFPTER9">263 – 300</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TEF: Insert your score for writing:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW0" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW0">0 - 60</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW1" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW1">61 - 120</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW2" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW2">121 - 180</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW3" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW3">181 – 225</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW4" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW4">226 – 270</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW5" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW5">271 – 309</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW6" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW6">310 – 348</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW7" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW7">349 – 370</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW8" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW8">371 – 392</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA173 == "LFPTEW9" ? "true" : "false"} qId="173" onChange={this.updateProperty} name="qA173" value="LFPTEW9">393 – 450</CustomRadio></Col>

                                                            </Row>
                                                        </FormGroup>
                                                    </React.Fragment>
                                                )}
                                                {qA169 == "LFPTT1" && (
                                                    <React.Fragment>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TCF: Insert your score for speaking:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS00" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS00">0</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS01" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS01">1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS02" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS02">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS03" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS03">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS04" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS04">4 - 5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS05" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS05">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS06" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS06">7 - 9</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS07" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS07">10 - 11</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS08" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS08">12 - 13</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS09" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS09">14 - 15</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA174 == "LFPTS10" ? "true" : "false"} qId="174" onChange={this.updateProperty} name="qA174" value="LFPTS10">16 - 20</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TCF: Insert your score for listening:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL00" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL00">0 - 90</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL01" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL01">91 - 170</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL02" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL02">171 - 250</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL03" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL03">251 - 330</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL04" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL04">331 – 368</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL05" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL05">369 – 397</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL06" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL06">398 – 457</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL07" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL07">458 – 502</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL08" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL08">503 – 522</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL09" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL09">523 – 548</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA175 == "LFPTL10" ? "true" : "false"} qId="175" onChange={this.updateProperty} name="qA175" value="LFPTL10">549 – 699</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TCF: Insert your score for reading:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR00" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR00">0 - 150</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR01" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR01">151 - 300</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR02" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR02">301 - 341</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR03" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR03">342 – 374</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR04" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR04">375 – 405</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR05" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR05">406 – 452</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR06" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR06">453 – 498</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR07" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR07">499 – 523</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR08" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR08">524 – 548</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA176 == "LFPTR09" ? "true" : "false"} qId="176" onChange={this.updateProperty} name="qA176" value="LFPTR09">549 – 699</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <LabelDark>
                                                                TCF: Insert your score for writing:
                                                            </LabelDark>
                                                            <Row xs={2} sm={2} lg={3}>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW00" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW00">0 - 1</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW01" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW01">2</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW02" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW02">3</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW03" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW03">4 - 5</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW04" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW04">6</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW05" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW05">7 - 9</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW06" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW06">10 - 11</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW07" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW07">12 - 13</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW08" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW08">14 - 15</CustomRadio></Col>
                                                                <Col><CustomRadio checked={qA177 == "LFPTW09" ? "true" : "false"} qId="177" onChange={this.updateProperty} name="qA177" value="LFPTW09">16 - 20</CustomRadio></Col>
                                                            </Row>
                                                        </FormGroup>
                                                    </React.Fragment>
                                                )}
                                            </React.Fragment>
                                        )}

                                        {qA168 == "LFPTE0" && (
                                            <React.Fragment>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of speaking?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS0" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS0">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS1" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS1">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS2" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS2">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS3" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS3">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS4" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS4">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS5" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS5">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS6" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS6">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS7" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS7">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS8" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS8">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA178 == "LAPFLS9" ? "true" : "false"} qId="178" onChange={this.updateProperty} name="qA178" value="LAPFLS9">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of listening?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL0" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL0">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL1" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL1">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL2" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL2">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL3" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL3">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL4" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL4">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL5" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL5">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL6" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL6">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL7" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL7">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL8" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL8">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA179 == "LAPFLL9" ? "true" : "false"} qId="179" onChange={this.updateProperty} name="qA179" value="LAPFLL9">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of reading?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR0" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR0">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR1" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR1">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR2" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR2">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR3" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR3">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR4" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR4">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR5" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR5">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR6" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR6">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR7" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR7">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR8" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR8">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA180 == "LAPFLR9" ? "true" : "false"} qId="180" onChange={this.updateProperty} name="qA180" value="LAPFLR9">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>
                                                        What is your level of writing?
                                                    </LabelDark>
                                                    <Row lg={2} xs={1}>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW0" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW0">1 – None</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW1" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW1">2 - Low Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW2" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW2">3 – Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW3" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW3">4 – High Beginner</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW4" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW4">5 - Intermediate</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW5" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW5">6 - Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW6" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW6">7 - Very Good</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW7" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW7">8 - Advanced</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW8" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW8">9- Expert</CustomRadio></Col>
                                                        <Col><CustomRadio checked={qA181 == "LAPFLW9" ? "true" : "false"} qId="181" onChange={this.updateProperty} name="qA181" value="LAPFLW9">10 - Native Speaker</CustomRadio></Col>
                                                    </Row>
                                                </FormGroup>
                                            </React.Fragment>
                                        )}
                                        
                                        {qA168 != "LFPTE0" && qA168 != "LFPTE1" && (
                                            <span>More required</span>
                                        )}
                                    </MoreOptions>
                                </CardBody>
                                <CardFooter></CardFooter>
                            </Cards>
                        </React.Fragment>
                    
                    )}
                </SlideArea>
                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={true} />
            </React.Fragment>
         );
    }
    
    canForward = () => {
        const { qA137, qA138, qA139, qA140, qA141, qA142, qA143, qA144, qA145, qA146, qA147, qA148, qA149, qA150, qA151, qA152,
                qA168, qA169, qA170, qA171, qA172, qA173, qA174, qA175, qA176, qA177, qA178, qA179, qA180, qA181 } = this.state;

        if (!qA137) {
            return false;
        }
        
        if (qA137 == "LANEF2" && !qA138)
            return false;

        if (qA137 == "LANEF0" || (qA137 == "LANEF2" && qA138 == "LANEFX0")) {
            this.state.qA168 = '';
            if (!qA139)
                return false;
            else if (qA139 == "LEPTE1") {
                this.state.qA149 = this.state.qA150 = this.state.qA151 = this.state.qA152 = '';
                this.state.qA170 = this.state.qA171 = this.state.qA172 = this.state.qA173 = '';
                this.state.qA174 = this.state.qA175 = this.state.qA176 = this.state.qA177 = '';
                this.state.qA178 = this.state.qA179 = this.state.qA180 = this.state.qA181 = '';

                if (!qA140)
                    return false;
                else if (qA140 == "LEPTT1") {
                    this.state.qA145 = this.state.qA146 = this.state.qA147 = this.state.qA148 = '';

                    if (!qA141 || !qA142 || !qA143 || !qA144)
                        return false;
                }
                else {
                    this.state.qA141 = this.state.qA142 = this.state.qA143 = this.state.qA144 = '';

                    if (!qA145 || !qA146 || !qA147 || !qA148)
                        return false;
                }
            }
            else {
                this.state.qA140 = '';
                this.state.qA141 = this.state.qA142 = this.state.qA143 = this.state.qA144 = '';
                this.state.qA145 = this.state.qA146 = this.state.qA147 = this.state.qA148 = '';

                if (!qA149 || !qA150 || !qA151 || !qA152)
                    return false;
            }
        }

        if (qA137 == "LANEF1" || (qA137 == "LANEF2" && qA138 == "LANEFX1")) {
            this.state.qA139 = '';
            if (!qA168)
                return false;
            else if (qA168 == "LFPTE1") {
                this.state.qA178 = this.state.qA179 = this.state.qA180 = this.state.qA181 = '';
                this.state.qA141 = this.state.qA142 = this.state.qA143 = this.state.qA144 = '';
                this.state.qA145 = this.state.qA146 = this.state.qA147 = this.state.qA148 = '';
                this.state.qA149 = this.state.qA150 = this.state.qA151 = this.state.qA152 = '';

                if (!qA169)
                    return false;
                else if (qA169 == "LFPTT1") {
                    this.state.qA170 = this.state.qA171 = this.state.qA172 = this.state.qA173 = '';

                    if (!qA174 || !qA175 || !qA176 || !qA177)
                        return false;
                }
                else {
                    this.state.qA174 = this.state.qA175 = this.state.qA176 = this.state.qA177 = '';

                    if (!qA170 || !qA171 || !qA172 || !qA173)
                        return false;
                }
            }
            else {
                this.state.qA169 = '';
                this.state.qA170 = this.state.qA171 = this.state.qA172 = this.state.qA173 = '';
                this.state.qA174 = this.state.qA175 = this.state.qA176 = this.state.qA177 = '';

                if (!qA178 || !qA179 || !qA180 || !qA181)
                    return false;
            }
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
        let email = getQAEmail(store);
        let body = [];
        let obj = {};
        
        for (let i = 137; i <= 152; i ++)
            obj[`Q${i}`] = this.state[`qA${i}`];
        for (let i = 168; i <= 181; i ++)
            obj[`Q${i}`] = this.state[`qA${i}`];

        // update redux
        this.props.updateAnswer(obj);

        // call SaveUserResponse api

        for (let i = 137; i <= 152; i ++)
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : this.state[`qA${i}`], "QuestionCode" : `${i}` });
        for (let i = 168; i <= 181; i ++)
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : this.state[`qA${i}`], "QuestionCode" : `${i}` });

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
        
        let pathname = '';
        let { qA137, qA138 } = this.state;

        if (qA137 == "LANEF0" || (qA137 == "LANEF2" && qA138 == "LANEFX0")) {
            pathname = '/question_language2';
        }
        if (qA137 == "LANEF1" || (qA137 == "LANEF2" && qA138 == "LANEFX1")) {
            pathname = '/question_language3';
        }

        this.setState({
            show: false
        });
        
        setTimeout(() => {
            this.props.history.push({
                pathname: '/question_advert',
                state: { nextUrl: pathname, prevUrl: '/question_language1', direction: 'next' }
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
                state: { nextUrl: '/question_language1', prevUrl: '/question_work5', direction: 'back' }
            });
        }, 1200);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    let obj = {
        store : getStore(state),
    }

    for (let i = 137; i <= 152; i ++)
        obj[`qA${i}`] = getQASingle(state, `${i}`);
    for (let i = 168; i <= 181; i ++)
        obj[`qA${i}`] = getQASingle(state, `${i}`);

    return { ...obj };
};

const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionLanguage1));
