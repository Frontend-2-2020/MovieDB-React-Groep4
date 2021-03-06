// Imports
//////////

// Base dependencies
import React from 'react';


// ModalHeader component
////////////////////////

export const ModalHeader = () => {
    return (
        <div className="modal-header">
            <span className="modal-title" id="movieDetailModalLabel">
                Movie detail
            </span>
            <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};