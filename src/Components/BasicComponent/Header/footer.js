import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from "../../../Assests/Icons/logo.png";
import {Container} from "react-bootstrap";
import "./fontawesome-5/css/all.min.css"
import "./header.css";
class Footer extends Component {
    state = {  }

    navigateTo = (screenName, e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/' + screenName
        });
    }

    render() { 
        return ( 
            <footer>
                <Container className="footer-container">
                    <p>Connect with us on our social networks</p>
                    <ul className="footer-social-links">
                        <li><a href="https://www.facebook.com/Immproved-104284631564766" target="_blank"><i aria-hidden="true" className="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/Immproved1" className="twittersc" target="_blank"><i aria-hidden="true" className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/immproved/" target="_blank"><i aria-hidden="true" className="fab fa-instagram"></i></a></li>
                    </ul>
                    <div className="line-separator"></div>
                    <div className="footer-logo">
                        <img src={Logo} />
                    </div>
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#" onClick={(e) => this.navigateTo('privacy', e)}>Privacy Policy</a></li>
                            <li><a href="#" onClick={(e) => this.navigateTo('terms', e)}>Terms and conditions</a></li>
                        </ul>
                    </div>
                    <span>@2020 IMMIGRATERS legal line goes here.</span>
                </Container>
            </footer>
         );
    }
}
 
export default withRouter(Footer);
