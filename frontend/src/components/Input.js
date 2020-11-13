import React from 'react'

function Input(props) {
    return (
        <div className="input-container">
            <label for={props.field} className="small font-weight-bold text-secondary">{props.field}</label>
            <div class="input-group mb-3">
                {props.multiline ? 
                    <textarea class="form-control" rows="4" placeholder={props.placeholder} required={props.required} style={{'resize': 'none'}}></textarea>
                :
                    <input type="text" placeholder={props.placeholder} class="form-control" id={props.field} aria-describedby={props.field + ' field'} required={props.required} />
                }
            </div>
        </div>
    )
}

export default Input
