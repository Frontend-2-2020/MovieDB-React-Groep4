// Imports
/////////

// Dependencies
import React from 'react';

// Media
import SpinnerImg from '../../assets/img/spinner.gif';


// Spinner component
////////////////////

export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100" style={{height: '500px'}}>
            <img className="spinner" src={SpinnerImg} alt="Loading..." style={{height: '15%', margin: 'auto'}}/>
        </div>
    )
};
