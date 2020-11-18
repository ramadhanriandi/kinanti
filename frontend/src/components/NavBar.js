import React from 'react'
import {
    NavLink,
} from "react-router-dom";

function NavBar() {
    return (
        <div className="px-3 bg-dark text-white">
            <NavLink exact={true} to="/symtomps" className="link" activeClassName="link-active">
                SD
            </NavLink>
            <NavLink exact={true} to="/health" className="link" activeClassName="link-active">
                HE
            </NavLink>
            <NavLink exact={true} to="/doctors" className="link" activeClassName="link-active">
                DR
            </NavLink>
            <NavLink exact={true} to="/reminder" className="link" activeClassName="link-active">
                SR
            </NavLink>
        </div>
    )
}

export default NavBar
