// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Badge from "../badge/Badge";


// TitleOverview component
//////////////////////////

export const TitleOverview = ({ title, overview, genres, type }) => {

    // Discern text color
    let textColor = "";
    if (type === "modal") {
        textColor = " text-secondary";
    }

    // Generate the genre badges for the movie
    const genresToDisplay = genres.map((genre, index) =>
        <Badge key={index} genre={genre.name} />
    );

    return (
        <>
            <h3 className={"mb-2" + textColor}>{title}</h3>
            <p className={"mb-2" + textColor}>{overview}</p>

            <div className="genres">
                {genresToDisplay}
            </div>
        </>
    );
};


// Prop types for the component
TitleOverview.propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
};