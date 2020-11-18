import React, {useEffect, useState} from 'react'
import SideBar from '../layouts/SymtompsDetection/SideBar';
import MainBar from '../layouts/SymtompsDetection/MainBar';
import Modal from '../layouts/SymtompsDetection/Modal';
import $ from 'jquery';
import DeleteModal from '../layouts/SymtompsDetection/DeleteModal';

function SymtompsDetection() {
    // const [subsection, setSubection] = useState('Diseases List')
    let subsection = 'Diseases List';
    const [diseases, setDiseases] = useState([])
    const sideBarTitle = 'Symptomps Detection'
    const listSubsection = ['Diseases List']

    useEffect(() => {
        $.get("http://localhost:8080/api/diseases", response => {
            if (response.status === "success") {
                setDiseases(response.data);
            }
        });
    }, []);

    function deleteDisease(id) {
        setDiseases(diseases.filter(val => val._id !== id));
    }

    return (
        <>
            <SideBar title={sideBarTitle} list={listSubsection} />
            <MainBar delete={deleteDisease} title={subsection} list={diseases} />
            <Modal />
            <DeleteModal />
        </>
    )
}

export default SymtompsDetection
