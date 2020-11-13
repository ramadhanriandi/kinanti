import React from 'react'
import LinkButton from './LinkButton';

function SideBar() {
    return (
        <div className="p-4 elevation-1" style={{'maxWidth' : '20%'}}>
            <div className="h5 mb-2">Symtomps Detection</div>
            <div className="list-group">
                <LinkButton name="Diseases List" />
            </div>
        </div>
    )
}

export default SideBar
