import React from 'react'
import LinkButton from '../../components/LinkButton';

function DoctorListSide() {
    return (
        <div className="p-4 elevation-1" style={{'maxWidth' : '20%'}}>
            <div className="h5 mb-2">Doctor Reservation</div>
            <div className="list-group">
                <LinkButton name="Doctor List" />
            </div>
        </div>
    )
}

export default DoctorListSide
