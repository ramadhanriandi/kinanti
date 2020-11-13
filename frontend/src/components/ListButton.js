import React from 'react'

function ListButton(props) {
    return (
        <li className={`list-group-item ${props.active ? "active" : ""} rounded-lg my-1`}>
            {props.name}
        </li>
    )
}

export default ListButton
