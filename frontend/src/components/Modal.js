import React from 'react'
import Input from './Input';
import Button from './Button';

function Modal() {
    return (
        <div id="add-disease-modal" className="modal right fade" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header p-4">
                        <h5 className="modal-title">Add Disease</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4">
                        <Input field="Nama" placeholder="eg. Cacar" required={true} />
                        <Input field="Description" multiline={true} placeholder="Enter disease's description" required={true} />
                        <Input field="Treatment" multiline={true} placeholder="Enter disease's treatment" required={true} />
                    </div>
                    <div className="modal-footer">
                        <Button color="primary" text="Add Disease" />
                        <Button color="secondary" text="Cancel" dismiss="modal"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
