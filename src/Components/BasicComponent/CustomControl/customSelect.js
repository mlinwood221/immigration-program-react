import React, { Component } from "react";
import './customSelect.css';

class CustomSelect extends Component {
    constructor(props) {
        super(props);
        
        let selectedOption, selectedValue;
        
        if (!props.multiple) {
            selectedOption = props.value ? props.value : '';
            if (selectedOption) {
                let option;
    
                option = this.props.options.find((option, index, array) => {
                    return option.value === selectedOption;
                });
    
                if (option) {
                    const qId = this.props.qId ? this.props.qId : 0;
                    selectedOption = option.name;
                } else {
                    selectedOption = '';
                }
            }
        } else {
            selectedValue = [];
            selectedOption = props.value ? [ ...props.value ] : [];
            if (selectedOption.length) {
                let option;
    
                selectedOption = selectedOption.map((value, index) => {
                    option = this.props.options.find((option, index, array) => {
                        return option.value === value;
                    });
        
                    if (option) {
                        const qId = this.props.qId ? this.props.qId : 0;
                        selectedValue.push(option.value);
                        return option.name;
                    }
                });
            }
        }       

        this.state = {
            isOpen: false,
            multiple: props.multiple ? true : false,
            selectedValue: selectedValue,
            selectedOption: selectedOption,
            placeholder: props.placeholder ? props.placeholder : 'Select',
            options: props.options ? [...props.options] : []
        }
    }

    toggling = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onOptionClicked = (name, value) => {
        const qId = this.props.qId ? this.props.qId : 0;

        if (this.state.multiple) {
            let selectedOption = [ ...this.state.selectedOption ];
            let selectedValue = [ ...this.state.selectedValue ];

            selectedOption.push(name);
            selectedValue.push(value);

            this.setState({
                selectedOption: selectedOption,
                selectedValue: selectedValue,
                isOpen: false
            });
            
            if (this.props.onChange) {
                if (this.props.groupId)
                    this.props.onChange(this.props.groupId, this.props.index, qId, [...selectedValue]);
                else
                    this.props.onChange(qId, [...selectedValue]);
            }

        } else {
            this.setState({
                selectedOption: name,
                isOpen: false
            });

            if (this.props.onChange) {
                if (this.props.groupId)
                    this.props.onChange(this.props.groupId, this.props.index, qId, value);
                else
                    this.props.onChange(qId, value);
            }
        }
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                isOpen: false
            });
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);    
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    getBodyStyle = () => {
        let bodyHeight = this.props.options.length * 30;
        let windowHeight = window.innerHeight;
        let style = {};
        let pos = { };

        if (this.wrapperRef) {
            var obj = this.wrapperRef;
            pos.x = obj.offsetLeft;
            pos.y = obj.offsetTop;
            while (obj.offsetParent) {
                pos.x += obj.offsetParent.offsetLeft;
                pos.y += obj.offsetParent.offsetTop;
                if (obj == document.getElementsByTagName("body")[0]) {
                    break;
                }
                else {
                    obj = obj.offsetParent;
                }
            }
        }
        pos.x -= document.documentElement.scrollLeft;
        pos.y -= document.documentElement.scrollTop;

        if (bodyHeight > 200)
            bodyHeight = 200;

        if (this.state.isOpen) {
            style.display = 'block';
            if (windowHeight - pos.y < bodyHeight + 100)
            {
                style.top = `-${bodyHeight + 5}px`;
            }
        } else {
            style.display = 'none';
        }

        return style;
    }

    onRemoveSelectedOption = (index) => {
        const qId = this.props.qId ? this.props.qId : 0;
        let selectedOption = [ ...this.state.selectedOption ];
        let selectedValue = [ ...this.state.selectedValue ];

        selectedOption.splice(index, 1);
        selectedValue.splice(index, 1);

        this.setState({
            selectedOption: selectedOption,
            selectedValue: selectedValue
        });
        
        if (this.props.onChange) {
            if (this.props.groupId)
                this.props.onChange(this.props.groupId, this.props.index, qId, [...selectedValue]);
            else
                this.props.onChange(qId, [...selectedValue]);
        }
    }

    render = () => {
        const { multiple, selectedOption, isOpen, placeholder, options } = this.state;
        let header = '';

        if (multiple) {
            if (selectedOption.length) {
                header = (
                    <div className="custom-multi-select-header">
                    {selectedOption.map((value, index) => {
                        return (
                            <div className="custom-selected" key={value}>
                                {value}&nbsp;<span onClick={() => this.onRemoveSelectedOption(index)}>&#x2716;</span>
                            </div>
                        );
                    })}
                    </div>
                );
            } else {
                header = placeholder;
            }
        } 
        else {
            header = selectedOption || placeholder
        }

        return (
            <div className="custom-select" ref={wrapperRef => {this.wrapperRef = wrapperRef}}>
                <div className="custom-select-container">
                    <div className="custom-select-header" style={{color: (selectedOption ? 'var(--dark)' : 'var(--medium)')}} onClick={this.toggling}>
                        {header}
                        <div className={"custom-select-right-arrow " + (isOpen ? "up" : "down")}></div>
                    </div>
                    <div className="custom-select-body" ref={bodyRef => {this.bodyRef = bodyRef}} style={this.getBodyStyle()}>
                        <ul className="custom-select-list">
                        {options.map(option => {
                            if (multiple) {
                                if (!selectedOption.includes(option.name)) {
                                    return (
                                        <li className="custom-select-list-item" onClick={() => this.onOptionClicked(option.name, option.value)} key={Math.random()}>
                                        {option.name}
                                        </li>
                                    );
                                }
                            } else {
                                return (
                                    <li className={"custom-select-list-item" + (option.name == selectedOption ? " active" : "")} onClick={() => this.onOptionClicked(option.name, option.value)} key={Math.random()}>
                                    {option.name}
                                    </li>
                                );
                            }
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomSelect;