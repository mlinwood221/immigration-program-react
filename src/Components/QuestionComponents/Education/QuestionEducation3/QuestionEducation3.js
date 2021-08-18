import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { updateAnswer } from "../../../../Redux/Actions/actions";
import { getQASelect, getStore, getQARequest } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import { SelectButtons } from "../../../BasicComponent/Button/button";
import { FirstCard, CardBody, CardFooter, CardHeader } from "../../../BasicComponent/Card/card";

import AmazonAdvert from '../../../BasicComponent/AmazonAdvert/AmazonAdvert'
import NextPreviousButtons from "../../NextPreviousButton/nextPreviousButton";

class QuestionEducation3 extends Component {
    state = { 
        show: false,
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
        const { qA51 } = this.props;
        let canForward = this.canForward();
        
        return ( 
            <React.Fragment>
                <FirstCard>
                    <CardHeader>
                        How many years did you study in Canada?
                    </CardHeader>
                    <CardBody>
                        <Row xs={3}>
                            <Col><SelectButtons
                                    className={qA51 === "EDCAEX00" ? "active" : ""} 
                                    onClick={() => this.updateSelectField("51", "EDCAEX00")}>{`< 1`}</SelectButtons></Col>
                            <Col><SelectButtons
                                    className={qA51 === "EDCAEX01" ? "active" : ""} 
                                    onClick={() => this.updateSelectField("51", "EDCAEX01")}>{`< 2`}</SelectButtons></Col>
                            <Col><SelectButtons
                                    className={qA51 === "EDCAEX02" ? "active" : ""} 
                                    onClick={() => this.updateSelectField("51", "EDCAEX02")}>{`< 3`}</SelectButtons></Col>
                            <Col><SelectButtons
                                    className={qA51 === "EDCAEX03" ? "active" : ""} 
                                    onClick={() => this.updateSelectField("51", "EDCAEX03")}>{`< 4`}</SelectButtons></Col>
                            <Col><SelectButtons
                                    className={qA51 === "EDCAEX04" ? "active" : ""} 
                                    onClick={() => this.updateSelectField("51", "EDCAEX04")}>{`< 5`}</SelectButtons></Col>
                            <Col><SelectButtons
                                    className={qA51 === "EDCAEX05" ? "active" : ""} 
                                    onClick={() => this.updateSelectField("51", "EDCAEX05")}>{`>= 5`}</SelectButtons></Col>
                        </Row>
                    </CardBody>
                    <CardFooter></CardFooter>
                </FirstCard>
                <AmazonAdvert className="mt-3" case="both" height={60} width={468} />
                <NextPreviousButtons onClickNextPage={this.onClickNextPage} canForward={canForward} onClickBackPage={this.onClickBackPage} canBack={true} />
            </React.Fragment>
         );
    }
    
    canForward = () => {
        const { qA51 } = this.props;
        if (!qA51) return false;
        return true;
    }

    updateTextField = (qId, answerCode, value) => {
        this.props.updateAnswer(qId, answerCode, value);
    }

    updateSelectField = (qId, value) => {
        this.props.updateAnswer(qId, value, '');
    }

    saveResponse = () => {
        const { store, qA51 } = this.props;
        
        let body = [];
        getQARequest(body, store, 51);

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
                pathname: '/question_education4',
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
                pathname: '/question_education2',
                state: { direction: 'back' }
            });
        }, 1200);
    }
}
 
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store : getStore(state),
        qA51: getQASelect(state, "51")
    };
};
  
const mapDispatchToProps = { updateAnswer };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(QuestionEducation3));
