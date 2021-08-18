import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import Header from "../Components/BasicComponent/Header/header"
import Footer from "../Components/BasicComponent/Header/footer"
import CustomProgressBar from "../Components/BasicComponent/CustomProgressBar/CustomProgressBar"
import AmazonAdvert from '../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

import HomepageView             from "../View/HomepageView/HomepageView";
import AboutUsView              from "../View/AboutUsView/AboutUsView";

import QuestionPersonalView     from "../View/QuestionsView/Basic/QuestionPersonalView/QuestionPersonalView";
import QuestionDisclaimerView   from "../View/QuestionsView/Basic/QuestionDisclaimerView/QuestionDisclaimerView";
import QuestionStatusView       from "../View/QuestionsView/Basic/QuestionStatusView/QuestionStatusView";
import QuestionTravelView       from "../View/QuestionsView/Basic/QuestionTravelView/QuestionTravelView";
import QuestionEducation1View   from "../View/QuestionsView/Education/QuestionEducation1View/QuestionEducation1View";
import QuestionEducation2View   from "../View/QuestionsView/Education/QuestionEducation2View/QuestionEducation2View";
import QuestionEducation4View   from "../View/QuestionsView/Education/QuestionEducation4View/QuestionEducation4View";
import QuestionWork1View        from "../View/QuestionsView/Work/QuestionWork1View/QuestionWork1View";
import QuestionWork2View        from "../View/QuestionsView/Work/QuestionWork2View/QuestionWork2View";
import QuestionWork3View        from "../View/QuestionsView/Work/QuestionWork3View/QuestionWork3View";
import QuestionWork4View        from "../View/QuestionsView/Work/QuestionWork4View/QuestionWork4View";
import QuestionWork5View        from "../View/QuestionsView/Work/QuestionWork5View/QuestionWork5View";
import QuestionLanguage1View    from "../View/QuestionsView/Language/QuestionLanguage1View/QuestionLanguage1View";
import QuestionLanguage2View    from "../View/QuestionsView/Language/QuestionLanguage2View/QuestionLanguage2View";
import QuestionLanguage3View    from "../View/QuestionsView/Language/QuestionLanguage3View/QuestionLanguage3View";
import QuestionFinalView        from "../View/QuestionsView/Final/QuestionFinalView/QuestionFinalView";
import QuestionRecomendView     from "../View/QuestionsView/Final/QuestionRecomendView/QuestionRecomendView";
import QuestionAdvertView       from '../View/QuestionsView/AdvertView/QuestionAdvertView';
import ServerErrorView          from '../View/QuestionsView/Other/ServerErrorView';
import "./routing.css";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ROUTES = [
    { path: "/", progress: 20 },
    { path: "/question_disclaimer", progress: 20 },
    { path: "/question_status", progress: 20 },
    { path: "/question_travel", progress: 20 },
    { path: "/question_education1", progress: 40 },
    { path: "/question_education2", progress: 40 },
    { path: "/question_education3", progress: 40 },
    { path: "/question_education4", progress: 40 },
    { path: "/question_work1", progress: 60 },
    { path: "/question_work2", progress: 60 },
    { path: "/question_work3", progress: 60 },
    { path: "/question_work4", progress: 60 },
    { path: "/question_work5", progress: 60 },
    { path: "/question_language1", progress: 80 },
    { path: "/question_language2", progress: 80 },
    { path: "/question_language3", progress: 80 },
    { path: "/question_final", progress: 90 },
    { path: "/question_recommendation", progress: 100 }            
];

class Routing extends Component {
    getAnimation = (location) => {
        let transitionName = 'transition-page-forward';
        if (location.pathname === '/question_recommendation') {
            transitionName = "transition-fade";
        }
        else if (location.pathname === '/server_error') {
            transitionName = 'transition-fade';
        }
        else {
            if (location.state && location.state.direction === 'back')
                transitionName = "transition-page-back";
        }
        return transitionName;
    }
    getProgress = (location) => {
        let route = ROUTES.find((route) => {
            return route.path === location.pathname;
        });

        return route ? route.progress : 0;
    }
    render() { 
        return ( 
            <React.Fragment >
                <Header/>
                <Container fluid className="main-container">
                    <Route render={({location}) => {
                        this.animation = this.getAnimation(location);
                        return (
                        <React.Fragment>
                            {location.pathname !== '/server_error' && location.pathname !== '/question_recommendation' &&
                                location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/privacy' && location.pathname !== '/terms' && (
                                <CustomProgressBar className="question-progressbar" now={this.getProgress(location)} />
                            )}
                            {location.pathname !== '/question_recommendation' && location.pathname !== '/server_error' && 
                                location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/privacy' && location.pathname !== '/terms' && (
                                <div className="card left-screen-card">
                                    <AmazonAdvert case="desktop" height={600} />
                                </div>
                            )}
                            <Switch location={location}>
                                <Route exact path="/" render={props => <HomepageView {...props} />} />
                                <Route exact path="/about" render={props => <AboutUsView {...props} />} />
                                {/* <Route exact path="/privacy" render={prop => <PrivacyView {...props} />} />
                                <Route exact path="/terms" render={prop => <TermsView {...props} />} /> */}

                                <Route exact path="/question_advert" render={props => <QuestionAdvertView {...props} nextUrl={location.state ? location.state.nextUrl : ''} prevUrl={location.state ? location.state.prevUrl : ''} />} />
                                <Route exact path="/question_personal" render={props => <QuestionPersonalView {...props} />}/>
                                <Route exact path="/question_disclaimer" render={props => <QuestionDisclaimerView {...props} />}/>
                                <Route exact path="/question_status" render={props => <QuestionStatusView {...props} />}/>
                                <Route exact path="/question_travel" render={props => <QuestionTravelView {...props} />}/>
                                <Route exact path="/question_education1" render={props => <QuestionEducation1View {...props} />}/>
                                <Route exact path="/question_education2" render={props => <QuestionEducation2View {...props} />}/>
                                <Route exact path="/question_education4" render={props => <QuestionEducation4View {...props} />}/>
                                <Route exact path="/question_work1" render={props => <QuestionWork1View {...props} />}/>
                                <Route exact path="/question_work2" render={props => <QuestionWork2View {...props} />}/>
                                <Route exact path="/question_work3" render={props => <QuestionWork3View {...props} />}/>
                                <Route exact path="/question_work4" render={props => <QuestionWork4View {...props} />}/>
                                <Route exact path="/question_work5" render={props => <QuestionWork5View {...props} />}/>
                                <Route exact path="/question_language1" render={props => <QuestionLanguage1View {...props} />}/>
                                <Route exact path="/question_language2" render={props => <QuestionLanguage2View {...props} />}/>
                                <Route exact path="/question_language3" render={props => <QuestionLanguage3View {...props} />}/>
                                <Route exact path="/question_final" render={props => <QuestionFinalView {...props} />} />
                                <Route exact path="/question_recommendation" render={props => <QuestionRecomendView {...props} />} />
                                <Route exact path="/server_error" render={props => <ServerErrorView {...props} />} />
                            </Switch>
                            
                            {location.pathname !== '/question_recommendation' && location.pathname !== '/server_error' && 
                                location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/privacy' && location.pathname !== '/terms' && (
                                <div className="card right-screen-card">
                                    <AmazonAdvert case="desktop" height={600} />
                                </div>
                            )}
                        </React.Fragment>
                        );
                    }} />
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
    onEnter = element => {
        window.scrollTo(0, 0);
        element.parentNode.style.height = `auto`;

        this.enterHeight = element.offsetHeight;
        element.classList.add(`${this.animation}-enter`);
    }

    onEntering = element => {
        element.classList.remove(`${this.animation}-enter`);
        element.classList.add(`${this.animation}-enter-active`);
    }

    onEntered = element => {
        element.parentNode.style.height = `auto`;

        element.classList.remove(`${this.animation}-enter-active`);
    }

    onExit = element => {
        console.log(element.parentNode);
        element.parentNode.style.height = element.offsetHeight > 720 ? `${element.offsetHeight}px` : `720px`;

        element.style.top = `-${this.enterHeight}px`;
        element.classList.add(`${this.animation}-exit`);
    }

    onExiting = element => {
        element.classList.remove(`${this.animation}-exit`);
        element.classList.add(`${this.animation}-exit-active`);
    }
    
    onExited = element => {
        element.classList.remove(`${this.animation}-exit-active`);
    }
}
 
export default Routing;

