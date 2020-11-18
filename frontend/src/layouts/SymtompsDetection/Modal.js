import React, {useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import $ from 'jquery'

function Modal() {
    const [disease, setDisease] = useState({
        'name': '',
        'description': '',
        'treatment': ''
    })

    function sendDiseaseRequest() {
        $.post(`${process.env.REACT_APP_API_URL}/api/diseases`, disease, response => {
            if (response.message === 'New disease Added!') {
                window.location.reload()
            }
        })
    }

    function changeName(e) {
        setDisease({...disease, 'name': e.target.value})
    }

    function changeDescription(e) {
        setDisease({...disease, 'description': e.target.value})
    }

    function changeTreatment(e) {
        setDisease({...disease, 'treatment': e.target.value})
    }

    return (
        <div id="add-disease-modal" className="modal right fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header p-4">
                        <h5 className="modal-title">Add Disease</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4">
                        <Input onChange={changeName} name="name" field="Name" placeholder="eg. Cacar" required={true} />
                        <Input onChange={changeDescription} name="description" field="Description" multiline={true} placeholder="Enter disease's description" required={true} />
                        <Input onChange={changeTreatment} name="treatment" field="Treatment" multiline={true} placeholder="Enter disease's treatment" required={true} />
                    </div>
                    <div className="modal-footer">
                        <Button onClick={sendDiseaseRequest} type="submit" color="primary" text="Add Disease" />
                        <Button type="button" color="secondary" text="Cancel" dismiss="modal"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
