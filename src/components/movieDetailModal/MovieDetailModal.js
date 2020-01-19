// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { withRouter } from "react-router-dom";
import { ModalHeader } from "./modalHeader/ModalHeader";
import { ModalBody } from "./modalBody/ModalBody";
import { ModalFooter } from "./modalFooter/ModalFooter";


// MovieDetailModal component
/////////////////////////////

const MovieDetailModal = (props) => {

    // Fetch the movie from the props
    const { movie } = props;

    // State handling
    const [movieGenres, setMovieGenres] = useState([]);

    // When the movie changes reload its genres
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if (Object.keys(movie).length > 0) {
                    const myGenres = res.data.genres.filter(genre => movie.genre_ids.indexOf(genre.id) > 0);
                    setMovieGenres(myGenres);
                }
            })
    }, [movie]);

    return (
        <div className="modal fade client-detail" id="movieDetailModal" tabIndex="-1"
             role="dialog" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{maxWidth: '850px'}}>
                <div className="modal-content">

                    {/* Modal header */}
                    <ModalHeader />

                    {/* Modal body */}
                    <ModalBody movie={movie} movieGenres={movieGenres}/>

                    {/* Modal footer */}
                    <ModalFooter movie={movie} history={props.history}/>

                </div>
            </div>
        </div>
    );
};


export default withRouter(MovieDetailModal)