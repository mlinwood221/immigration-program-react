import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import { QuestionRecommendHeader2, QuestionRecommendBody } from "../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommend";
import { Cards, CardHeaderRecommend, CardBody, CardFooter } from "../../../../Components/BasicComponent/Card/card";
import { LinkButton, RecommendButton } from '../../../../Components/BasicComponent/Button/button';

export default class QuestionRecommendProgram extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cursorProgram: 0
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        if (state.cursorProgram == 0)
            return {cursorProgram: props.workRecommendations.length < 3 ? props.workRecommendations.length : 3};
        else
            return state;
    }

    addCursorProgram = () => {
        let { cursorProgram } = this.state;
        const { workRecommendations } = this.props;

        cursorProgram += 3;
        if (cursorProgram > workRecommendations.length)
            cursorProgram = workRecommendations.length;

        this.setState({
            cursorProgram: cursorProgram
        });
    }

    render() {
        const { cursorProgram } = this.state;
        const { workRecommendations } = this.props;

        return workRecommendations.length ? (
                <QuestionRecommendBody 
                    title="Top Program Recommendations" 
                    total={`${workRecommendations.length}`} 
                    hideAddMore={cursorProgram == workRecommendations.length ? true : false} 
                    onClick={this.addCursorProgram}
                    >
                    <Row lg={2} xs={1}>
                        {workRecommendations.slice(0, cursorProgram).map((recommendation, index) => {
                            return (
                                <Col key={recommendation.id}>
                                    <Cards>
                                        <CardHeaderRecommend>
                                            {recommendation.programName}
                                        </CardHeaderRecommend>
                                        <CardBody className="mt-3">
                                            <p>{recommendation.description}</p>
                                            <div>
                                                <LinkButton href={recommendation.detailsLink} className="float-left">Learn more</LinkButton>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div style={{width:"100%", textAlign:"center", marginTop:"15px"}}>
                                                <RecommendButton onClick={this.props.onClickBookAppointment}>Book</RecommendButton>
                                            </div>
                                        </CardBody>
                                        <CardFooter></CardFooter>
                                    </Cards>
                                </Col>
                            );
                        })}                  
                    </Row>
                </QuestionRecommendBody>
            ) : (
                <QuestionRecommendHeader2>
                    no work permit programs recommended at this time.
                </QuestionRecommendHeader2>
            );
    }
}