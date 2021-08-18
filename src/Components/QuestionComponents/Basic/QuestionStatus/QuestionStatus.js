import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap"
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getQASingle, getQAGroup, getStore, getQAEmail } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import PlusIcon from "../../../../Assests/Icons/icon  plus.png";
import { AddButton } from "../../../BasicComponent/Button/button";
import { CustomGroup, CustomGroupDeleteButton } from "../../../BasicComponent/CustomGroup/customGroup";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SlideArea, SmoothSwitch} from "../../../BasicComponent/Card/card";
import { LabelDark } from "../../../BasicComponent/TextFields/textFields";
import { SelectButtons } from "../../../BasicComponent/Button/button";
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import CustomInput from "../../../BasicComponent/CustomControl/customInput";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'

import { countryCodes } from '../../../../Assests/country_codes';

import "./QuestionStatus.css";

class QuestionStatus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            qA8: props.qA8.length ? [ ...props.qA8] : [{ key: 0, qA8: '' }],
            qA9: props.qA9,
            qA10: props.qA10,
            qA11: props.qA11,
            qA12: props.qA12,
            qA13: props.qA13,
            qA13_1: props.qA13_1,
            qA14: props.qA14,
            qA14_1: props.qA14_1,
            qA15: props.qA15,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        }, 1000);
    }

    onAddCountry = () => {
        let tmp = [ ...this.state.qA8 ];
        let key = 0;

        if (tmp.length)
            key = tmp[tmp.length-1].key + 1;

        tmp.push({ key: key, qA8: '' });

        this.setState({
            qA8: tmp
        });
    }

    render() {
        let { show } = this.state;
        let { qA8, qA9, qA10, qA11, qA12, qA13, qA13_1, qA14, qA14_1, qA15 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        List all of your countries of citizenship(s)
                        <p>*All fields required</p>
                    </CardHeader>
                    <CardBody>
                        {qA8.map((value, index) => {
                            return (
                                <CustomGroup key={value.key}>
                                    <CustomInput 
                                        className={index ? "mt-2" : ""}
                                        suggestions={countryCodes} 
                                        groupId="8"
                                        index={index}
                                        qId="8" 
                                        onChange={this.updateGroupField} 
                                        prefix={`CITCN${index}`}
                                        value={value.qA8} 
                                        placeholder="Type country here..." />
                                    {index != 0 && (
                                        <CustomGroupDeleteButton onClick={() => this.deleteGroup("8", index)} />
                                    )}
                                </CustomGroup>
                            );
                        })}
                        {qA8.length < 3 && (
                            <p className="text-right mt-3">Add another country<AddButton onClick={this.onAddCountry}> <img src={PlusIcon}/> </AddButton></p> 
                        )}
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <SlideArea show={show}>
                    <Cards >
                        <CardHeader>Country of current residence</CardHeader>
                        <CardBody>
                            <CustomInput suggestions={countryCodes} qId="9" onChange={this.updateProperty} prefix="RESCN" value={qA9} placeholder="Type country here..." />  {/* prefix: RESCN- */}
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                    <AmazonAdvert className="mt-3 mb-3" case="both" height={60} width={468} />
                    <Cards >
                        <CardHeader>What is your marital status?</CardHeader>
                        <CardBody>                            
                            <CustomSelect 
                                options={[
                                    { name: 'Never Married/ Single',        value: 'PTNST0' },
                                    { name: 'Common-law',                   value: 'PTNST1' },
                                    { name: 'Married',                      value: 'PTNST2' },
                                    { name: 'Annulled Marriage',            value: 'PTNST3' },
                                    { name: 'Divorced/Legally Seperated',   value: 'PTNST4' },
                                    { name: 'Seperated',                    value: 'PTNST5' },
                                    { name: 'Widowed',                      value: 'PTNST6' }
                                ]}
                                placeholder="Select" 
                                qId="10"
                                onChange={this.updateProperty} 
                                value={qA10} />
                            <MoreOptions>
                                <SmoothSwitch identifier={(qA10 == "PTNST1" || qA10 == "PTNST2" || qA10 == "PTNST3" ? "case1" : "case2")}>
                                {qA10 == "PTNST1" || qA10 == "PTNST2" || qA10 == "PTNST3" ? (
                                    <React.Fragment>
                                        <FormGroup>
                                            <LabelDark>Is your partner a Canadian permanent resident, citizen, or registered Indian, and over 18 years old?</LabelDark>
                                            <Row>
                                                <Col>
                                                    <SelectButtons className={qA11 === "PTNCS1" ? "active" : ""} onClick={() => this.updateProperty("11", "PTNCS1")}>Yes</SelectButtons>
                                                </Col>
                                                <Col>
                                                    <SelectButtons className={qA11 === "PTNCS0" ? "active" : ""} onClick={() => this.updateProperty("11", "PTNCS0")}>No</SelectButtons>
                                                </Col>
                                            </Row>                                        
                                        </FormGroup>
                                        <SmoothSwitch identifier={qA11 == "PTNCS1" ? "case1" : "case2"}>
                                        {qA11 == "PTNCS1" ? (
                                            <FormGroup>
                                                <LabelDark>
                                                    What is the status of your Canadian partner?
                                                </LabelDark>
                                                <CustomSelect 
                                                    options={[
                                                        { name: 'Canadian Citizen',                 value: 'PTNCS2' },
                                                        { name: 'Canadian Permanent Resident',      value: 'PTNCS3' },
                                                        { name: 'Indian under Canadian Indian Act', value: 'PTNCS4' }
                                                    ]}
                                                    qId="12"
                                                    onChange={this.updateProperty}
                                                    value={qA12}
                                                    placeholder="Select" />
                                            </FormGroup>
                                        ) : (
                                            <span>Depending on answer, more required.</span>
                                        )}
                                        </SmoothSwitch>
                                    </React.Fragment>
                                ) : (
                                    <span>Depending on answer, more required.</span>
                                )}
                                </SmoothSwitch>
                            </MoreOptions>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                    <Cards >
                        <CardHeader>Do you or your spouse have any relatives over the age of 18 who are Canadian citizens, permanent residents, or registered Indians?</CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <SelectButtons 
                                        className={"btn-bg" + (qA13 === "FAMC01" ? " active" : "")}
                                        onClick={() => this.updateProperty("13", "FAMC01")}>Yes</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons 
                                        className={"btn-bg" + (qA13 === "FAMC00" ? " active" : "")} 
                                        onClick={() => this.updateProperty("13", "FAMC00")}>No</SelectButtons>
                                </Col>
                            </Row>
                            <MoreOptions>
                                <SmoothSwitch identifier={qA13 == "FAMC01" ? "case1" : "case2"}>
                                {qA13 == "FAMC01" && (
                                    <React.Fragment>
                                        <FormGroup>
                                            <LabelDark>
                                                Please specify the relationship
                                            </LabelDark>
                                            <CustomSelect 
                                                options={[
                                                    { name: 'Sibling',      value: 'FAMC02' },
                                                    { name: 'Parent',       value: 'FAMC03' },
                                                    { name: 'Grandparent',  value: 'FAMC04' },
                                                    { name: 'Grandchild',   value: 'FAMC05' },
                                                    { name: 'Aunt/Uncle',   value: 'FAMC06' },
                                                    { name: 'Niece/Nephew', value: 'FAMC07' },
                                                    { name: 'Cousin',       value: 'FAMC08' }
                                                ]}
                                                qId="13_1"
                                                onChange={this.updateProperty}
                                                value={qA13_1}
                                                placeholder="Select" />
                                        </FormGroup>
                                        <SmoothSwitch identifier={(qA13_1 == "FAMC02" || qA13_1 == "FAMC05" || qA13_1 == "FAMC06" || qA13_1 == "FAMC07" || qA13_1 == "FAMC08" ? "case1" : "case2")}>
                                        {(qA13_1 == "FAMC02" || qA13_1 == "FAMC05" || qA13_1 == "FAMC06" || qA13_1 == "FAMC07" || qA13_1 == "FAMC08") && (
                                            <React.Fragment>
                                                <FormGroup>
                                                    <LabelDark>
                                                        Does your relative(s) have a spouse, common-law partner, conjugal partner, or any blood relative who is either a Canadian citizen or a permanent resident? 
                                                    </LabelDark>
                                                    <CustomSelect 
                                                        options={[
                                                            { name: 'No',           value: 'FAMP00' },
                                                            { name: 'Yes',          value: 'FAMP01' },
                                                            { name: `I don't know`, value: 'FAMP13' }
                                                        ]}
                                                        qId="14"
                                                        onChange={this.updateProperty}
                                                        value={qA14}
                                                        placeholder="Select" />
                                                </FormGroup>
                                                <SmoothSwitch identifier={(qA14 == "FAMP01" ? "case1" : "case2")}>
                                                {qA14 == "FAMP01" && (
                                                    <FormGroup>
                                                        <LabelDark>
                                                            Please specify the relationship
                                                        </LabelDark>
                                                        <CustomSelect 
                                                            options={[
                                                                { name: 'Spouse',               value: 'FAMP02' },
                                                                { name: 'Common-law partner',   value: 'FAMP03' },
                                                                { name: 'Conjugal partner',     value: 'FAMP04' },
                                                                { name: 'Child',                value: 'FAMP05' },
                                                                { name: 'Parent',               value: 'FAMP06' },
                                                                { name: 'Grandchild',           value: 'FAMP07' },
                                                                { name: 'Granparent',           value: 'FAMP08' },
                                                                { name: 'Sibling',              value: 'FAMP09' },
                                                                { name: 'Aunt/Uncle',           value: 'FAMP10' },
                                                                { name: 'Niece/Nephew',         value: 'FAMP11' },
                                                                { name: 'Cousin',               value: 'FAMP12' }
                                                            ]}
                                                            qId="14_1"
                                                            onChange={this.updateProperty}
                                                            value={qA14_1}
                                                            placeholder="Select" />
                                                    </FormGroup>
                                                )}
                                                </SmoothSwitch>
                                            </React.Fragment>
                                        )}
                                        </SmoothSwitch>
                                    </React.Fragment>
                                )}
                                </SmoothSwitch>
                            </MoreOptions>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Cards>
                    <Cards >
                        <CardHeader>How many dependent children you have?</CardHeader>
                        <CardBody>                            
                            <CustomSelect 
                                options={[
                                    { name: '0',    value: 'FAMD00' },
                                    { name: '1',    value: 'FAMD01' },
                                    { name: '2',    value: 'FAMD02' },
                                    { name: '3',    value: 'FAMD03' },
                                    { name: '4',    value: 'FAMD04' },
                                    { name: '5',    value: 'FAMD05' },
                                    { name: '6',    value: 'FAMD06' },
                                    { name: '8',    value: 'FAMD07' },
                                    { name: '9',    value: 'FAMD08' },
                                    { name: '10 or more', value: 'FAMD09' }
                                ]}
                                qId="15"
                                onChange={this.updateProperty}
                                value={qA15}
                                placeholder="Select" />
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
        let { qA8, qA9, qA10, qA11, qA12, qA13, qA13_1, qA14, qA14_1, qA15 } = this.state;

        for (let i = 0; i < qA8.length; i ++) {
            if (!qA8[i].qA8)
                return false;
        }

        if (!qA9)
            return false;
            
        if (!qA10) {
            return false;
        }
        else if (qA10 == "PTNST1" || qA10 == "PTNST2" || qA10 == "PTNST3") {
            if (!qA11) {
                return false;
            }
            else if (qA11 == "PTNCS1") {
                if (!qA12) {
                    return false;
                }
            } 
            else {
                this.state.qA12 = '';
            }
        }
        else {
            this.state.qA11 = '';
        }

        if (!qA13) {
            return false;
        }
        else if (qA13 == "FAMC01") {
            if (!qA13_1) {
                return false;
            }
            else if (qA13_1 == "FAMC02" || qA13_1 == "FAMC05" || qA13_1 == "FAMC06" || qA13_1 == "FAMC07" || qA13_1 == "FAMC08") {
                if (!qA14) {
                    return false;
                }
                else if (qA14 == "FAMP01") {
                    if (!qA14_1)
                        return false;
                }
                else {
                    this.state.qA14_1 = '';
                }
            }
            else {
                this.state.qA14 = this.state.qA14_1 = '';
            }
        }
        else {
            this.state.qA13_1 = this.state.qA14 = this.state.qA14_1 = '';
        }

        if (!qA15)
            return false;

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
        let { store, isSpouse } = this.props;
        let { qA8, qA9, qA10, qA11, qA12, qA13, qA13_1, qA14, qA14_1, qA15 } = this.state;
        let email = getQAEmail(store);
        let body = [];

        // update redux
        this.props.updateAnswer({
            Q8: [ ...qA8 ], Q9: qA9, Q10: qA10, Q11: qA11, Q12: qA12, Q13: qA13, Q13_1: qA13_1, Q14: qA14, Q14_1: qA14_1, Q15: qA15
        });

        // call SaveUserResponse api
        qA8.map((value, index) => {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : value.qA8, "QuestionCode" : (index != 0 ? `8-${index}` : "8") });
        });
        for (let i = qA8.length; i < 3; i ++) {
            body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : "", "QuestionCode" : (i != 0 ? `8-${i}` : "8") });
        }
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA9, "QuestionCode" : "9" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA10, "QuestionCode" : "10" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA11, "QuestionCode" : "11" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA12, "QuestionCode" : "12" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA13, "QuestionCode" : "13" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA13_1, "QuestionCode" : "13-1" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA14, "QuestionCode" : "14" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA14_1, "QuestionCode" : "14-1" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA15, "QuestionCode" : "15" });

        let qA217 = "", qA219 = "";

        if ((qA10 == "PTNST1" || qA10 == "PTNST2" || qA10 == "PTNST3") && qA11 == "PTNCS0")
            qA217 = "CALWCA0";
        else
            qA217 = "CALWCA1";
        if (isSpouse)
            qA219 = "PROFCA";
        else
            qA219 = "PROFPR";
            
        this.props.updateAnswer({
            Q217: qA217
        });

        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA217, "QuestionCode" : "217" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA219, "QuestionCode" : "219" });

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
        
        setTimeout(() => {
            this.props.history.push({
                pathname: '/question_travel',
                state: { nextUrl: '/question_travel', prevUrl: '/question_status', direction: 'next' }
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
                pathname: '/',
                state: { nextUrl: '/question_status', prevUrl: '/question_disclaimer', direction: 'back' }
            });
        }, 1200);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        isSpouse: state.qAnswers.isSpouse ? state.qAnswers.isSpouse : false,
        qA8: getQAGroup(state, "8"),
        qA9: getQASingle(state, "9"),
        qA10: getQASingle(state, "10"),
        qA11: getQASingle(state, "11"),
        qA12: getQASingle(state, "12"),
        qA13: getQASingle(state, "13"),
        qA13_1: getQASingle(state, "13_1"),
        qA14: getQASingle(state, "14"),
        qA14_1: getQASingle(state, "14_1"),
        qA15: getQASingle(state, "15")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionStatus));
