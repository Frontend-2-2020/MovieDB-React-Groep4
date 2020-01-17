// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// ModalFooter component
////////////////////////

export const ModalFooter = ({ history, movie }) => {
    return (
        <div className="modal-footer d-flex justify-content-between">
            <button
                data-dismiss="modal" aria-label="Close"
                className="btn btn-primary">
                Back <i className="fas fa-undo-alt ml-2"/>
            </button>
            <button
                data-dismiss="modal" aria-label="Close"
                className="btn btn-primary"
                onClick={() => history.push(`/movie/${movie.id}`)}
            >
                View moviedetail <i className="fas fa-search ml-2"/>
            </button>
        </div>
    );
};


// Prop types for the component
ModalFooter.propTypes = {
    movie: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};