import React, { Component } from 'react'
import './AboutUsView.css'

import AmazonAdvert from '../../Components/BasicComponent/AmazonAdvert/AmazonAdvert'

class AboutUsView extends Component {

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
                        <h2>About headline goes here. Can be two lines long.</h2>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <h4 className="col-md-12 mb-3">Who we are headline</h4>
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="row box-paragraph">
                            <div className="col-md-6">
                                <h4>What Immigraters does for you</h4>
                            </div>
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <a href="#" onClick={(e) => this.navigateTo('question_personal', e)} className="btn">Start questionnaire</a>
                        </div>
                        <div className="mt-5 text-center">
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
                </div>
            </>
        );
    }
}

export default AboutUsView;
