import React, { useEffect, useState } from 'react'
import ListButton from './ListButton'
import $ from 'jquery';

function MainBar(props) {
    const [id, setId] = useState(-1);
    const [detail, setDetail] = useState();

    useEffect(() => {
        if (id !== -1) {
            $.get(`http://localhost:8080/api/diseases/${id}`, response => {
                setDetail(response.data);
            })
        }
    }, [id]);

    function clickList(id, event) {
        setId(id);
    }

    function showListButton(list) {
        return list.map(data => {
            return <ListButton key={data._id} name={data.name}
                onClick={(e) => clickList(data._id, e)} />
        })
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
                        Treatment: <b>{detail.treatment}</b>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="d-flex flex-grow-1">
            <div className="p-4 w-25" style={{ 'background': '#edf1f2' }}>
                <div className="h5">Diseases List</div>
                <button className="my-3 py-2 btn btn-primary btn-block text-medium"
                    style={{ "background": "rgb(32, 83, 175)", "fontSize": 12, "fontWeight": 500 }}
                    data-toggle="modal" data-target="#add-disease-modal">
                    Add Disease
                </button>
                <ul className="list-group">
                    {showListButton(props.list)}
                </ul>
            </div>
            {showDetail(detail)}
        </div>
    )
}

export default MainBar
