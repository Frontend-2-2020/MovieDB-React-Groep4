// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Poster component
///////////////////

export const Poster = ({ url, title }) => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mr-4">
            <img src={url} alt={title}/>
        </div>
    );
};


// Prop types for the component
Poster.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
};
