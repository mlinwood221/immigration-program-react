import React, { Component } from 'react';
import "./radioButton.css";

export default class CustomRadio extends Component {
    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        const qId = this.props.qId ? this.props.qId : "0";
        this.props.onChange && this.props.onChange(qId, e.target.value);
    }

    render() {
        return (
            <label className="radio-button-container">
                {(this.props.checked && this.props.checked == "true") ? (
                    <input type="radio" checked name={this.props.name ? this.props.name : "radio"} onChange={this.onChange} value={this.props.value ? this.props.value : ""} />
                ) : (
                    <input type="radio" name={this.props.name ? this.props.name : "radio"} onChange={this.onChange} value={this.props.value ? this.props.value : ""} />
                )}
                {this.props.children}
                <span className="radiobutton-checkmark"></span>
            </label>
        )
    }
}
