import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import { QuestionRecommendHeader, QuestionRecommendBody } from "../../../../Components/QuestionComponents/Final/QuestionRecommend/QuestionRecommend";
import { Cards, CardHeaderRecommend2, CardBody, CardFooter } from "../../../../Components/BasicComponent/Card/card";
import { RecommendButton } from '../../../BasicComponent/Button/button';

export default class QuestionRecommendCRS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cursorCrs: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.cursorCrs == 0)
            return { cursorCrs: props.crsRecommendations.length < 3 ? props.crsRecommendations.length : 3 };
        else
            return state;
    }

    addCursorCrs = () => {
        let { cursorCrs } = this.state;
        const { crsRecommendations } = this.props;

        cursorCrs += 3;
        if (cursorCrs > crsRecommendations.length)
            cursorCrs = crsRecommendations.length;

        this.setState({
            cursorCrs: cursorCrs
        });
    }

    render() {
        const { cursorCrs } = this.state;
        const { needRecommendations, crsRecommendations } = this.props;

        return (
            <>
                {needRecommendations && crsRecommendations.length ? (
                    <QuestionRecommendBody
                        title="Improve your CRS Score"
                        total={`${crsRecommendations.length}`}
                        hideAddMore={cursorCrs == crsRecommendations.length ? true : false}
                        onClick={this.addCursorCrs}
                    >
                        <Row lg={2} xs={1}>
                            {crsRecommendations.slice(0, cursorCrs).map((recommendation, index) => {
                                let description = recommendation.description.split("\n");
                                return (
                                    <Col key={index}>
                                        <Cards>
                                            <CardHeaderRecommend2>
                                                {recommendation.crsPoints + "pts."}
                                            </CardHeaderRecommend2>
                                            <CardBody className="mt-5">
                                                {description.map((value, index) => {
                                                    return <li>{value}</li>;
                                                })}
                                                <div>
                                                    {/* <LinkButton className="flat-left">Learn more</LinkButton> */}
                                                </div>
                                            </CardBody>
                                            <CardFooter></CardFooter>
                                        </Cards>
                                    </Col>
                                );
                            })}
                        </Row>
                    </QuestionRecommendBody>
                ) : ""}
                < RecommendButton className="mt-5" onClick={this.props.onClickBookAppointment}>Book Appointment</RecommendButton>

            </>
        );
    }
}