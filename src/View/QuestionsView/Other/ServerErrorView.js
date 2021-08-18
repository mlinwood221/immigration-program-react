import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";


class ServerErrorView extends Component {
    state = { 
        score: 0
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ score: 999 });
        }, 700);
    }
    render() {
        const {score} = this.state;
        return ( 
            <div className="question-area">
                <p style={{fontSize: 'xxx-large', marginTop: '9rem', color: 'var(--primary)' }}>Server Error</p>
            </div>
        );
    }
}
 
export default ServerErrorView;
