import React from 'react'
import getColor from '../utils/Color';

export default function TopBar() {
    return (
        <div className="p-4 elevation-1" style={{ 'height': '10vh', 'width': '100vw', 'display': 'table-cell', 'verticalAlign': 'middle' }}>
            <span className="font-weight-bold my-auto" style={{'display': 'inline-block', 'color': getColor('primary')}}>KINANTI DASHBOARD</span>
        </div>
    )
}
