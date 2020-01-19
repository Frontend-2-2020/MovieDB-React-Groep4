// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// PageControlItem component
////////////////////////////

export const PageControlItem = ({ icon, action }) => {

    // Generate the right icon & attach the action on Click
    let control = '';

    const generatePageItem = (icon, label) => {
        return (
            <li className="page-item page-control" onClick={action}>
                <div className="page-link" aria-label={label}>
                    <i className={`fas fa-${icon} text-secondary`}/>
                </div>
            </li>
        )
    };

    if(icon === 'begin') { control =  generatePageItem("fast-backward", "begin") }
    else if(icon === 'previous') { control = generatePageItem("backward", "previous") }
    else if(icon === 'next') { control = generatePageItem("forward", "next") }
    else { control = generatePageItem("fast-forward", "end") }

    return (
        <div>
            {control}
        </div>
    )
};


// Prop types for the component
PageControlItem.propTypes = {
    icon: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};


