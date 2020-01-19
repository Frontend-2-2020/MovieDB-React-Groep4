// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Badge component
//////////////////

const Badge  = ({ genre }) => {
        return (
            <span className="badge badge-pill badge-primary ml-2 mr-2 p-1">{genre}</span>
        );
};


// Prop types for the component
Badge.propTypes = {
    genre: PropTypes.string.isRequired,
};


// Export
/////////

export default Badge;