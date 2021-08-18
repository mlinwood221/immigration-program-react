import React, { Component, useState } from 'react';
import "./textFields.css"

export const Labels=(props)=>{
    return(
        <label className={props.className ? props.className : ""} style={{width:"100%"}}>
            {props.label}
            {props.children}
        </label>
    )
}
export const Input=(props)=>{
    return(
        <input className={props.className ? props.className : ""} placeholder={props.placeholder} type={props.type ? props.type : 'text'} />
        )
}
export const LabelDark = (props) => {
    return(
        <div className={props.className ? "label-dark " + props.className : "label-dark"}>
            {props.children}
        </div>
    )
}
export const TextFields=(props)=>{
    const [value, setValue] = useState('');

    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChange = e => {
        const qId = props.qId ? props.qId : 0;

        setValue(e.target.value);

        if (props.onChange) {
            if (props.groupId) {
                props.onChange(props.groupId, props.index, qId, e.target.value);
            }
            else {
                props.onChange(qId, e.target.value);
            }
        }
    }

    let style = {};
    if (value && props.type == "email" && !validateEmail(value)) {
        style.borderColor = "red";
        style.color = "red";
    }

    return (
        <input pattern={props.pattern} id={props.id} name={props.name} onChange={handleChange} autoFocus={props.autoFocus} className={props.className ? props.className : ""} type={props.type} placeholder={props.placeholder} value={props.value ? props.value : ''} style={style}/>
    )
}
export const SelectInput=(props)=>{
    return(
        <input className={props.className ? props.className : ""} placeholder={props.placeholder} type={props.type} list={props.list} />
        )
}
export const Select=(props)=>{
    return(
        <select className={props.className ? props.className : ""} onChange={props.onChange} required>
        {props.children}
        </select>
    )
}
export const SelectDataList=(props)=>{
    return(
        <datalist  id={props.id}>
            {props.children}
        </datalist>
        )
}
export const SelectPlaceholder=(props)=>{
    return (
        <option value="" disabled selected>{props.children}</option>
    )
}
export const SelectInputOption=(props)=>{
    return(
        <option value={props.value ? props.value : ""} style={props.style ? props.style : {}}>{props.children}</option>

        )
}

export const FormGroup=(props)=>{
    return (
        <div className={props.className ? "form-group " + props.className : "form-group"}>
        {props.children}
        </div>
    )
}