import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getQAEmail, getStore } from "../../../../Redux/Selectors/qAnswers";
import QAService from "../../../../Services/qa.service";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import QuestionRecommendLoading from '../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommendLoading';
import QuestionRecommendCRS from '../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommendCRS';
import QuestionRecommendCRSCircle from '../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommendCRSCircle';
import QuestionRecommendWork from '../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommendWork';
import QuestionRecommendProgram from '../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommendProgram';
import { RecommendTabButton } from '../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommendTab';

import { Fade } from "../../../../Components/BasicComponent/Card/card";
import { RecommendButton } from '../../../../Components/BasicComponent/Button/button';
import { CustomModal, CustomModalHeader, CustomModalBody, CustomModalFooter } from "../../../../Components/BasicComponent/Modal/modal";

import "./QuestionRecomendView.css";
import { trackEndOfQuestionnare, trackCalculationEnd } from '../../../../util/tracking';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-187241314-2');

class QuestionRecomendView extends Component {
    constructor(props) {
        super(props)

        this.myRef = React.createRef()   // Create a ref object 

        this.state = {
            crsPoint: 0,
            visibleModal: false,
            needRecommendations: true,
            crsRecommendations: [],
            workRecommendations: [],
            programRecommendations: [],
            tab: 0  // 0: loading, 1: express entry, 2: work permits, 3: other programs
        }
    }

    async componentDidMount() {
        const { store, isSpouse } = this.props;
        const email = isSpouse ? store.qAnswers.orgEmail : getQAEmail(store);
        // const email = "HDuffTest2@gmail.com";

        // trackEndOfQuestionnare();
        trackCalculationEnd();

        window.scrollTo(0, 0);

        await QAService.getCrsPoints(email)
            .then(res => {
                this.setState({
                    crsPoint: res.data.crsPoints,
                    needRecommendations: res.data.needRecommendations
                });
            });

        await QAService.getCrsRecommendations(email)
            .then(res => {
                this.setState({
                    crsRecommendations: res.data
                });
            });

        await QAService.getProgramRecommendations(email)
            .then(res => {
                let work, program;
                work = res.data.filter((value, index) => {
                    return value.category == "Work-Permit";
                });
                program = res.data.filter((value, index) => {
                    return value.category != "Work-Permit";
                });
                this.setState({
                    workRecommendations: work,
                    programRecommendations: program
                });

                setTimeout(() => {
                    this.setState({
                        tab: 1
                    });
                }, 2000);
            });
    }

    onClickTab = (num) => {
        this.setState({
            tab: num
        });
    }

    showModal = (e) => {
        e.preventDefault();
        this.setState({
            visibleModal: true
        });
    }

    hideModal = (e) => {
        e.preventDefault();
        this.setState({
            visibleModal: false
        });
    }

    onClickBookAppointment = () => {
        window.open("http://www.brightimmigration.com/immproved", "_blank");
    }

    render() {
        const { tab, crsPoint, visibleModal, needRecommendations, crsRecommendations, workRecommendations, programRecommendations } = this.state;

        return (
            <div className="question-area" ref={this.myRef}>
                <Fade timeout={1000} identifier={tab == 0 ? "loading" : "loaded"}>
                    {tab == 0 ? (
                        <QuestionRecommendLoading />
                    ) : (
                            <div>
                                <Row className="mx-3" xs={3} style={{ marginTop: "20px", background: "var(--primary)", borderRadius: "4px" }}>
                                    <Col className="px-0" style={{ left: "-2px" }}>
                                        <RecommendTabButton className={tab == 1 ? "active" : ""} onClick={() => this.onClickTab(1)}>Express Entry</RecommendTabButton>
                                    </Col>
                                    <Col className="px-0">
                                        <RecommendTabButton className={tab == 2 ? "active" : ""} onClick={() => this.onClickTab(2)}>Work Permits</RecommendTabButton>
                                    </Col>
                                    <Col className="px-0" style={{ left: "2px" }}>
                                        <RecommendTabButton className={tab == 3 ? "active" : ""} onClick={() => this.onClickTab(3)}>Other Programs</RecommendTabButton>
                                    </Col>
                                </Row>
                                <Fade timeout={700} identifier={tab}>
                                    {tab == 1 && (
                                        <>
                                            <RecommendButton className="mt-5" onClick={this.showModal} >Draw Points</RecommendButton>
                                            <QuestionRecommendCRSCircle
                                                crsPoint={crsPoint}
                                                needRecommendations={needRecommendations}
                                                crsRecommendations={crsRecommendations} />
                                            <QuestionRecommendCRS
                                                needRecommendations={needRecommendations}
                                                crsRecommendations={crsRecommendations}
                                                onClickBookAppointment={this.onClickBookAppointment} />
                                        </>
                                    )}
                                    {tab == 2 && (
                                        <>
                                            <QuestionRecommendWork
                                                workRecommendations={workRecommendations}
                                                onClickBookAppointment={this.onClickBookAppointment} />
                                            {!workRecommendations.length &&
                                                <QuestionRecommendCRS
                                                    needRecommendations={needRecommendations}
                                                    crsRecommendations={crsRecommendations}
                                                    onClickBookAppointment={this.onClickBookAppointment} />
                                            }
                                        </>
                                    )}
                                    {tab == 3 && (
                                        <>
                                            <QuestionRecommendProgram
                                                programRecommendations={programRecommendations}
                                                onClickBookAppointment={this.onClickBookAppointment} />
                                            {!programRecommendations.length &&
                                                <QuestionRecommendCRS
                                                    needRecommendations={needRecommendations}
                                                    crsRecommendations={crsRecommendations}
                                                    onClickBookAppointment={this.onClickBookAppointment} />
                                            }
                                        </>
                                    )}
                                </Fade>
                            </div>
                        )}
                </Fade>
                <CustomModal show={visibleModal}>
                    <CustomModalHeader onClick={this.hideModal}>
                        Close
                    </CustomModalHeader>
                    <CustomModalBody>
                        Federal Skilled Worker (FSW) – 468 Points – Date Dec 23 2020 (all program draw)
                        Canadian Experience Class (CEC) – 454 Points Date: Jan 21 2021
                        Federal Skilled Trade (FST)- 415 Date: Aug 6 2020
                    </CustomModalBody>
                    <CustomModalFooter>
                    </CustomModalFooter>
                </CustomModal>
            </div>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store: getStore(state),
        isSpouse: state.qAnswers.isSpouse ? state.qAnswers.isSpouse : false
    };
};

const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionRecomendView);
