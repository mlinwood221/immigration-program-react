import React, { Component } from 'react';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';
import "./card.css";
import { Card } from "react-bootstrap"

export const FirstCard=(props)=>{
    return(
        <div className="first-card">
            <Card className={props.className ? props.className : ""} style={props.style} >
                    {props.children}
            </Card>
        </div>
    )
}
export const Cards=(props)=>{
    return(
        <Card className={props.className ? props.className : ""} style={props.style} >
                {props.children}
        </Card>
    )
}
export const CardHeader=(props)=>{
    return(
        <Card.Header className={props.className ? "t-3 " + props.className: "mt-3 "}>
                {props.children}
        </Card.Header>
    )
}
export const CardHeaderRecommend=(props)=> {
    return (
        <Card.Header className={props.className ? props.className + "recommendation" : "recommendation"} style={props.style} >
            {props.children}
        </Card.Header>
    )
}
export const CardHeaderRecommend2=(props)=> {
    return (
        <Card.Header className={props.className ? props.className + "recommendation2" : "recommendation2"} style={props.style} >
            {props.children}
        </Card.Header>
    )
}
export const CardBody=(props)=>{
    return(
        <Card.Body className={props.className?"card-body bg-white "+props.className:"card-body bg-white"}>
                {props.children}
        </Card.Body>
    )
}
export const CardFooter=(props)=>{
    return(
        <Card.Footer className={props.className?"card-footer bg-white "+props.className:"card-footer bg-white"}>
                {props.children}
        </Card.Footer>
    )
}
export const MoreOptions = (props) => {
    return (
        <div className={props.className ? "more-options" + props.className : "more-options"}>
            {props.children}
        </div>
    )
}

export const SlideArea = class SlideArea extends Component {
    constructor(props) {
        super(props);

        this.state = {            
            defaultStyle: {
                transition: `all 700ms`,
                position: 'relative'
            },
            transitionStyles: {
                entering: { top: '0px' },
                entered: { top: '0px' },
                exiting: { top: '0px' },
                exited: { top: '0px' },
            }
        }
    }

    componentDidMount = () => {        
        let height = this.element ? this.element.clientHeight : 0;
        this.setState({
            transitionStyles: {
                ...this.state.transitionStyles,
                entering: { top: `${(-1) * height - 50}px` },
                exited: { top: `${(-1) * height - 50}px` }
            }
        });

        setTimeout(() => {
            if (this.props.show && this.wrappedRef)
                this.wrappedRef.style.overflow = "unset";
        }, 4000);
    }
    
    componentDidUpdate = () => {        
        let height = this.element ? this.element.clientHeight : 0;
        if (this.state.transitionStyles.entering.top !== `${(-1) * height - 50}px`)
        {
            this.setState({
                transitionStyles: {
                    ...this.state.transitionStyles,
                    entering: { top: `${(-1) * height - 50}px` },
                    exited: { top: `${(-1) * height - 50}px` }
                }
            });
        }
    }

    onExit = (node) => {
        node.parentNode.style.overflow = "hidden";
    }

    render() {
        const {defaultStyle, transitionStyles} = this.state;

        return (
            <div className={this.props.className ? "slide-area" + this.props.className : "slide-area"} ref={wrappedRef => {this.wrappedRef = wrappedRef}}>
                <Transition in={this.props.show} timeout={500} onExit={this.onExit}>
                    {state => (
                    <div ref={(element) => {this.element = element}} style={{...defaultStyle, ...transitionStyles[state]}}>
                        {this.props.children}
                    </div>)}
                </Transition>
            </div>
        );
    }
}

export const SmoothSwitch = class SmoothSwitch extends Component {    
    onEnter = element => {
        element.parentNode.parentNode.style.height = `${this.previousHeight}px`;
        element.style.position = "absolute";
        element.style.opacity = "0";
        
        this.previousHeight = element.offsetHeight;
    }

    onEntering = element => {
        element.style.position = "absolute";
        element.style.opacity = "1";
        element.style.transition = "all .2s";
        element.style.width = "100%";
        
        element.parentNode.parentNode.style.height = `${element.offsetHeight}px`;
        element.parentNode.parentNode.style.overflow = "hidden";
    }

    onEntered = element => {
        element.style.position = "relative";
        element.parentNode.parentNode.style.overflow = "unset";
        element.parentNode.parentNode.style.height = "unset";
    }

    onExit = element => {
        element.style.position = "absolute";
        element.style.opacity = "1";
    }

    onExiting = element => {
        element.style.position = "absolute";
        element.style.opacity = "0";
        element.style.transition = "all .2s";
    }
    
    onExited = element => {
    }

    componentDidMount = () => {
        if (this.wrappedRef) {
            this.previousHeight = this.wrappedRef.offsetHeight;
            this.wrappedRef.style.height = `${this.previousHeight}px`;
        }
    }

    render() {
        return (
            <div className="smooth-switch" ref={wrappedRef => {this.wrappedRef = wrappedRef}}>
            <TransitionGroup>
                <CSSTransition
                    key={this.props.identifier}
                    timeout={200}
                    onEnter={this.onEnter}
                    onEntering={this.onEntering}
                    onEntered={this.onEntered}
                    onExit={this.onExit}
                    onExiting={this.onExiting}
                    onExited={this.onExited}>
                    <div className="smooth-switch-elements">
                        {this.props.children}
                    </div>
                </CSSTransition>
            </TransitionGroup>
            </div>
        );
    }
}

export const Fade = class Fade extends Component {
    onEnter = element => {
        element.style.position = "absolute";
        element.style.opacity = "0";
        element.style.width = "100%";
    }

    onEntering = element => {
        element.style.position = "absolute";
        element.style.opacity = "1";
        element.style.transition = `all ${this.props.timeout}ms`;
    }

    onEntered = element => {
        element.style.position = "relative";
    }

    onExit = element => {
        element.style.width = "100%";
        element.style.position = "absolute";
        element.style.opacity = "1";
    }

    onExiting = element => {
        element.style.position = "absolute";
        element.style.opacity = "0";
        element.style.transition = `all ${this.props.timeout}ms`;
    }
    
    onExited = element => {
    }

    render() {
        return (
            <TransitionGroup>
                <CSSTransition
                    key={this.props.identifier}
                    timeout={this.props.timeout}
                    onEnter={this.onEnter}
                    onEntering={this.onEntering}
                    onEntered={this.onEntered}
                    onExit={this.onExit}
                    onExiting={this.onExiting}
                    onExited={this.onExited}>
                    <div style={{position:"relative"}}>
                        {this.props.children}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}