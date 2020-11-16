import React from 'react'
import LinkButton from './LinkButton';

function SideBar(props) {
    function showLink(list) {
        return list.map((val) => {
            return <LinkButton name={val} />
        });
    }
    return (
        <div className="p-4 elevation-1" style={{'maxWidth' : '20%'}}>
            <div className="h5 mb-2">{props.title}</div>
            <div className="list-group">
                {showLink(props.list)}
            </div>
        </div>
    )
}

export default SideBar
