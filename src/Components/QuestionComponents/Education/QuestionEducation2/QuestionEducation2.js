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
import CustomRadio from "../../../BasicComponent/RadioButton/radioButton";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import { LabelDark, Labels } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SlideArea, SmoothSwitch} from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import { MONTHS, YEARS } from "../../../../Assests/date_duration";
import { CANADIAN_SCHOOLS } from "../../../../Assests/canadian_schools";

class QuestionEducation2 extends Component {
    state = { 
        show: false
    }
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            qA31: props.qA31,
            qA234: props.qA234,
            qA32_39: props.qA32_39.length 
                        ? [ ...props.qA32_39] 
                        : [{ key: 0, qA32: '', qA35: '', qA36: '', qA37_1: '', qA37_2: '', qA38_1: '', qA38_2: '', qA39: '' }],
            qA40: props.qA40,
            qA41: props.qA41,
            qA42: props.qA42,
            qA43_50: props.qA43_50.length 
                        ? [ ...props.qA43_50] 
                        : [{ key: 0, qA43: '', qA46: '', qA47: '', qA48_1: '', qA48_2: '', qA49_1: '', qA49_2: '', qA212: '', qA50: '' }]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        }, 1000);
    }

    onAddEducation1 = () => {
        let tmp = [ ...this.state.qA32_39 ];
        let key = 0;

        if (tmp.length)
            key = tmp[tmp.length-1].key + 1;

        tmp.push({ key: key, qA32: '', qA35: '', qA36: '', qA37_1: '', qA37_2: '', qA38_1: '', qA38_2: '', qA39: '' });

        this.setState({
            qA32_39: tmp
        });
    }

    onAddEducation2 = () => {
        let tmp = [ ...this.state.qA43_50 ];
        let key = 0;

        if (tmp.length)
            key = tmp[tmp.length-1].key + 1;

        tmp.push({ key: key, qA43: '', qA46: '', qA47: '', qA48_1: '', qA48_2: '', qA49_1: '', qA49_2: '', qA212: '', qA50: '' });

        this.setState({
            qA43_50: tmp
        });
    }

    render() { 
        let { show } = this.state;
        let { qA22 } = this.props;
        let { qA31, qA234, qA32_39, qA40, qA41, qA42, qA43_50 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Have you studied in Canada before <u>in the past</u>? (post-secondary only)
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA31 == "EDCAP1" ? " active" : "")}
                                    onClick={() => this.updateProperty("31", "EDCAP1")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons
                                    className={"btn-bg" + (qA31 == "EDCAP0" ? " active" : "")}
                                    onClick={() => this.updateProperty("31", "EDCAP0")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <MoreOptions>
                            <SmoothSwitch identifier={qA31 == "EDCAP1" ? "case1" : "case2"}>
                            {qA31 == "EDCAP1" && (
                                <React.Fragment>
                                    <FormGroup>
                                        <LabelDark>What is your highest level of education you have completed in Canada?</LabelDark>
                                        <FormGroup className="ml-2 mt-3 mb-4">
                                        <CustomRadio checked={qA234 == "ADPTS234-0" ? "true" : "false"} qId="234" onChange={this.updateProperty} name="qA234" value="ADPTS234-0">One-year program at a university, college, trade or technical school, or other institute</CustomRadio>
                                        <CustomRadio checked={qA234 == "ADPTS234-1" ? "true" : "false"} qId="234" onChange={this.updateProperty} name="qA234" value="ADPTS234-1">Two-year program at a university, college, trade or technical school, or other institute</CustomRadio>
                                        <CustomRadio checked={qA234 == "ADPTS234-2" ? "true" : "false"} qId="234" onChange={this.updateProperty} name="qA234" value="ADPTS234-2">Bachelor’s degree (three or more year program at a university, college, trade or technical school, or other institute)</CustomRadio>
                                        <CustomRadio checked={qA234 == "ADPTS234-3" ? "true" : "false"} qId="234" onChange={this.updateProperty} name="qA234" value="ADPTS234-3">Two or more certificates, diplomas or degrees; one must be for a program of three or more years</CustomRadio>
                                        <CustomRadio checked={qA234 == "ADPTS234-4" ? "true" : "false"} qId="234" onChange={this.updateProperty} name="qA234" value="ADPTS234-4">Master’s degree or professional degree needed to practice in a licensed profession</CustomRadio>
                                        <CustomRadio checked={qA234 == "ADPTS234-5" ? "true" : "false"} qId="234" onChange={this.updateProperty} name="qA234" value="ADPTS234-5">Doctoral level university degree (PhD)</CustomRadio>
                                        </FormGroup>
                                    </FormGroup>
                                    {qA32_39.map((value, index) => {
                                        return (
                                            <CustomGroup key={value.key}>
                                                <FormGroup>
                                                    <Labels>Canadian School {index + 1}</Labels>
                                                </FormGroup>
                                                <FormGroup>
                                                    {/* EDCA00-SN-XXX */}
                                                    <LabelDark>Which school did you attend?</LabelDark>
                                                    <CustomInput suggestions={CANADIAN_SCHOOLS} 
                                                        type="school"
                                                        groupId="32_39"
                                                        index={index}
                                                        qId="32"
                                                        onChange={this.updateGroupField}
                                                        value={value.qA32}
                                                        placeholder="Select" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>Type of program</LabelDark>
                                                    <CustomSelect options={[
                                                            { name: "Certificate Program",              value: `EDCA0${index}-PRT0`},
                                                            { name: "College or University Diploma",    value: `EDCA0${index}-PRT1`},
                                                            { name: "Associate Degree",                 value: `EDCA0${index}-PRT2`},
                                                            { name: "Bachelors Degree",                 value: `EDCA0${index}-PRT3`},
                                                            { name: "Postgraduate Diploma",             value: `EDCA0${index}-PRT4`},
                                                            { name: "Master's Degree/Professional Degree", value: `EDCA0${index}-PRT5`},
                                                            { name: "Doctorate Degree/ PhD",            value: `EDCA0${index}-PRT6`}
                                                        ]} 
                                                        groupId="32_39"
                                                        index={index}
                                                        qId="35"
                                                        onChange={this.updateGroupField}
                                                        value={value.qA35}
                                                        placeholder="Select" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>Duration of program</LabelDark>
                                                    <CustomSelect options={[
                                                            { name: "One (1) Academic year",            value: `EDCA0${index}-PRD0`},
                                                            { name: "Two (2) Academic years",           value: `EDCA0${index}-PRD1`},
                                                            { name: "Three (3) Academic Years",         value: `EDCA0${index}-PRD2`},
                                                            { name: "Four (4) or more Academic Years",  value: `EDCA0${index}-PRD3`}
                                                        ]} 
                                                        groupId="32_39"
                                                        index={index}
                                                        qId="36"
                                                        onChange={this.updateGroupField}
                                                        value={value.qA36}
                                                        placeholder="Select" />
                                                </FormGroup>
                                                <FormGroup>
                                                    {/* EDCA00-PRS */}
                                                    <LabelDark>Program start date</LabelDark>
                                                    <Row>
                                                        <Col>
                                                            <CustomSelect 
                                                                options={MONTHS} 
                                                                groupId="32_39"
                                                                index={index}
                                                                qId="37_1" 
                                                                onChange={this.updateGroupField} 
                                                                value={value.qA37_1} 
                                                                placeholder="Select" />
                                                        </Col>
                                                        <Col>
                                                            <CustomSelect 
                                                                options={YEARS(2021, 1970)} 
                                                                groupId="32_39"
                                                                index={index}
                                                                qId="37_2" 
                                                                onChange={this.updateGroupField} 
                                                                value={value.qA37_2} 
                                                                placeholder="Select" />
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    {/* EDCA00-PRT */}
                                                    <LabelDark>Program end date</LabelDark>
                                                    <Row>
                                                        <Col>
                                                            <CustomSelect 
                                                                options={MONTHS} 
                                                                groupId="32_39"
                                                                index={index}
                                                                qId="38_1" 
                                                                onChange={this.updateGroupField} 
                                                                value={value.qA38_1} 
                                                                placeholder="Select" />
                                                        </Col>
                                                        <Col>
                                                            <CustomSelect 
                                                                options={YEARS(2021, 1970)} 
                                                                groupId="32_39"
                                                                index={index}
                                                                qId="38_2" 
                                                                onChange={this.updateGroupField} 
                                                                value={value.qA38_2} 
                                                                placeholder="Select" />
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <LabelDark>Did you graduate?</LabelDark>
                                                    <Row>
                                                        <Col>
                                                            <SelectButtons
                                                                className={value.qA39 == `EDCA0${index}-PGR1` ? " active" : ""}
                                                                onClick={() => this.updateGroupField("32_39", index, "39", `EDCA0${index}-PGR1`)}>Yes</SelectButtons>
                                                        </Col>
                                                        <Col>
                                                            <SelectButtons
                                                                className={value.qA39 == `EDCA0${index}-PGR0` ? " active" : ""}
                                                                onClick={() => this.updateGroupField("32_39", index, "39", `EDCA0${index}-PGR0`)}>No</SelectButtons>
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                {index != 0 && (
                                                    <CustomGroupDeleteButton onClick={() => this.deleteGroup("32_39", index)} />
                                                )}
                                            </CustomGroup>
                                        );
                                    })}
                                    {(qA32_39.length < 4) && (
                                        <p className="text-right mt-3">Add another education<AddButton onClick={this.onAddEducation1}> <img src={PlusIcon}/> </AddButton></p> 
                                    )}
                                </React.Fragment>
                            )}
                            </SmoothSwitch>
                        </MoreOptions>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                {qA22 == "EDCAC0" && qA31 && (
                    <SlideArea show={show}>
                        <Cards>
                            <CardHeader>
                                {qA31 == "EDCAP1" ? "Are you open to studying in Canada again?" : "Are you open to studying in Canada?"}
                            </CardHeader>
                            <CardBody>
                                {qA31 == "EDCAP1" ? (                                    
                                    <Row>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA41 == "EDCPCAS1" ? " active" : "")}
                                                onClick={() => this.updateProperty("41", "EDCPCAS1")}>Yes</SelectButtons>
                                        </Col>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA41 == "EDCPCAS0" ? " active" : "")}
                                                onClick={() => this.updateProperty("41", "EDCPCAS0")}>No</SelectButtons>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA40 == "EDINCAS1" ? " active" : "")}
                                                onClick={() => this.updateProperty("40", "EDINCAS1")}>Yes</SelectButtons>
                                        </Col>
                                        <Col>
                                            <SelectButtons
                                                className={"btn-bg" + (qA40 == "EDINCAS0" ? " active" : "")}
                                                onClick={() => this.updateProperty("40", "EDINCAS0")}>No</SelectButtons>
                                        </Col>
                                    </Row>
                                )}
                                <MoreOptions>
                                    <SmoothSwitch identifier={(qA31 == "EDCAP1" && qA41 == "EDCPCAS1") || (qA31 == "EDCAP0" && qA40 == "EDINCAS1") ? "case1" : "case2"}>
                                    {((qA31 == "EDCAP1" && qA41 == "EDCPCAS1") || (qA31 == "EDCAP0" && qA40 == "EDINCAS1")) ? (
                                        <React.Fragment>
                                            <FormGroup>
                                                <LabelDark>
                                                    Have you applied to any schools in Canada? (post-secondary only)
                                                </LabelDark>
                                                <Row>
                                                    <Col>
                                                        <SelectButtons
                                                            className={qA42 == "EDAACAS1" ? " active" : ""}
                                                            onClick={() => this.updateProperty("42", "EDAACAS1")}>Yes</SelectButtons>
                                                    </Col>
                                                    <Col>
                                                        <SelectButtons
                                                            className={qA42 == "EDAACAS0" ? " active" : ""}
                                                            onClick={() => this.updateProperty("42", "EDAACAS0")}>No</SelectButtons>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <SmoothSwitch identifier={qA42 == "EDAACAS1" ? "case1" : "case2"}>
                                            {qA42 == "EDAACAS1" && (
                                                <React.Fragment>
                                                    {qA43_50.map((value, index) => {
                                                        return (
                                                            <CustomGroup>
                                                                <FormGroup>
                                                                    <Labels>Potential Future Canadian School {index + 1}</Labels>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <LabelDark>What schools have you applied to?</LabelDark>
                                                                    <CustomInput suggestions={CANADIAN_SCHOOLS}
                                                                        type="school"
                                                                        groupId="43_50"
                                                                        index={index}
                                                                        qId="43"
                                                                        onChange={this.updateGroupField}
                                                                        value={value.qA43}
                                                                        placeholder="Select" />
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <LabelDark>Type of program</LabelDark>
                                                                    <CustomSelect options={[
                                                                            { name: "Certificate Program",              value: `EDCAAP0${index}-WP2`},
                                                                            { name: "College or University Diploma",    value: `EDCAAP0${index}-WP3`},
                                                                            { name: "Associate Degree",                 value: `EDCAAP0${index}-WP4`},
                                                                            { name: "Bachelors Degree",                 value: `EDCAAP0${index}-WP5`},
                                                                            { name: "Postgraduate Diploma",             value: `EDCAAP0${index}-WP6`},
                                                                            { name: "Masters Degree",                   value: `EDCAAP0${index}-WP7`},
                                                                            { name: "Doctorate Degree/ PhD",            value: `EDCAAP0${index}-WP8`}
                                                                        ]} 
                                                                        groupId="43_50"
                                                                        index={index}
                                                                        qId="46"
                                                                        onChange={this.updateGroupField}
                                                                        value={value.qA46}
                                                                        placeholder="Select" />
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <LabelDark>Duration of program</LabelDark>
                                                                    <CustomSelect options={[
                                                                            { name: "One (1) Academic year",            value: `EDCAAP0${index}-PRD0`},
                                                                            { name: "Two (2) Academic years",           value: `EDCAAP0${index}-PRD1`},
                                                                            { name: "Three (3) Academic Years",         value: `EDCAAP0${index}-PRD2`},
                                                                            { name: "Four (4) or more Academic Years",  value: `EDCAAP0${index}-PRD3`}
                                                                        ]}
                                                                        groupId="43_50"
                                                                        index={index}
                                                                        qId="47"
                                                                        onChange={this.updateGroupField}
                                                                        value={value.qA47}
                                                                        placeholder="Select" />
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    {/* EDCAAP00-PRS */}
                                                                    <LabelDark>Program start date</LabelDark>
                                                                    <Row>
                                                                        <Col>
                                                                            <CustomSelect 
                                                                                options={MONTHS} 
                                                                                groupId="43_50"
                                                                                index={index}
                                                                                qId="48_1" 
                                                                                onChange={this.updateGroupField} 
                                                                                value={value.qA48_1} 
                                                                                placeholder="Select" />
                                                                        </Col>
                                                                        <Col>
                                                                            <CustomSelect 
                                                                                options={YEARS(2021, 2030)}
                                                                                groupId="43_50"
                                                                                index={index}
                                                                                qId="48_2" 
                                                                                onChange={this.updateGroupField} 
                                                                                value={value.qA48_2} 
                                                                                placeholder="Select" />
                                                                        </Col>
                                                                    </Row>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    {/* EDCAAP00-PRT */}
                                                                    <LabelDark>Program end date</LabelDark>
                                                                    <Row>
                                                                        <Col>
                                                                            <CustomSelect 
                                                                                options={MONTHS} 
                                                                                groupId="43_50"
                                                                                index={index}
                                                                                qId="49_1" 
                                                                                onChange={this.updateGroupField} 
                                                                                value={value.qA49_1} 
                                                                                placeholder="Select" />
                                                                        </Col>
                                                                        <Col>
                                                                            <CustomSelect 
                                                                                options={YEARS(2021, 2030)} 
                                                                                groupId="43_50"
                                                                                index={index}
                                                                                qId="49_2" 
                                                                                onChange={this.updateGroupField} 
                                                                                value={value.qA49_2} 
                                                                                placeholder="Select" />
                                                                        </Col>
                                                                    </Row>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    {/* EDCAAP00-AC */}
                                                                    <LabelDark>Have you been accepted?</LabelDark>
                                                                    <CustomSelect 
                                                                        options={[
                                                                            { name: "No", value: `EDCAAP0${index}-AC0`},
                                                                            { name: "Yes", value: `EDCAAP0${index}-AC1`},
                                                                            { name: "I don't know yet", value: `EDCAAP0${index}-AC2`}
                                                                        ]}
                                                                        groupId="43_50"
                                                                        index={index}
                                                                        qId="212" 
                                                                        onChange={this.updateGroupField} 
                                                                        value={value.qA212} 
                                                                        placeholder="Select" />
                                                                </FormGroup>
                                                                {/* <FormGroup>
                                                                    <LabelDark>Are you willing to change schools if it can improve your immigration possibilites?</LabelDark>
                                                                    <Row>
                                                                        <Col>
                                                                            <SelectButtons
                                                                                className={qA50 == "EDCAACPCH1" ? " active" : ""}
                                                                                onClick={() => this.updateSelectField("50", "EDCAACPCH1")}>Yes</SelectButtons>
                                                                        </Col>
                                                                        <Col>
                                                                            <SelectButtons
                                                                                className={qA50 == "EDCAACPCH0" ? " active" : ""}
                                                                                onClick={() => this.updateSelectField("50", "EDCAACPCH0")}>No</SelectButtons>
                                                                        </Col>
                                                                    </Row>
                                                                </FormGroup> */}
                                                                {index != 0 && (
                                                                    <CustomGroupDeleteButton onClick={() => this.deleteGroup("43_50", index)} />
                                                                )}
                                                            </CustomGroup>
                                                        );
                                                    })}
                                                    {(qA43_50.length < 5) && (
                                                        <p className="text-right mt-3">Add another education<AddButton onClick={this.onAddEducation2}> <img src={PlusIcon}/> </AddButton></p> 
                                                    )}
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
                        </Cards>
                    </SlideArea>
                )}
                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={true} />
            </React.Fragment>
         );
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

    canForward = () => {
        let { qA22 } = this.props;
        let { qA31, qA234, qA32_39, qA40, qA41, qA42, qA43_50 } = this.state;

        if (!qA31) {
            return false;
        }
        else if (qA31 == "EDCAP1") {
            if (!qA234)
                return false;

            for (let i = 0; i < qA32_39.length; i ++)
                if (!qA32_39[i].qA32 || !qA32_39[i].qA35 || !qA32_39[i].qA36 || !qA32_39[i].qA37_1 || !qA32_39[i].qA37_2 || !qA32_39[i].qA38_1 || !qA32_39[i].qA38_2 || !qA32_39[i].qA39)
                    return false;
        }
        else {
            this.state.qA234 = '';
            this.state.qA32_39 = [{ key: 0, qA32: '', qA35: '', qA36: '', qA37_1: '', qA37_2: '', qA38_1: '', qA38_2: '', qA39: '' }];
        }

        if (qA22 == "EDCAC0") {
            if ((qA31 == "EDCAP1" && !qA41) || (qA31 == "EDCAP0" && !qA40))
                return false;
            
            if ((qA31 == "EDCAP1" && qA41 == "EDCPCAS1") || (qA31 == "EDCAP0" && qA40 == "EDINCAS1"))
            {
                if (!qA42) {
                    return false;
                }
                else if (qA42 == "EDAACAS1") {
                    for (let i = 0; i < qA43_50.length; i ++)
                        if (!qA43_50[i].qA43 || !qA43_50[i].qA46 || !qA43_50[i].qA47 || !qA43_50[i].qA48_1 || !qA43_50[i].qA48_2 || !qA43_50[i].qA49_1 || !qA43_50[i].qA49_2 || !qA43_50[i].qA212)
                            return false;
                }
                else {
                    this.state.qA43_50 = [{ key: 0, qA43: '', qA46: '', qA47: '', qA48_1: '', qA48_2: '', qA49_1: '', qA49_2: '', qA212: '', qA50: '' }];
                }
            }
        }

        return true;
    }

    saveResponse = () => {
        let { store, qA27 } = this.props;
        let { qA31, qA234, qA32_39, qA40, qA41, qA42, qA43_50 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        // update redux
        this.props.updateAnswer({
            Q31: qA31, Q234: qA234, Q32_39: JSON.parse(JSON.stringify(qA32_39)), Q40: qA40, Q41: qA41, Q42: qA42, Q43_50: JSON.parse(JSON.stringify(qA43_50))
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA31, "QuestionCode" : "31" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA234, "QuestionCode" : "234" });
        qA32_39.map((value, index) => {
            let qA33 = "", qA34 = "";
            let school = CANADIAN_SCHOOLS.find((school, index) => {
                return school.value == value.qA32;
            });

            if (school) {
                switch (school.Province) {
                    case "Alberta": qA33 = "AB"; break;
                    case "British Columbia": qA33 = "BC"; break;
                    case "Manitoba": qA33 = "MB"; break;
                    case "New Brunswick": qA33 = "NB"; break;
                    case "Newfoundland and Labrador": qA33 = "NL"; break;
                    case "Northwest Terriories": qA33 = "NT"; break;
                    case "Nova Scotia": qA33 = "NS"; break;
                    case "Nunavut": qA33 = "NU"; break;
                    case "Ontario": qA33 = "ON"; break;
                    case "Prince Edward Island": qA33 = "PE"; break;
                    case "Quebec": qA33 = "QC"; break;
                    case "Saskatchewan": qA33 = "SK"; break;
                    case "Yukon": qA33 = "YT"; break;
                }
                if (school.PGWP == 1)
                    qA34 = `EDCA0${index}-PWP1`;
                else
                    qA34 = `EDCA0${index}-PWP0`;
            }

            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA32 ? `EDCA0${index}-SN-` + value.qA32 : "", "QuestionCode" : (index != 0 ? `32-${index}` : "32") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA33 ? `EDCA0${index}-P` + qA33 : "", "QuestionCode" : (index != 0 ? `33-${index}` : "33") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA34, "QuestionCode" : (index != 0 ? `34-${index}` : "34") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA35, "QuestionCode" : (index != 0 ? `35-${index}` : "35") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA36, "QuestionCode" : (index != 0 ? `36-${index}` : "36") });
            body.push({ "ProfileEmail": email, "Text": value.qA37_1 ? value.qA37_1 + '/' + value.qA37_2 : "", "AnswerCode" : value.qA37_1 ? `EDCA0${index}-PRS` : "", "QuestionCode" : (index != 0 ? `37-${index}` : "37") });
            body.push({ "ProfileEmail": email, "Text": value.qA38_1 ? value.qA38_1 + '/' + value.qA38_2 : "", "AnswerCode" : value.qA38_1 ? `EDCA0${index}-PRT` : "", "QuestionCode" : (index != 0 ? `38-${index}` : "38") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA39, "QuestionCode" : (index != 0 ? `39-${index}` : "39") });
        });
        for (let i = qA32_39.length; i < 4; i ++) {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `32-${i}` : "32") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `33-${i}` : "33") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `34-${i}` : "34") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `35-${i}` : "35") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `36-${i}` : "36") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `37-${i}` : "37") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `38-${i}` : "38") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `39-${i}` : "39") });
        }
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA40, "QuestionCode" : "40" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA41, "QuestionCode" : "41" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA42, "QuestionCode" : "42" });
        qA43_50.map((value, index) => {
            let qA44 = "", qA45 = "";
            let school = CANADIAN_SCHOOLS.find((school, index) => {
                return school.value == value.qA43;
            });

            if (school) {
                switch (school.Province) {
                    case "Alberta": qA44 = "AB"; break;
                    case "British Columbia": qA44 = "BC"; break;
                    case "Manitoba": qA44 = "MB"; break;
                    case "New Brunswick": qA44 = "NB"; break;
                    case "Newfoundland and Labrador": qA44 = "NL"; break;
                    case "Northwest Terriories": qA44 = "NT"; break;
                    case "Nova Scotia": qA44 = "NS"; break;
                    case "Nunavut": qA44 = "NU"; break;
                    case "Ontario": qA44 = "ON"; break;
                    case "Prince Edward Island": qA44 = "PE"; break;
                    case "Quebec": qA44 = "QC"; break;
                    case "Saskatchewan": qA44 = "SK"; break;
                    case "Yukon": qA44 = "YT"; break;
                }
                if (school.PGWP == 1)
                    qA45 = `EDCAAP0${index}-WP1`;
                else
                    qA45 = `EDCAAP0${index}-WP0`;
            }
            
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA43 ? `EDCAAP0${index}-SN-` + value.qA43 : "", "QuestionCode" : (index != 0 ? `43-${index}` : "43") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA44 ? `EDCAAP0${index}-` + qA44 : "", "QuestionCode" : (index != 0 ? `44-${index}` : "44") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA45, "QuestionCode" : (index != 0 ? `45-${index}` : "45") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA46, "QuestionCode" : (index != 0 ? `46-${index}` : "46") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA47, "QuestionCode" : (index != 0 ? `47-${index}` : "47") });
            body.push({ "ProfileEmail": email, "Text": value.qA48_1 ? value.qA48_1 + '/' + value.qA48_2 : "", "AnswerCode" : value.qA48_1 ? `EDCAAP0${index}-PRS` : "", "QuestionCode" : (index != 0 ? `48-${index}` : "48") });
            body.push({ "ProfileEmail": email, "Text": value.qA49_1 ? value.qA49_1 + '/' + value.qA49_2 : "", "AnswerCode" : value.qA49_1 ? `EDCAAP0${index}-PRT` : "", "QuestionCode" : (index != 0 ? `49-${index}` : "49") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA212, "QuestionCode" : (index != 0 ? `212-${index}` : "212") });
        });
        for (let i = qA43_50.length; i < 5; i ++) {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `43-${i}` : "43") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `44-${i}` : "44") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `45-${i}` : "45") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `46-${i}` : "46") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `47-${i}` : "47") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `48-${i}` : "48") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `49-${i}` : "49") });
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `212-${i}` : "212") });
        }

        let qA51 = 0, qA52 = 0, qA53 = 0, qA211 = 0, qA54 = 0, qA55 = 0, qA56 = 0, qA57 = 0, qA58 = 0, qA59 = 0, qA60 = 0, qA61 = 0, qA62 = 0, qA63 = 0;
        let qA51_ = "", qA52_ = "", qA53_ = "", qA211_ = "", qA54_ = "", qA55_ = "", qA56_ = "", qA57_ = "", qA58_ = "", qA59_ = "", qA60_ = "", qA61_ = "", qA62_ = "", qA63_ = "";
        
        qA51 += qA27 ? parseInt(qA27.slice(-1)) + 1 : 0;
        qA32_39.map((value, index) => {
            let duration = value.qA36 ? parseInt(value.qA36.slice(-1)) + 1 : 0;
            qA51 += duration;
            switch (value.qA33) {
                case "AB": qA52 += duration; break;
                case "BC": qA53 += duration; break;
                case "MB": qA211 += duration; break;
                case "NB": qA54 += duration; break;
                case "NL": qA55 += duration; break;
                case "NT": qA56 += duration; break;
                case "NS": qA57 += duration; break;
                case "NU": qA58 += duration; break;
                case "ON": qA59 += duration; break;
                case "PE": qA60 += duration; break;
                case "QC": qA61 += duration; break;
                case "SK": qA62 += duration; break;
                case "YT": qA63 += duration; break;
            }
        });
        {
            if (qA51 < 1) qA51_ = "EDCAEX00";
            else if (qA51 < 2) qA51_ = "EDCAEX01";
            else if (qA51 < 3) qA51_ = "EDCAEX02";
            else if (qA51 < 4) qA51_ = "EDCAEX03";
            else if (qA51 < 5) qA51_ = "EDCAEX04";
            else qA51_ = "EDCAEX05";

            if (qA52 < 1) qA52_ = "EDCAEXAB0";
            else if (qA52 < 2) qA52_ = "EDCAEXAB1";
            else if (qA52 < 3) qA52_ = "EDCAEXAB2";
            else if (qA52 < 4) qA52_ = "EDCAEXAB3";
            else if (qA52 < 5) qA52_ = "EDCAEXAB4";
            else qA52_ = "EDCAEXAB5";
            
            if (qA53 < 1) qA53_ = "EDCAEXBC0";
            else if (qA53 < 2) qA53_ = "EDCAEXBC1";
            else if (qA53 < 3) qA53_ = "EDCAEXBC2";
            else if (qA53 < 4) qA53_ = "EDCAEXBC3";
            else if (qA53 < 5) qA53_ = "EDCAEXBC4";
            else qA53_ = "EDCAEXBC5";

            if (qA211 < 1) qA211_ = "EDCAEXMB0";
            else if (qA211 < 2) qA211_ = "EDCAEXMB1";
            else if (qA211 < 3) qA211_ = "EDCAEXMB2";
            else if (qA211 < 4) qA211_ = "EDCAEXMB3";
            else if (qA211 < 5) qA211_ = "EDCAEXMB4";
            else qA211_ = "EDCAEXMB5";

            if (qA54 < 1) qA54_ = "EDCAEXNB0";
            else if (qA54 < 2) qA54_ = "EDCAEXNB1";
            else if (qA54 < 3) qA54_ = "EDCAEXNB2";
            else if (qA54 < 4) qA54_ = "EDCAEXNB3";
            else if (qA54 < 5) qA54_ = "EDCAEXNB4";
            else qA54_ = "EDCAEXNB5";

            if (qA55 < 1) qA55_ = "EDCAEXNL0";
            else if (qA55 < 2) qA55_ = "EDCAEXNL1";
            else if (qA55 < 3) qA55_ = "EDCAEXNL2";
            else if (qA55 < 4) qA55_ = "EDCAEXNL3";
            else if (qA55 < 5) qA55_ = "EDCAEXNL4";
            else qA55_ = "EDCAEXNL5";

            if (qA56 < 1) qA56_ = "EDCAEXNT0";
            else if (qA56 < 2) qA56_ = "EDCAEXNT1";
            else if (qA56 < 3) qA56_ = "EDCAEXNT2";
            else if (qA56 < 4) qA56_ = "EDCAEXNT3";
            else if (qA56 < 5) qA56_ = "EDCAEXNT4";
            else qA56_ = "EDCAEXNT5";

            if (qA57 < 1) qA57_ = "EDCAEXNS0";
            else if (qA57 < 2) qA57_ = "EDCAEXNS1";
            else if (qA57 < 3) qA57_ = "EDCAEXNS2";
            else if (qA57 < 4) qA57_ = "EDCAEXNS3";
            else if (qA57 < 5) qA57_ = "EDCAEXNS4";
            else qA57_ = "EDCAEXNS5";

            if (qA58 < 1) qA58_ = "EDCAEXNU0";
            else if (qA58 < 2) qA58_ = "EDCAEXNU1";
            else if (qA58 < 3) qA58_ = "EDCAEXNU2";
            else if (qA58 < 4) qA58_ = "EDCAEXNU3";
            else if (qA58 < 5) qA58_ = "EDCAEXNU4";
            else qA58_ = "EDCAEXNU5";

            if (qA59 < 1) qA59_ = "EDCAEXON0";
            else if (qA59 < 2) qA59_ = "EDCAEXON1";
            else if (qA59 < 3) qA59_ = "EDCAEXON2";
            else if (qA59 < 4) qA59_ = "EDCAEXON3";
            else if (qA59 < 5) qA59_ = "EDCAEXON4";
            else qA59_ = "EDCAEXON5";

            if (qA60 < 1) qA60_ = "EDCAEXPE0";
            else if (qA60 < 2) qA60_ = "EDCAEXPE1";
            else if (qA60 < 3) qA60_ = "EDCAEXPE2";
            else if (qA60 < 4) qA60_ = "EDCAEXPE3";
            else if (qA60 < 5) qA60_ = "EDCAEXPE4";
            else qA60_ = "EDCAEXPE5";

            if (qA61 < 1) qA61_ = "EDCAEXQC0";
            else if (qA61 < 2) qA61_ = "EDCAEXQC1";
            else if (qA61 < 3) qA61_ = "EDCAEXQC2";
            else if (qA61 < 4) qA61_ = "EDCAEXQC3";
            else if (qA61 < 5) qA61_ = "EDCAEXQC4";
            else qA61_ = "EDCAEXQC5";

            if (qA62 < 1) qA62_ = "EDCAEXSK0";
            else if (qA62 < 2) qA62_ = "EDCAEXSK1";
            else if (qA62 < 3) qA62_ = "EDCAEXSK2";
            else if (qA62 < 4) qA62_ = "EDCAEXSK3";
            else if (qA62 < 5) qA62_ = "EDCAEXSK4";
            else qA62_ = "EDCAEXSK5";

            if (qA63 < 1) qA63_ = "EDCAEXYT0";
            else if (qA63 < 2) qA63_ = "EDCAEXYT1";
            else if (qA63 < 3) qA63_ = "EDCAEXYT2";
            else if (qA63 < 4) qA63_ = "EDCAEXYT3";
            else if (qA63 < 5) qA63_ = "EDCAEXYT4";
            else qA63_ = "EDCAEXYT5";
        }

        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA51_}`, "QuestionCode" : "51" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA52_}`, "QuestionCode" : "52" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA53_}`, "QuestionCode" : "53" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA211_}`, "QuestionCode" : "211" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA54_}`, "QuestionCode" : "54" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA55_}`, "QuestionCode" : "55" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA56_}`, "QuestionCode" : "56" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA57_}`, "QuestionCode" : "57" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA58_}`, "QuestionCode" : "58" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA59_}`, "QuestionCode" : "59" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA60_}`, "QuestionCode" : "60" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA61_}`, "QuestionCode" : "61" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA62_}`, "QuestionCode" : "62" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : `${qA63_}`, "QuestionCode" : "63" });

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
        
        let delay = 0;
        if (this.props.qA22 == "EDCAC0" && this.state.qA31)
            delay = 1200;

        setTimeout(() => {
            this.props.history.push({
                pathname: '/question_advert',
                state: { nextUrl: '/question_education4', prevUrl: '/question_education2', direction: 'next' }
            });
        }, delay);
    }
    onClickBackPage = () => {
        this.saveResponse();

        this.setState({
            show: false
        });

        let delay = 0;
        if (this.props.qA22 == "EDCAC0" && this.state.qA31)
            delay = 1200;

        setTimeout(() => {
            this.props.history.push({
                pathname: '/question_advert',
                state: { nextUrl: '/question_education2', prevUrl: '/question_education1', direction: 'back' }
            });
        }, delay);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA22: getQASingle(state, "22"),
        qA27: getQASingle(state, "27"),
        qA31: getQASingle(state, "31"),
        qA234: getQASingle(state, "234"),
        qA32_39: getQAGroup(state, "32_39"),
        qA40: getQASingle(state, "40"),
        qA41: getQASingle(state, "41"),
        qA42: getQASingle(state, "42"),
        qA43_50: getQAGroup(state, "43_50")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionEducation2));
