// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { generateBackdropStyle, generateScoreStyle } from "../../utils/styleGenerators";


// Backdrop component
/////////////////////

export const Backdrop = ({ movie }) => {

    // Styling for the backdrop & score
    const backdropStyle = generateBackdropStyle(movie.backdrop_path);
    const scoreStyle = generateScoreStyle(movie.vote_average);

    return (
        <div className="row">
            <div className="col-12" style={backdropStyle}>
                <div className="d-flex flex-column justify-content-end align-items-end p-4">
                    <div className="d-flex flex-column justify-content-center align-items-center"
                         style={scoreStyle}>
                        <h3 className="m-0">{movie.vote_average}</h3>
                    </div>
                </div>
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="mb-2 text-light">{movie.tagline}</h3>
                </div>
            </div>
        </div>
    );
};


// Prop types for the component
Backdrop.propTypes = {
    movie: PropTypes.object.isRequired,
};