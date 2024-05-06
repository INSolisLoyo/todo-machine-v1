import React from "react";
import { createPortal } from "react-dom";
import './Modal.css'

function Modal({ children }) {
    
    return createPortal(
        //creamos un portal
        //aquí le indicamos qué queremos transportar
        <div className="ModalBackground">
            { children }
        </div>,
        //a donde queremos transportar
        document.getElementById('modal')

    )

}

export { Modal }