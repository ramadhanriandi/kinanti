import React, {useEffect, useState} from 'react'
import SideBar from '../components/SideBar';
import MainBar from '../components/MainBar';
import $ from 'jquery';

function SymtompsDetection() {
    const [subsection, setSubection] = useState('Diseases List')
    const [diseases, setDiseases] = useState([])
    const sideBarTitle = 'Symptomps Detection'
    const listSubsection = ['Diseases List']

    useEffect(() => {
        $.get("http://localhost:8080/api/diseases", response => {
            if (response.status == "success") {
                setDiseases(response.data);
            }
        });
    }, []);

    return (
        <>
            <SideBar title={sideBarTitle} list={listSubsection} />
            <MainBar title={subsection} list={diseases} />
        </>
    )
}

export default SymtompsDetection
