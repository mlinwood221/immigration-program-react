import React, { Component } from "react";
import './customInput.css';

class CustomInput extends Component {
    constructor(props) {
        super(props);

        let selected = false;
        let prefix = props.prefix ? props.prefix : "";
        let suggestions = props.suggestions;
        let value = props.value ? props.value.replace(prefix + "-", "") : "";
        let suggestion = suggestions.find((suggestion) => {
            return suggestion.value == value;
        });
        let input = '';
        if (suggestion) {
            selected = true;
            switch (props.type) {
                case 'school':
                    input = suggestion.Name + ' - ' + suggestion.Campus;
                    break;
                case 'work':
                    input = suggestion.JobTitle + ' - ' + suggestion.NOCCode;
                    break;
                default:
                    input = suggestion.name;
                    break;
            }
        }

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: input,
            // User select from drop down or not
            selected: selected
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                showSuggestions: false
            });
        }
    }

    // Event fired when the input value is changed
    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        let filteredSuggestions = [];
        let cur = 0;
        do {
            let tmp;
            tmp = suggestions.slice(cur, cur + 1000).filter(suggestion => {
                switch (this.props.type) {
                    case 'school':
                        return suggestion.Name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
                    case 'work':
                        return suggestion.JobTitle.toLowerCase().indexOf(userInput.toLowerCase()) > -1
                    default:
                        return suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
                }
            });
            filteredSuggestions = filteredSuggestions.concat(tmp);
            if (filteredSuggestions.length > 1000)
                break;
            cur += 1000;
        } while (cur < suggestions.length);

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
            selected: false
        });

        this.onUpdate('');
    };

    // Event fired when the user clicks on a suggestion
    onClick = (name, value) => {
        // Update the user input and reset the rest of the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: name,
            selected: true
        });
        this.onUpdate(value);
    };

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            let input = '';
            
            if (filteredSuggestions.length) {
                switch (this.props.type) {
                    case 'school':
                        input = filteredSuggestions[activeSuggestion].Name + ' - ' + filteredSuggestions[activeSuggestion].Campus;
                        break;
                    case 'work':
                        input = filteredSuggestions[activeSuggestion].JobTitle + ' - ' + filteredSuggestions[activeSuggestion].NOCCode;
                        break;
                    default:
                        input = filteredSuggestions[activeSuggestion].name;
                }
            }

            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: input,
                selected: true
            });
            filteredSuggestions.length ? this.onUpdate(filteredSuggestions[activeSuggestion].value) : this.onUpdate('');
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion === filteredSuggestions.length - 1) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    onUpdate = (value) => {
        let qId = this.props.qId ? this.props.qId : 0;
        let prefix = this.props.prefix ? this.props.prefix + "-" : '';

        if (!value)
            prefix = '';
        
        switch (this.props.type) {
            case 'school':
                value = ("0000" + value).slice(-4);
                break;
        }
        
        if (this.props.onChange) {
            if (this.props.groupId)
                this.props.onChange(this.props.groupId, this.props.index, qId, prefix + value);
            else
                this.props.onChange(qId, prefix + value);
        }
    }
    
    getBodyStyle = () => {
        let bodyHeight = this.state.filteredSuggestions.length * 30;
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

        if (this.state.showSuggestions) {
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

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            getBodyStyle,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <div className="custom-input-body" style={getBodyStyle()} ref={bodyRef => {this.bodyRef = bodyRef}}>
                        <ul className="custom-input-suggestions">
                            {filteredSuggestions.map((suggestion, index) => {
                                let className;
                                let name = '';

                                switch (this.props.type) {
                                    case 'school':
                                        name = suggestion.Name + ' - ' + suggestion.Campus;
                                        break;
                                    case 'work':
                                        name = suggestion.JobTitle + ' - ' + suggestion.NOCCode;
                                        break;
                                    default:
                                        name = suggestion.name;
                                        break;
                                }
                                // Flag the active suggestion with a class
                                if (index === activeSuggestion) {
                                    className = "suggestion-active";
                                }

                                return (
                                    <li className={className} key={suggestion.value} onClick={() => onClick(name, suggestion.value)} >
                                        {name}
                                    </li>
                                );
                            }, this)}
                        </ul>
                    </div>
                );
            } else {
                suggestionsListComponent = (
                    <div className="custom-input-body">
                        <div className="custom-input-no-suggestions">
                            No suggestions, you're on your own!
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className={this.props.className ? "custom-input-container " + this.props.className : "custom-input-container"} ref={wrapperRef => {this.wrapperRef = wrapperRef}}>
                <input 
                    type="text" 
                    onChange={onChange} 
                    onKeyDown={onKeyDown} 
                    value={userInput} 
                    placeholder={this.props.placeholder ? this.props.placeholder : 'Type here'} 
                    style={userInput && !this.state.selected ? {borderColor: "var(--red)"} : {}}/>
                {suggestionsListComponent}
            </div>
        );
    }
}

export default CustomInput;
