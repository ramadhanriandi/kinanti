import React from 'react'

function ListButton(props) {
    return (
        <li onClick={props.onClick} className={`list-group-item ${props.active ? "active" : ""} rounded-lg my-1`}>
            {props.name}
        </li>
    )
}

export default ListButton
