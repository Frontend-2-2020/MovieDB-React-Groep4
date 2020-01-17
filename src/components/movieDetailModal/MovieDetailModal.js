// Imports
//////////

// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ISO6391 from 'iso-639-1'
import {withRouter} from "react-router-dom";
import {generateBackdropStyle, generateScoreStyle} from "../../utils/styleGenerators";

// Component
////////////

const MovieDetailModal = (props) => {

    // Fetch the movie from the props
    const { movie } = props;

    // State handling
    const [movieGenres, setMovieGenres] = useState([]);

    // Set poster URI
    const posterUrl = process.env.REACT_APP_BASEURL_CARDIMG + movie.poster_path;

    // Styling for the backdrop & score
    const backdropStyle = generateBackdropStyle(movie.backdrop_path);
    const scoreStyle = generateScoreStyle(movie.vote_average);

    // When the movie changes reload its genres
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if (Object.keys(movie).length > 0) {
                    const myGenres = res.data.genres.filter(genre => movie.genre_ids.indexOf(genre.id) > 0);
                    setMovieGenres(myGenres)
                }
            })
    }, [movie]);

    // Generate the genre badges for the movie
    const genresToDisplay = movieGenres.map((genre, index) =>
        <span className="badge badge-pill badge-primary m-2 p-1" key={index}>{genre.name}</span>
    );

    return (
        <div className="modal fade client-detail" id="movieDetailModal" tabIndex="-1"
             role="dialog" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{maxWidth: '850px'}}>
                <div className="modal-content">

                    {/* Modal header */}
                    <div className="modal-header">
                        <span className="modal-title" id="movieDetailModalLabel">
                            Movie detail
                        </span>
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="modal-body client-detail-content">
                        <div>
                            <div className="h-100" style={backdropStyle}>
                                {/*<img id="myImage" src={`${baseUrlBackdrop}${movie.backdrop_path}`} width={`250%`}/>*/}
                                <div className="p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.80)', display: 'block'}}>
                                    <div className="d-flex h-100">
                                        <div
                                            className="d-flex flex-column justify-content-center align-items-center mr-4">
                                            <img src={posterUrl} alt={movie.title}/>
                                        </div>
                                        <div className="d-flex flex-column justify-content-start">
                                            <h3 className="text-light mb-2">{movie.title}</h3>
                                            <p className="text-muted mb-2">{movie.overview}</p>
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div className="genres">
                                                    {genresToDisplay}
                                                </div>
                                                <div className="info">
                                                    <div className="d-flex justify-content-between align-content-between mb-4">
                                                        <div>
                                                            <h4 className="lead text-muted">Language</h4>
                                                            <p className="text-muted mb-0">{ISO6391.getName(movie.original_language)}</p>
                                                        </div>
                                                        <div
                                                            className="d-flex flex-column justify-content-end align-items-end">
                                                            <h4 className="lead text-muted">Release date</h4>
                                                            <p className="text-muted mb-0">{movie.release_date}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h4 className="lead text-muted">Total votes</h4>
                                                            <p className="text-muted mb-0">{movie.vote_count}</p>
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div className="d-flex flex-column justify-content-center align-items-center"
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
                    </div>

                    {/* Modal footer */}
                    <div className="modal-footer d-flex justify-content-between">
                        <button
                            data-dismiss="modal" aria-label="Close"
                            className="btn btn-primary">
                            Back <i className="fas fa-undo-alt ml-2"/>
                        </button>
                        <button
                            data-dismiss="modal" aria-label="Close"
                            className="btn btn-primary"
                            onClick={() => props.history.push(`/movie/${movie.id}`)}
                        >
                            View moviedetail <i className="fas fa-search ml-2"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default withRouter(MovieDetailModal)