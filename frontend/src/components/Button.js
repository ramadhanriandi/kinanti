import React, { useState } from 'react'
import getColor from '../utils/Color';

function Button(props) {
    if (props.color === 'primary') {
        return (
            <div>
                <button id={props.id} type={props.type} data-dismiss={props.dismiss ? props.dismiss : ''} className="btn btn-primary" style={{ "background": getColor(props.color), "fontSize": 12, "fontWeight": 500 }}>{props.text}</button>            
            </div>
        )
    }
    else {
        return (
            <div>
                <button id={props.id} type={props.type} data-dismiss={props.dismiss ? props.dismiss : ''} className="btn btn-light text-secondary" style={{ "background": getColor(props.color), "fontSize": 12, "fontWeight": 500 }}>{props.text}</button>            
            </div>
        )
    }
}

export default Button