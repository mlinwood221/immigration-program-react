import React, { Component } from 'react';
import "./checkBox.css"

export default class CustomCheckbox extends Component {
    constructor(props) {
        super(props);
    }

    onClick = (e) => {
        this.props.onClick(e.target.checked);
    }

    render() {
        return (
            <label className={this.props.className ? this.props.className + " check-box-container" : "check-box-container"}>
                <input type="checkbox" onClick={this.onClick} />
                {this.props.children}
                <span className="checkbox-checkmark"></span>
            </label>
        )
    }
}
