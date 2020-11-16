import React from 'react'

function NavBar(props) {
    function getText(name) {
        if (props.nav == name) {
            return <span className="font-weight-bold">{name}</span>
        }
        else {
            return <span>{name}</span>
        }
    }

    function getColor(name) {
        if (props.nav == name) {
            return "bg-primary"
        }
        else {
            return "bg-secondary"
        }
    }

    return (
        <div className="px-3 bg-dark text-white">
            <div className={"p-3 my-4 " + getColor('SD') + " rounded-lg"} style={{cursor: 'pointer'}}>
                {getText('SD')}
            </div>
            <div className={"p-3 my-4 " + getColor('HE') + " rounded-lg"} style={{cursor: 'pointer'}}>
                {getText('HE')}
            </div>
            <div className={"p-3 my-4 " + getColor('DR') + " rounded-lg"} style={{cursor: 'pointer'}}>
                {getText('DR')}
            </div>
            <div className={"p-3 my-4 " + getColor('SR') + " rounded-lg"} style={{cursor: 'pointer'}}>
                {getText('SR')}
            </div>
        </div>
    )
}

export default NavBar
