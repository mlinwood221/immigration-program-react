import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import THANKYOU from '../../Assests/Media/thank_you.png';

import AmazonAdvert from '../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

import './HomepageView.css'

class HomepageView extends Component {

    navigateTo = (screenName, e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/' + screenName
        });
    }

    render() {
        return (
            <>
                <div className="page-headline">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="vertical-center">
                                    <h1 className="mb-5">Discover your Canadian immigration pathways NOW and for FREE!</h1>
                                    <div className="mobile-center">
                                        <a href="#" onClick={(e) => this.navigateTo("question_personal", e)} className="btn">Let's get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={THANKYOU} width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ background: "var(--white)" }}>
                    <div className="page-description">
                        <h5>You are about to take the most important, first step towards changing your life, and the lives of generations ahead. Understand the best ways for you to immigrate to one of the worlds best countries.</h5>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container page-steps">
                        <div className="row">
                            <div className="col-md-4">
                                <AmazonAdvert case="desktop" height={600} />
                                <AmazonAdvert case="mobile" height={250} />
                            </div>
                            <div className="col-md-8">
                                <div className="vertical-center">
                                    <div className="step-item">
                                        <h5>Complete a free questionnaire</h5>
                                        <span>Complete our comprehensive questionnaire. Each question builds your score and improves your chances of immigarting to Canada.</span>
                                    </div>
                                    <div className="step-item">
                                        <h5>Receive recommendations</h5>
                                        <span>Instantaneously receive recommendations on which Canadian immigration pathways you should consider.</span>
                                    </div>
                                    <div className="step-item">
                                        <h5>Begin your Canadian journey!</h5>
                                        <span>Connect with a licenced immigration consultant or lawyer and begin your journey to Canada.</span>
                                    </div>
                                    <div className="mobile-center">
                                        <h6>Try now for free</h6>
                                        <a href="#" onClick={(e) => this.navigateTo("question_personal", e)} className="btn mt-5">Start questionnaire</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ background: "var(--white)" }}>
                    <div className="page-social-links">
                        <h5 className="mb-3">Tell your friends and family about Immigraters</h5>
                        <ul>
                            <li><a href="https://www.facebook.com/Immproved-104284631564766" target="_blank"><i aria-hidden="true" className="fab fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/Immproved1" className="twittersc" target="_blank"><i aria-hidden="true" className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/immproved/" target="_blank"><i aria-hidden="true" className="fab fa-instagram"></i></a></li>
                        </ul>
                        <div className="mt-5">
                            <AmazonAdvert case="desktop" height={90} width={728} />
                            <AmazonAdvert case="mobile" height={250} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(HomepageView);
