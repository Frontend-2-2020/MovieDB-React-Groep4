// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Languages
import ISO6391 from "iso-639-1";

// Components
import { TitleOverview } from "../../titleOverview/TitleOverview";
import { MovieStat } from "../../stat/MovieStat";
import { Poster } from "../../poster/Poster";

// Utils
import { generateBackdropStyle, generateScoreStyle } from "../../../utils/styleGenerators";


// ModalBody component
//////////////////////

export const ModalBody = ({ movie, movieGenres }) => {

    // Set poster URI
    const posterUrl = process.env.REACT_APP_BASEURL_CARDIMG + movie.poster_path;

    // Styling for the backdrop & score
    const backdropStyle = generateBackdropStyle(movie.backdrop_path);
    const scoreStyle = generateScoreStyle(movie.vote_average);

    return (
        <div className="modal-body client-detail-content h-100">
            <div className="h-100" style={backdropStyle}>
                <div className="p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.80)', display: 'block'}}>

                    {/* Flexbox for movie details */}
                    <div className="d-flex h-100">

                        {/* Poster */}
                        <Poster url={posterUrl} title={movie.title}/>

                        {/* Movie information */}
                        <div className="d-flex flex-column justify-content-start">

                            {/* Title & overview */}
                            <TitleOverview overview={movie.overview} genres={movieGenres} title={movie.title} type="modal"/>

                            {/* Other info */}
                            <div className="d-flex flex-column justify-content-end h-100">

                                {/* Stats */}
                                <div className="stats">
                                    <div className="d-flex justify-content-between align-content-between mb-4">
                                        <MovieStat type="modal" position="left" head="Language" par={ISO6391.getName(movie.original_language)}/>
                                        <MovieStat type="modal" position="right" head="Release date" par={movie.release_date}/>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <MovieStat type="modal" position="left" head="Total votes" par={movie.vote_count}/>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div
                                                className="d-flex flex-column justify-content-center align-items-center"
                                                style={scoreStyle}>
                                                <h6 className="m-0">{movie.vote_average}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Prop types for the component
ModalBody.propTypes = {
    movie: PropTypes.object.isRequired,
    movieGenres: PropTypes.array.isRequired,
};