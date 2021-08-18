import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getStore, getQAEmail, getQASingle, getQAGroup } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import { SelectButtons } from "../../../BasicComponent/Button/button";
import { LabelDark } from "../../../BasicComponent/TextFields/textFields";
import { FirstCard, Cards, CardBody, CardFooter, CardHeader, MoreOptions, SlideArea, SmoothSwitch } from "../../../BasicComponent/Card/card";
import CustomSelect from "../../../BasicComponent/CustomControl/customSelect";
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";
import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'

import './QuestionTravel.css';

const visitedCountries = [
    'Austria', 'Belgium', 'Bulgaria', 'Chile', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hong Kong', 'Hungary', 'Iceland', 'Ireland', 'Israel', 'Italy', 'Japan', 'Republic of Korea', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Monaco', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'Singapore', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'United Arab Emirates', 'United Kingdom', 'United States', 'Vatican City State'
];

class QuestionTravel extends Component {
    state = { 
     }
    constructor(props) {
        super(props)
    
        this.state = {
            show: false,
            qA18_1: props.qA18_1,
            qA18_2: props.qA18_2,
            qA19: props.qA19
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
        let { qA18_1, qA18_2, qA19 } = this.state;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        Have you travelled to Canada in the last 10 years?
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <SelectButtons 
                                    onClick={() => this.updateProperty("18_1", "TRACA1")} 
                                    className={"btn-bg " + (qA18_1 == "TRACA1" ? "active" : "")}>Yes</SelectButtons>
                            </Col>
                            <Col>
                                <SelectButtons 
                                    onClick={() => this.updateProperty("18_1", "TRACA0")} 
                                    className={"btn-bg " + (qA18_1 == "TRACA0" ? "active" : "")}>No</SelectButtons>
                            </Col>
                        </Row>
                        <MoreOptions>
                            <SmoothSwitch identifier={qA18_1 == "TRACA1" ? "case1" : "case2"}>
                                {qA18_1 == "TRACA1" ? (
                                    <FormGroup className="mb-0">
                                        <LabelDark>
                                            Please select the statuses that have applied to you:
                                        </LabelDark>
                                        <CustomSelect 
                                            options={[
                                                { name: 'Visitor',              value: 'TRACB0' },
                                                { name: 'Worker',               value: 'TRACB1' },
                                                { name: 'Student',              value: 'TRACB2' },
                                                { name: 'Refugee',              value: 'TRACB3' },
                                                { name: 'Permanent Resident',   value: 'TRACB4' },
                                                { name: 'Citizen',              value: 'TRACB5' },
                                                { name: 'Other',                value: 'TRACB6' }
                                            ]}
                                            qId="18_2"
                                            onChange={this.updateProperty}
                                            value={qA18_2}
                                            multiple
                                            placeholder="Select" />
                                    </FormGroup>
                                ) : (
                                    <span>If yes, more required.</span>
                                )}
                            </SmoothSwitch>
                        </MoreOptions>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <SlideArea show={show}>
                    <Cards>
                        <CardHeader>Have you visited any one of these countries?</CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Row md={3} xs={2} sm={2}>
                                    { visitedCountries.map((value) => {
                                        return <Col key={value}><span>{value}</span></Col>;
                                    })}
                                </Row>
                            </FormGroup>
                            <Row>
                                <Col>
                                    <SelectButtons 
                                        onClick={() => this.updateProperty("19", "TRAC01")} 
                                        className={"btn-bg " + (qA19 == "TRAC01" ? "active" : "")}>Yes</SelectButtons>
                                </Col>
                                <Col>
                                    <SelectButtons 
                                        onClick={() => this.updateProperty("19", "TRAC00")} 
                                        className={"btn-bg " + (qA19 == "TRAC00" ? "active" : "")}>No</SelectButtons>
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
        let { qA18_1, qA18_2, qA19 } = this.state;

        if (!qA18_1) {
            return false;
        }
        else if (qA18_1 == "TRACA1") {
            if (!qA18_2)
                return false;
        }
        else {
            this.state.qA18_2 = [];
        }

        if (!qA19)
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
        let { qA18_1, qA18_2, qA19 } = this.state;
        let email = getQAEmail(store);
        let body = [];
        
        // update redux
        this.props.updateAnswer({
            Q18_1: qA18_1, Q18_2: qA18_2, Q19: qA19
        });

        // call SaveUserResponse api
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA18_1, "QuestionCode" : "18-1" });
        body.push({ "ProfileEmail": email, "Text": "", "MultiAnswerCodes" : qA18_2, "QuestionCode" : "18-2" });
        body.push({ "ProfileEmail": email, "Text": "", "AnswerCode" : qA19, "QuestionCode" : "19" });

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
                pathname: '/question_advert',
                state: { nextUrl: '/question_education1', prevUrl: '/question_travel', direction: 'next' }
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
                state: { nextUrl: '/question_travel', prevUrl: '/question_status', direction: 'back' }
            });
        }, 1200);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA18_1: getQASingle(state, "18_1"),
        qA18_2: getQASingle(state, "18_2"),
        qA19: getQASingle(state, "19")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionTravel));
