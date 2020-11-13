import React from 'react'

function NavBar() {
    return (
        <div className="px-3 bg-dark text-white">
            <div className="p-3 my-4 bg-primary rounded-lg" style={{cursor: 'pointer'}}>
                <span className="font-weight-bold">SD</span>
            </div>
            <div className="p-3 my-4 bg-secondary rounded-lg" style={{cursor: 'pointer'}}>
                <span>HE</span>
            </div>
            <div className="p-3 my-4 bg-secondary rounded-lg" style={{cursor: 'pointer'}}>
                <span>DR</span>
            </div>
            <div className="p-3 my-4 bg-secondary rounded-lg" style={{cursor: 'pointer'}}>
                <span>SR</span>
            </div>
        </div>
    )
}

export default NavBar
