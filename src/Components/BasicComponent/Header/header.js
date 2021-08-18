import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from "../../../Assests/Icons/logo.png";
import {Container} from "react-bootstrap";
import "./header.css";
class Header extends Component {
    state = {  }

    navigateTo = (screenName, e) => {
        e.preventDefault();
        this.mobileMenu.style.visibility = 'hidden';
        window.location.href = window.location.protocol + '//' + window.location.host + '/' + screenName;
    }

    render() { 
        return ( 
            <React.Fragment>
                <header>
                    <Container fluid={true}>
                        <div className="row">
                            <div className="col-md-3">
                                <a href="/" onClick={(e) => this.navigateTo('', e)}><img src={Logo} alt="IMMIGRATERS" /></a>
                            </div>
                            <div className="col-md-9">
                                <div className="mainmenu">
                                    <ul>
                                        <li><a href="/" onClick={(e) => this.navigateTo('question_personal', e)}>Check Eligibility</a></li>
                                        <li><a href="/" onClick={(e) => this.navigateTo('about', e)}>About Immigraters</a></li>
                                    </ul>
                                </div>
                                <div className="menu-wrap">
                                    <input type="checkbox" className="toggler" />
                                    <div className="hamburger"><div></div></div>
                                    <div className="menu" ref={(node) => this.mobileMenu = node}>
                                        <div>
                                            <div>
                                                <ul>
                                                    <li><a href="/" onClick={(e) => this.navigateTo('question_personal', e)}>Check Eligibility</a></li>
                                                    <li><a href="/" onClick={(e) => this.navigateTo('about', e)}>About Immigraters</a></li>
                                                </ul>
                                                <div className="bottom-sc">
                                                    <ul className="menuextra">
                                                        <li><a href="/" onClick={(e) => this.navigateTo('privacy', e)}>Privacy Policy</a></li>
                                                        <li><a href="/" onClick={(e) => this.navigateTo('terms', e)}>Terms and Conditions</a></li>
                                                    </ul>
                                                    <p>2020 IMMIGRATERS Incorporated - a registered Canadian company.  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
         );
    }
}
 
export default withRouter(Header);