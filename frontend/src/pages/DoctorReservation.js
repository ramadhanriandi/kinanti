import React, {useEffect, useState} from 'react'
import DoctorListSide from '../layouts/DoctorReservation/DoctorListSide'
import DoctorListMain from '../layouts/DoctorReservation/DoctorListMain'
import DoctorListModal from '../layouts/DoctorReservation/DoctorListModal'
import $ from 'jquery'

function DoctorReservation() {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        $.get("http://localhost:8080/api/doctors", response => {
            if (response.status === "success") {
                setDoctors(response.data);
            }
        });
    }, []);

    return (
        <>
            <DoctorListSide />
            <DoctorListMain list={doctors} />
            <DoctorListModal />
        </>
    )
}

export default DoctorReservation