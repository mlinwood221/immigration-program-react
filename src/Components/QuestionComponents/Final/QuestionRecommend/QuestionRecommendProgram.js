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
            return {cursorProgram: props.programRecommendations.length < 3 ? props.programRecommendations.length : 3};
        else
            return state;
    }

    addCursorProgram = () => {
        let { cursorProgram } = this.state;
        const { programRecommendations } = this.props;

        cursorProgram += 3;
        if (cursorProgram > programRecommendations.length)
            cursorProgram = programRecommendations.length;

        this.setState({
            cursorProgram: cursorProgram
        });
    }

    render() {
        const { cursorProgram } = this.state;
        const { programRecommendations } = this.props;

        return programRecommendations.length ? (
                <QuestionRecommendBody 
                    title="Top Program Recommendations" 
                    total={`${programRecommendations.length}`} 
                    hideAddMore={cursorProgram == programRecommendations.length ? true : false} 
                    onClick={this.addCursorProgram}
                    >
                    <Row lg={2} xs={1}>
                        {programRecommendations.slice(0, cursorProgram).map((recommendation, index) => {
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
                    no programs recommended at this time.
                </QuestionRecommendHeader2>
            );
    }
}
