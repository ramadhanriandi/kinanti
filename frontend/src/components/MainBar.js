import React from 'react'
import ListButton from './ListButton';

function MainBar() {
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
                    <ListButton name="Cacar" active />
                </ul>
            </div>
            <div className="p-4 w-75">
                <div className="h2">Cacar</div>
                <hr />
                <div class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div>
                    Treatment: <b>Beli Obat</b>
                </div>
            </div>
        </div>
    )
}

export default MainBar
