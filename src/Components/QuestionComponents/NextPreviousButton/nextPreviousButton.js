import React, { Component } from 'react';
import { NextButton,ArrowButton } from "../../BasicComponent/Button/button"
import IconArrowLeft from "../../../Assests/Icons/icon-arrow-left-white.svg"
import IconArrowRight from "../../../Assests/Icons/icon-arrow-right-white.svg"
import "./nextPreviousButton.css"

class NextPreviosButton extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="nextprevious">
                    {this.props.canBack ? (
                        <ArrowButton onClick={this.props.onClickBackPage}><img src={IconArrowLeft} style={{verticalAlign: 'middle', position:'relative', top: '-1px'}} alt="" /></ArrowButton>
                    ) : (
                        <ArrowButton className="disable"><img src={IconArrowLeft} style={{verticalAlign: 'middle', position:'relative', top: '-1px'}} alt="" /></ArrowButton>
                    )}
                    {this.props.canForward ? (
                        <NextButton onClick={this.props.onClickNextPage}><img src={IconArrowRight} style={{verticalAlign: 'middle', position:'relative', top: '-1px', marginLeft: '6px'}} alt="" /></NextButton>
                    ) : (
                        <NextButton className="disable"><img src={IconArrowRight} style={{verticalAlign: 'middle', position:'relative', top: '-1px', marginLeft: '6px'}} alt="" /></NextButton>
                    )}
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default NextPreviosButton;
