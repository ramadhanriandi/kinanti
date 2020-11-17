import React, { useEffect, useState } from 'react'
import ListButton from '../../components/ListButton'
import $ from 'jquery';

function DoctorListMain(props) {
    const [id, setId] = useState(-1);
    const [detail, setDetail] = useState();

    useEffect(() => {
        if (id !== -1) {
            $.get(`http://localhost:8080/api/doctors/${id}`, response => {
                console.log(response.data);
                setDetail(response.data);
            })
        }
    }, [id]);

    function clickList(id, _) {
        setId(id);
    }

    function showListButton(list) {
        return list.map(data => {
            return <ListButton active={data._id === id} key={data._id} name={data.name}
                onClick={(e) => clickList(data._id, e)} />
        })
    }

    function showSchedules(schedules) {
        console.log(schedules);
        return schedules.map(element => {
            return <li key={element}>{element}</li>
        });
    }

    function showDetail(detail) {
        if (detail) {
            return (
                <div className="p-4 w-75">
                    <div className="h2">{detail.name}</div>
                    <hr />
                    <div className="mb-4">
                        {detail.description}
                    </div>
                    <div>
                        Address: <b>{detail.address}</b>
                    </div>
                    <div>
                        Available at: {showSchedules(detail.schedules)}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="d-flex flex-grow-1">
            <div className="p-4 w-25" style={{ 'background': '#edf1f2' }}>
                <div className="h5">Doctor List</div>
                <button className="my-3 py-2 btn btn-primary btn-block text-medium"
                    style={{ "background": "rgb(32, 83, 175)", "fontSize": 12, "fontWeight": 500 }}
                    data-toggle="modal" data-target="#add-doctor-modal">
                    Add Doctor
                </button>
                <ul className="list-group">
                    {showListButton(props.list)}
                </ul>
            </div>
            {showDetail(detail)}
        </div>
    )
}

export default DoctorListMain
