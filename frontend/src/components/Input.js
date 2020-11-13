import React from 'react'

function Input(props) {
    return (
        <div className="input-container">
            <label htmlFor={props.field} className="small font-weight-bold text-secondary">{props.field}</label>
            <div className="input-group mb-3">
                {props.multiline ? 
                    <textarea onChange={props.onChange} className="form-control" rows="4" placeholder={props.placeholder} 
                        required={props.required} style={{'resize': 'none'}} name={props.name}></textarea>
                :
                    <input onChange={props.onChange} type="text" placeholder={props.placeholder} className="form-control" 
                        id={props.field} aria-describedby={props.field + ' field'} required={props.required} name={props.name}/>
                }
            </div>
        </div>
    )
}

export default Input
