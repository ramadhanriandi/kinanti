import React, {useEffect} from 'react'
import Input from './Input';
import Button from './Button';
import $ from 'jquery';

function Modal() {
    useEffect(() => {
        // effect
        $("#submit-disease").on('click', () => {
            $.post("http://localhost:8080/api/diseases", response => {
                if (response.status === 'success') {
                    
                }
            })
        });
        return () => {
            $("#submit-disease").off('click');
        }
    })
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
                        <Input name="name" field="Name" placeholder="eg. Cacar" required={true} />
                        <Input name="description" field="Description" multiline={true} placeholder="Enter disease's description" required={true} />
                        <Input name="treatment" field="Treatment" multiline={true} placeholder="Enter disease's treatment" required={true} />
                    </div>
                    <div className="modal-footer">
                        <Button id="submit-disease" type="submit" color="primary" text="Add Disease" />
                        <Button type="button" color="secondary" text="Cancel" dismiss="modal"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
