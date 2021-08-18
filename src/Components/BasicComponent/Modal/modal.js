import React, { Component } from 'react';
import { Modal } from "react-bootstrap";

import CloseIcon from "../../../Assests/Icons/icon  cros.png"

import "./modal.css";

export const CustomModal = (props) => {
    return(
        <Modal show={props.show} onHide={() => {}}>
            {props.children}
        </Modal>
        // <Modal scrollable closeButton="true" className="modals-scrollbar p-3 " size="xl" style={{height:"576px",scrollbarWidth: "thin",borderRadius:"16px"}} show={props.show} centered>
        //     <p className="modal-close" onClick={props.onClick}>Close <img src={CloseIcon} width="20px"/></p>
        //     {props.children}
        //     <div class="scrollbar" id="style-default">
        //     <div class="force-overflow"></div>
        //     </div>
        // </Modal>
    )
}
export const CustomModalHeader=(props)=>{
    return(
        <Modal.Header>
            {props.children}
            <img className="custom-modal-close-btn" src={CloseIcon} onClick={props.onClick} />
        </Modal.Header>
    )
}
export const CustomModalBody=(props)=>{
    return(
        <Modal.Body>
            {props.children}
        </Modal.Body>
    )
}

export const CustomModalFooter = (props) => {
    return (
        <Modal.Footer>
            {props.children}
        </Modal.Footer>
    )
}
