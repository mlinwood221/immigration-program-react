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

class QuestionLanguage2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            qA153: props.qA153, qA154: props.qA154, qA155: props.qA155, qA156: props.qA156, qA157: props.qA157, qA158: props.qA158, qA159: props.qA159,
            qA160: props.qA160, qA161: props.qA161, qA162: props.qA162, qA163: props.qA163, qA164: props.qA164, qA165: props.qA165, qA166: props.qA166, qA167: props.qA167
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
        let { qA153, qA154, qA155, qA156, qA157, qA158, qA159, qA160, qA161, qA162, qA163, qA164, qA165, qA166, qA167 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Can you communicate in French?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA153 == "LANEF6" ? " active" : "")}
                                    onClick={() => this.updateProperty("153", "LANEF6")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA153 == "LANEF5" ? " active" : "")}
                                    onClick={() => this.updateProperty("153", "LANEF5")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <MoreOptions>
                            <SmoothSwitch identifier={qA153 == "LANEF6" ? "case1" : "case2"}>
                            {qA153 == "LANEF6" ? (
                                <React.Fragment>
                                    <FormGroup>
                                        <LabelDark>
                                            Have you completed your French language exams?
                                        </LabelDark>
                                        <Row>
                                            {/* LAFTE */}
                                            <Col>
                                                <SelectButtons
                                                    className={qA154 == "LFSTE1" ? " active" : ""}
                                                    onClick={() => this.updateProperty("154", "LFSTE1")}>Yes</SelectButtons>
                                            </Col>
                                            <Col>
                                                <SelectButtons
                                                    className={qA154 == "LFSTE0" ? " active" : ""}
                                                    onClick={() => this.updateProperty("154", "LFSTE0")}>No</SelectButtons>
                                            </Col>
                                        </Row>
                                    </FormGroup>

                                    <SmoothSwitch identifier={qA154 == "LFSTE1" ? "case1" : "case2"}>
                                    {qA154 == "LFSTE1" && (
                                        <React.Fragment>
                                            <FormGroup>
                                                <LabelDark>
                                                    Which French exam did you take?
                                                </LabelDark>
                                                <Row>
                                                    <Col>
                                                        <SelectButtons
                                                            className={qA155 == "LFSTT0" ? " active" : ""}
                                                            onClick={() => this.updateProperty("155", "LFSTT0")}>TEF</SelectButtons>
                                                    </Col>
                                                    <Col>
                                                        <SelectButtons
                                                            className={qA155 == "LFSTT1" ? " active" : ""}
                                                            onClick={() => this.updateProperty("155", "LFSTT1")}>TCF</SelectButtons>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            
                                            <SmoothSwitch identifier={qA155 == "LFSTT0" ? "case1" : "case2"}>
                                            {qA155 == "LFSTT0" && (
                                                <React.Fragment>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TEF: Insert your score for speaking:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES00" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES00">0 - 60</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES01" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES01">61 - 120</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES02" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES02">121 - 180</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES03" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES03">181 - 225</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES04" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES04">226 - 270</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES05" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES05">271 - 309</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES06" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES06">310 - 348</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES07" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES07">349 - 370</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES08" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES08">371 - 392</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA156 == "LFSTES09" ? "true" : "false"} qId="156" onChange={this.updateProperty} name="qA156" value="LFSTES09">393 - 450</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TEF: Insert your score for listening:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL00" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL00">0 - 50</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL01" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL01">51 - 100</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL02" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL02">101 - 144</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL03" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL03">145 - 180</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL04" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL04">181 - 216</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL05" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL05">217 - 248</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL06" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL06">249 - 279</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL07" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL07">280 - 297</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL08" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL08">298 - 315</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA157 == "LFSTEL09" ? "true" : "false"} qId="157" onChange={this.updateProperty} name="qA157" value="LFSTEL09">316 - 360</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TEF: Insert your score for reading:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER00" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER00">0 - 40</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER01" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER01">41 - 80</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER02" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER02">81 - 120</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER03" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER03">121 - 150</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER04" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER04">151 - 180</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER05" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER05">181 - 206</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER06" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER06">207 - 232</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER07" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER07">233 - 247</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER08" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER08">248 - 262</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA158 == "LFSTER09" ? "true" : "false"} qId="158" onChange={this.updateProperty} name="qA158" value="LFSTER09">263 - 300</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TEF: Insert your score for writing:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW00" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW00">0 - 60</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW01" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW01">61 - 120</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW02" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW02">121 - 180</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW03" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW03">181 - 225</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW04" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW04">226 - 270</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW05" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW05">271 - 309</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW06" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW06">310 - 348</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW07" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW07">349 - 370</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW08" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW08">371 - 392</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA159 == "LFSTEW09" ? "true" : "false"} qId="159" onChange={this.updateProperty} name="qA159" value="LFSTEW09">393 - 450</CustomRadio></Col>

                                                        </Row>
                                                    </FormGroup>
                                                </React.Fragment>
                                            )}
                                            </SmoothSwitch>
                                            
                                            <SmoothSwitch identifier={qA155 == "LFSTT1" ? "case1" : "case2"}>
                                            {qA155 == "LFSTT1" && (
                                                <React.Fragment>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TCF: Insert your score for speaking:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS00" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS00">0</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS01" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS01">1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS02" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS02">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS03" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS03">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS04" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS04">4 - 5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS05" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS05">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS06" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS06">7 - 9</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS07" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS07">10 - 11</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS08" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS08">12 - 13</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS09" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS09">14 - 15</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA160 == "LFSTS10" ? "true" : "false"} qId="160" onChange={this.updateProperty} name="qA160" value="LFSTS10">16 - 20</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TCF: Insert your score for listening:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL00" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL00">0 - 90</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL01" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL01">91 - 170</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL02" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL02">171 - 250</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL03" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL03">251 - 330</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL04" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL04">331 - 368</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL05" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL05">369 - 397</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL06" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL06">398 - 457</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL07" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL07">458 - 502</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL08" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL08">503 - 522</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL09" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL09">523 - 548</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA161 == "LFSTL10" ? "true" : "false"} qId="161" onChange={this.updateProperty} name="qA161" value="LFSTL10">549 - 699</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TCF: Insert your score for reading:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR00" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR00">0 - 150</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR01" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR01">151 - 300</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR02" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR02">301 - 341</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR03" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR03">342 – 374</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR04" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR04">375 – 405</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR05" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR05">406 – 452</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR06" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR06">453 – 498</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR07" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR07">499 – 523</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR08" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR08">524 – 548</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA162 == "LFSTR09" ? "true" : "false"} qId="162" onChange={this.updateProperty} name="qA162" value="LFSTR09">549 – 699</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <LabelDark>
                                                            TCF: Insert your score for writing:
                                                        </LabelDark>
                                                        <Row xs={2} sm={2} lg={3}>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW00" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW00">0 - 1</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW01" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW01">2</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW02" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW02">3</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW03" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW03">4 - 5</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW04" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW04">6</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW05" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW05">7 - 9</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW06" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW06">10 - 11</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW07" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW07">12 - 13</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW08" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW08">14 - 15</CustomRadio></Col>
                                                            <Col><CustomRadio checked={qA163 == "LFSTW09" ? "true" : "false"} qId="163" onChange={this.updateProperty} name="qA163" value="LFSTW09">16 - 20</CustomRadio></Col>
                                                        </Row>
                                                    </FormGroup>
                                                </React.Fragment>
                                            )}
                                            </SmoothSwitch>
                                        </React.Fragment>
                                    )}
                                    </SmoothSwitch>
                                    
                                    <SmoothSwitch identifier={qA154 == "LFSTE0" ? "case1" : "case2"}>
                                    {qA154 == "LFSTE0" && (
                                        <React.Fragment>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of speaking?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS0" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS1" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS2" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS3" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS4" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS5" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS6" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS7" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS8" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA164 == "LASFLS9" ? "true" : "false"} qId="164" onChange={this.updateProperty} name="qA164" value="LASFLS9">10 - Native Speaker</CustomRadio></Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of listening?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL0" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL1" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL2" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL3" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL4" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL5" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL6" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL7" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL8" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA165 == "LASFLL9" ? "true" : "false"} qId="165" onChange={this.updateProperty} name="qA165" value="LASFLL9">10 - Native Speaker</CustomRadio></Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of reading?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR0" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR1" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR2" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR3" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR4" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR5" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR6" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR7" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR8" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA166 == "LASFLR9" ? "true" : "false"} qId="166" onChange={this.updateProperty} name="qA166" value="LASFLR9">10 - Native Speaker</CustomRadio></Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LabelDark>
                                                    What is your level of writing?
                                                </LabelDark>
                                                <Row lg={2} xs={1}>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW0" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW0">1 – None</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW1" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW1">2 - Low Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW2" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW2">3 – Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW3" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW3">4 – High Beginner</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW4" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW4">5 - Intermediate</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW5" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW5">6 - Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW6" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW6">7 - Very Good</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW7" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW7">8 - Advanced</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW8" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW8">9- Expert</CustomRadio></Col>
                                                    <Col><CustomRadio checked={qA167 == "LASFLW9" ? "true" : "false"} qId="167" onChange={this.updateProperty} name="qA167" value="LASFLW9">10 - Native Speaker</CustomRadio></Col>
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
        let { qA153, qA154, qA155, qA156, qA157, qA158, qA159, qA160, qA161, qA162, qA163, qA164, qA165, qA166, qA167 } = this.state;

        if (!qA153) {
            return false;
        }
        else if (qA153 == "LANEF6") {
            if (!qA154)
                return false;
            else if (qA154 == "LFSTE1") {
                this.state.qA164 = this.state.qA165 = this.state.qA166 = this.state.qA167 = '';

                if (!qA155)
                    return false;
                else if (qA155 == "LFSTT0") {
                    this.state.qA160 = this.state.qA161 = this.state.qA162 = this.state.qA163 = '';

                    if (!qA156 || !qA157 || !qA158 || !qA159)
                        return false;
                }
                else {
                    this.state.qA156 = this.state.qA157 = this.state.qA158 = this.state.qA159 = '';

                    if (!qA160 || !qA161 || !qA162 || !qA163)
                        return false;
                }
            }
            else {
                this.state.qA155 = '';
                this.state.qA156 = this.state.qA157 = this.state.qA158 = this.state.qA159 = '';
                this.state.qA160 = this.state.qA161 = this.state.qA162 = this.state.qA163 = '';

                if (!qA164 || !qA165 || !qA166 || !qA167)
                    return false;
            }
        }
        else {
            this.state.qA154 = '';
            this.state.qA155 = '';
            this.state.qA156 = this.state.qA157 = this.state.qA158 = this.state.qA159 = '';
            this.state.qA160 = this.state.qA161 = this.state.qA162 = this.state.qA163 = '';
            this.state.qA164 = this.state.qA165 = this.state.qA166 = this.state.qA167 = '';
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
        
        for (let i = 153; i <= 167; i ++)
            obj[`Q${i}`] = this.state[`qA${i}`];

        // update redux
        this.props.updateAnswer(obj);

        // call SaveUserResponse api

        for (let i = 153; i <= 167; i ++)
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : this.state[`qA${i}`], "QuestionCode" : `${i}` });

        for (let i = 182; i <= 196; i ++)
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
            state: { nextUrl: '/question_final', prevUrl: '/question_language2', direction: 'next' }
        });
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        this.props.history.push({
            pathname: '/question_advert',
            state: { nextUrl: '/question_language2', prevUrl: '/question_language1', direction: 'back' }
        });
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    let obj = {
        store : getStore(state),
    }

    for (let i = 153; i <= 167; i ++)
        obj[`qA${i}`] = getQASingle(state, `${i}`);

    return { ...obj };
};

const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionLanguage2));
