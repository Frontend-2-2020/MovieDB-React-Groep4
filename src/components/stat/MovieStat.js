// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// MovieStat component
//////////////////////

export const MovieStat = ({position, head, par, type}) => {

    // Discern className
    let className = "";
    if(position === "right") {
        className = "d-flex flex-column justify-content-end align-items-end"
    }

    // Discern text color
    let textColor = "";
    if(type === "modal") {
        textColor = " text-muted";
    }

    return (
        <div className={className}>
            <h4 className={"lead" + textColor}>{head}</h4>
            <p className={"mb-0" + textColor}>{par}</p>
        </div>
    );
};


// Prop types for the component
MovieStat.propTypes = {
    position: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    par: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    type: PropTypes.string,
};