import React, {useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import $ from 'jquery'

function DoctorListModal() {
    const [doctor, setDoctor] = useState({
        'name': '',
        'description': '',
        'address': '',
        'schedules': []
    })

    function sendDoctorRequest() {
        $.post("http://localhost:8080/api/doctors", doctor, response => {
            if (response.message === 'New doctor Added!') {
                window.location.reload()
            }
        })
    }

    function changeName(e) {
        setDoctor({...doctor, 'name': e.target.value})
    }

    function changeDescription(e) {
        setDoctor({...doctor, 'description': e.target.value})
    }

    function changeAddress(e) {
        setDoctor({...doctor, 'address': e.target.value})
    }

    function changeSchedules(clock, e) {
        let schedules = doctor.schedules;
        if (e.target.checked) {
            schedules.push(clock);
        }
        else {
            schedules = schedules.filter(v => v !== clock);
        }
        doctor.schedules = schedules;
    }

    function showSchedulesClock(start, end) {
        let clocks = []
        for (let i = start; i < end; i++) {
            clocks.push(
                <div className="form-check">
                    <input onChange={e => changeSchedules(`${i < 10 ? "0" + i : i}:00`, e)} type="checkbox" className="form-check-input" id={`jam${i}`} />
                    <label className="form-check-label" htmlFor={`jam${i}`}>{`${i < 10 ? "0" + i : i}:00`}</label>
                </div>
            );
        }
        return clocks;
    }

    return (
        <div id="add-doctor-modal" className="modal right fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header p-4">
                        <h5 className="modal-title">Add Doctor</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4">
                        <Input onChange={changeName} name="name" field="Doctor Name" placeholder="eg. Budi" required={true} />
                        <Input onChange={changeDescription} name="description" field="Description" multiline={true} placeholder="Enter doctor's description" required={true} />
                        <Input onChange={changeAddress} name="address" field="Address" placeholder="Enter doctor's address" required={true} />

                        <div class="d-flex flex-row justify-content-around">
                            <div>
                                {showSchedulesClock(0, 12)}
                            </div>
                            <div>
                                {showSchedulesClock(12, 24)}
                            </div>
                        </div>
                        {/* <div className="form-check">
                            <input onChange={e => changeSchedules("00.00", e)} type="checkbox" className="form-check-input" id="jam1" />
                            <label className="form-check-label" htmlFor="jam1">00.00</label>
                        </div> */}
                        {/* <input className="form-control" type="checkbox" id="jam1" name="jam" value="00.00" />
                        <label htmlFor="jam1">00.00</label><br /> */}
                        {/* <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label htmlFor="vehicle2"> I have a car</label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label htmlFor="vehicle3"> I have a boat</label><br></br> */}

                    </div>
                    <div className="modal-footer">
                        <Button onClick={sendDoctorRequest} type="submit" color="primary" text="Add Doctor" />
                        <Button type="button" color="secondary" text="Cancel" dismiss="modal"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorListModal
