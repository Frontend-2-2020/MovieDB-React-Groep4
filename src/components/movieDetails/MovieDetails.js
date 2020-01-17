// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Languages
import ISO6391 from "iso-639-1";

// Components
import { Poster } from "../poster/Poster";
import { TitleOverview } from "../titleOverview/TitleOverview";
import { MovieStat } from "../stat/MovieStat";
import { ProdCompanies } from "../prodCompanies/ProdCompanies";


// MovieDetails component
/////////////////////////

export const MovieDetails = ({ movie }) => {

    // Set poster URI
    const posterUrl = process.env.REACT_APP_BASEURL_CARDIMG + movie.poster_path;

    return (
        <div className="d-flex h-100 p-4">
            {/* Poster */}
            <Poster url={posterUrl} title={movie.title}/>

            {/* Movie information */}
            <div className="d-flex flex-column justify-content-start">

                {/* Title & overview */}
                <TitleOverview overview={movie.overview} genres={movie.genres} title={movie.title}/>

                {/* Other info */}
                <div className="d-flex flex-column justify-content-between h-100 mt-4">

                    {/* Stats */}
                    <div className="stats">
                        <div className="d-flex justify-content-between align-content-between mb-4">
                            <MovieStat position="left" head="Original language" par={ISO6391.getName(movie.original_language)}/>
                            <MovieStat position="right" head="Release date" par={movie.release_date}/>
                        </div>
                        <div className="votes d-flex justify-content-between">
                            <MovieStat position="left" head="Total votes" par={movie.vote_count}/>
                            <MovieStat position="right" head="Popularity" par={movie.popularity}/>
                        </div>
                    </div>

                    {/* Production companies */}
                    <ProdCompanies prodCompanies={movie.production_companies}/>

                </div>
            </div>
        </div>
    );
};


// Prop types for the component
MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired,
};