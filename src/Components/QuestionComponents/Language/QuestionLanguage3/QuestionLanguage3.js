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
import { FirstCard, CardBody, CardFooter, CardHeader, MoreOptions, SmoothSwitch } from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";

class QuestionLanguage3 extends Component {
    state = { 
        show: false
    }

    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            qA182: props.qA182, qA183: props.qA183, qA184: props.qA184, qA185: props.qA185, qA186: props.qA186, qA187: props.qA187, qA188: props.qA188, qA189: props.qA189,
            qA190: props.qA190, qA191: props.qA191, qA192: props.qA192, qA193: props.qA193, qA194: props.qA194, qA195: props.qA195, qA196: props.qA196 
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
        let { qA182, qA183, qA184, qA185, qA186, qA187, qA188, qA189, qA190, qA191, qA192, qA193, qA194, qA195, qA196 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Can you communicate in English?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA182 == "LANEF8" ? " active" : "")}
                                    onClick={() => this.updateProperty("182", "LANEF8")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA182 == "LANEF7" ? " active" : "")}
                                    onClick={() => this.updateProperty("182", "LANEF7")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <MoreOptions>
                            <SmoothSwitch identifier={qA182 == "LANEF8" ? "case1" : "case2"}>
                            {qA182 == "LANEF8" ? (
                                <React.Fragment>
                                    <FormGroup>
                                        <LabelDark>
                                            Have you completed your English language exams?
                                        </LabelDark>
                                        <Row>
                                            <Col>
                                                <SelectButtons
                                                    className={qA183 == "LESTE1" ? " active" : ""}
                                                    onClick={() => this.updateProperty("183", "LESTE1")}>Yes</SelectButtons>
                                            </Col>
                                            <Col>
                                                <SelectButtons
                                                    className={qA183 == "LESTE0" ? " active" : ""}
                                                    onClick={() => this.updateProperty("183", "LESTE0")}>No</SelectButtons>
                                            </Col>
                                        </Row>
                                    </FormGroup>

                                    <SmoothSwitch identifier={qA183 == "LESTE1" ? "case1" : "case2"}>
                                    {qA183 == "LESTE1" && (
                                        <React.Fragment>
                                            <FormGroup>
                                                <LabelDark>
                                                    Which English exam did you take?
                                                </LabelDark>
                                                <Row>
                                                    <Col>
                                                        <SelectButtons
                                                            className={qA184 == "LESTT0" ? " active" : ""}
                                                            onClick={() => this.updateProperty("184", "LESTT0")}>IELTS</SelectButtons>
                                                    </Col>
                                                    <Col>
                                                        <SelectButtons
                                                            className={qA184 == "LESTT1" ? " active" : ""}
                                                            onClick={() => this.updateProperty("184", "LESTT1")}>CELPIP</SelectButtons>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <SmoothSwitch identifier={qA184 == "LESTT1" ? "case1" : "case2"}>
                                            {qA184 == "LESTT1" && (
                                                <React.Fragment>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            CELPIP: Insert your score for speaking:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA185 == "LESCS00" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS00">M</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS01" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS01">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS02" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS03" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS03">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS04" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS04">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS05" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS05">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS06" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS06">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS07" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS07">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS08" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS08">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS09" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS09">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS10" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS10">9</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS11" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS11">10</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS12" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS12">11</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA185 == "LESCS13" ? "true" : "false"} qId="185" onChange={this.updateProperty} name="qA185" value="LESCS13">12</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            CELPIP: Insert your score for listening:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA186 == "LESCL00" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL00">M</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL01" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL01">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL02" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL03" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL03">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL04" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL04">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL05" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL05">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL06" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL06">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL07" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL07">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL08" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL08">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL09" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL09">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL10" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL10">9</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL11" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL11">10</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL12" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL12">11</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA186 == "LESCL13" ? "true" : "false"} qId="186" onChange={this.updateProperty} name="qA186" value="LESCL13">12</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            CELPIP: Insert your score for reading:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA187 == "LESCR00" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR00">M</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR01" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR01">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR02" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR03" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR03">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR04" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR04">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR05" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR05">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR06" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR06">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR07" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR07">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR08" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR08">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR09" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR09">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR10" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR10">9</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR11" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR11">10</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR12" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR12">11</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA187 == "LESCR13" ? "true" : "false"} qId="187" onChange={this.updateProperty} name="qA187" value="LESCR13">12</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            CELPIP: Insert your score for writing:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA188 == "LESCW00" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW00">M</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW01" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW01">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW02" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW03" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW03">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW04" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW04">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW05" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW05">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW06" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW06">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW07" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW07">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW08" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW08">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW09" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW09">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW10" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW10">9</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW11" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW11">10</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW12" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW12">11</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA188 == "LESCW13" ? "true" : "false"} qId="188" onChange={this.updateProperty} name="qA188" value="LESCW13">12</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                </React.Fragment>
                                            )}
                                            </SmoothSwitch>

                                            <SmoothSwitch identifier={qA184 == "LESTT0" ? "case1" : "case2"}>
                                            {qA184 == "LESTT0" && (
                                                <React.Fragment>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            IELTS: Insert your score for speaking:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA189 == "LESIS00" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS00">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS01" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS01">0.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS02" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS03" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS03">1.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS04" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS04">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS05" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS05">2.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS06" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS06">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS07" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS07">3.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS08" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS08">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS09" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS09">4.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS10" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS10">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS11" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS11">5.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS12" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS12">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS13" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS13">6.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS14" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS14">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS15" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS15">7.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS16" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS16">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS17" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS17">8.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA189 == "LESIS18" ? "true" : "false"} qId="189" onChange={this.updateProperty} name="qA189" value="LESIS18">9</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>                                                        
                                                    <FormGroup>
                                                        <LabelDark>
                                                            IELTS: Insert your score for listening:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA190 == "LESIL00" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL00">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL01" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL01">0.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL02" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL03" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL03">1.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL04" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL04">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL05" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL05">2.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL06" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL06">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL07" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL07">3.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL08" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL08">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL09" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL09">4.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL10" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL10">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL11" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL11">5.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL12" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL12">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL13" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL13">6.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL14" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL14">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL15" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL15">7.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL16" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL16">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL17" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL17">8.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA190 == "LESIL18" ? "true" : "false"} qId="190" onChange={this.updateProperty} name="qA190" value="LESIL18">9</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>                                                        
                                                    <FormGroup>
                                                        <LabelDark>
                                                            IELTS: Insert your score for reading:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA191 == "LESIR00" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR00">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR01" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR01">0.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR02" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR03" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR03">1.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR04" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR04">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR05" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR05">2.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR06" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR06">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR07" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR07">3.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR08" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR08">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR09" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR09">4.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR10" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR10">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR11" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR11">5.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR12" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR12">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR13" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR13">6.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR14" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR14">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR15" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR15">7.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR16" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR16">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR17" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR17">8.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA191 == "LESIR18" ? "true" : "false"} qId="191" onChange={this.updateProperty} name="qA191" value="LESIR18">9</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>                                                        
                                                    <FormGroup>
                                                        <LabelDark>
                                                            IELTS: Insert your score for writing:
                                                        </LabelDark>
                                                        <Row lg={6} sm={4} xs={3}>
                                                            <Col><CustomRadio checked={qA192 == "LESIW00" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW00">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW01" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW01">0.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW02" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW02">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW03" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW03">1.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW04" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW04">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW05" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW05">2.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW06" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW06">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW07" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW07">3.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW08" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW08">4</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW09" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW09">4.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW10" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW10">5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW11" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW11">5.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW12" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW12">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW13" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW13">6.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW14" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW14">7</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW15" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW15">7.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW16" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW16">8</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW17" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW17">8.5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA192 == "LESIW18" ? "true" : "false"} qId="192" onChange={this.updateProperty} name="qA192" value="LESIW18">9</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                </React.Fragment>
                                            )}
                                            </SmoothSwitch>
                                        </React.Fragment>
                                    )}
                                    </SmoothSwitch>
                                    
                                    <SmoothSwitch identifier={qA183 == "LESTE0" ? "case1" : "case2"}>
                                    {qA183 == "LESTE0" && (
                                        <React.Fragment>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of speaking?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA193 == "LASELS0" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS1" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS2" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS3" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS4" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS5" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS6" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS7" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS8" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA193 == "LASELS9" ? "true" : "false"} qId="193" onChange={this.updateProperty} name="qA193" value="LASELS9">10 - Native Speaker</CustomRadio></Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of listening?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA194 == "LASELL0" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL1" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL2" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL3" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL4" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL5" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL6" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL7" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL8" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA194 == "LASELL9" ? "true" : "false"} qId="194" onChange={this.updateProperty} name="qA194" value="LASELL9">10 - Native Speaker</CustomRadio></Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of reading?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA195 == "LASELR0" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR1" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR2" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR3" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR4" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR5" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR6" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR7" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR8" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA195 == "LASELR9" ? "true" : "false"} qId="195" onChange={this.updateProperty} name="qA195" value="LASELR9">10 - Native Speaker</CustomRadio></Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of writing?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA196 == "LASELW0" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW1" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW2" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW3" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW4" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW5" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW6" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW7" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW8" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA196 == "LASELW9" ? "true" : "false"} qId="196" onChange={this.updateProperty} name="qA196" value="LASELW9">10 - Native Speaker</CustomRadio></Col>
                                                </Row>
                                            </FormGroup>
                                        </React.Fragment>
                                    )}
                                    </SmoothSwitch>
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
        const { qA182, qA183, qA184, qA185, qA186, qA187, qA188, qA189, qA190, qA191, qA192, qA193, qA194, qA195, qA196 } = this.state;

        if (!qA182)
            return false;
        else if (qA182 == "LANEF8") {
            if (!qA183)
                return false;
            else if (qA183 == "LESTE1") {
                this.state.qA193 = this.state.qA194 = this.state.qA195 = this.state.qA196 = '';

                if (!qA184)
                    return false;
                if (qA184 == "LESTT1") {
                    this.state.qA189 = this.state.qA190 = this.state.qA191 = this.state.qA192 = '';

                    if (!qA185 || !qA186 || !qA187 || !qA188)
                        return false;
                }
                if (qA184 == "LESTT0") {
                    this.state.qA185 = this.state.qA186 = this.state.qA187 = this.state.qA188 = '';

                    if (!qA189 || !qA190 || !qA191 || !qA192)
                        return false;
                }
            }
            else {
                this.state.qA184 = '';
                this.state.qA185 = this.state.qA186 = this.state.qA187 = this.state.qA188 = '';
                this.state.qA189 = this.state.qA190 = this.state.qA191 = this.state.qA192 = '';

                if (!qA193 || !qA194 || !qA195 || !qA196)
                    return false;
            }
        }
        else {
            this.state.qA183 = '';
            this.state.qA184 = '';
            this.state.qA185 = this.state.qA186 = this.state.qA187 = this.state.qA188 = '';
            this.state.qA189 = this.state.qA190 = this.state.qA191 = this.state.qA192 = '';
            this.state.qA193 = this.state.qA194 = this.state.qA195 = this.state.qA196 = '';
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
        
        for (let i = 182; i <= 196; i ++)
            obj[`Q${i}`] = this.state[`qA${i}`];

        // update redux
        this.props.updateAnswer(obj);

        // call SaveUserResponse api

        for (let i = 182; i <= 196; i ++)
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : this.state[`qA${i}`], "QuestionCode" : `${i}` });

        for (let i = 153; i <= 167; i ++)
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : `${i}` });

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
            state: { nextUrl: '/question_final', prevUrl: '/question_language3', direction: 'next' }
        });
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_language3', prevUrl: '/question_language1', direction: 'back' }
        });
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    let obj = {
        store : getStore(state),
    }

    for (let i = 182; i <= 196; i ++)
        obj[`qA${i}`] = getQASingle(state, `${i}`);

    return { ...obj };
};

const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionLanguage3));
