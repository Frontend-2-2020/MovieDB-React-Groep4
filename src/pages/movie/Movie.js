// Imports
//////////

// Base dependencies
import React, {Component} from 'react';
import axios from 'axios';

// Language
import ISO6391 from "iso-639-1";

// Components
import { Spinner } from "../../components/spinner/Spinner";
import { generateBackdropStyle, generateScoreStyle } from "../../utils/styleGenerators";


// Movie component
//////////////////

class Movie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            baseUrlMovie: process.env.REACT_APP_BASEURL_MOVIE,
            apiKey: process.env.REACT_APP_API_KEY,
            movie: null
        }
    }

    // When the component mounts fetch the movie
    componentDidMount() {

        // Fetch baseUrlMovie & api key from the state
        const { baseUrlMovie, apiKey } = this.state;

        // Fetch the movieId from the url params
        const movieId = this.props.match.params.id;

        // Generate url & do the AJAX request to get the movie
        const url = `${baseUrlMovie}${movieId}?api_key=${apiKey}`;
        axios.get(url)
            .then(res => {
                this.setState({
                    movie: res.data
                })
            })
    }

    render() {

        // Fetch the movie from the state
        const { movie } = this.state;

        // Initialize the content
        let content = '';

        // Fill the content according to movie being loaded or not
        if(!movie) {
            content = <Spinner/>
        } else {

            // Styling for the backdrop & score
            const backdropStyle = generateBackdropStyle(movie.backdrop_path);
            const scoreStyle = generateScoreStyle(movie.vote_average);

            // Set poster URI
            const posterUrl = process.env.REACT_APP_BASEURL_CARDIMG + movie.poster_path;

            // Generate production companie logo's if available
            const productionCompanies = movie.production_companies.map(prodComp => {
                if(prodComp.logo_path) {
                    return (<img className="ml-2 mr-2" height="40px" src={`${process.env.REACT_APP_BASEURL_CARDIMG}${prodComp.logo_path}`} alt={prodComp.name}/>)
                }
            });

            // Generate the genre badges for the movie
            const genresToDisplay = movie.genres.map((genre, index) =>
                <span className="badge badge-pill badge-primary ml-2 mr-2 p-1" key={index}>{genre.name}</span>
            );

            // Fill the content of the page
            content = (
                <div className="h-100">
                    {/* Row for movie backdrop & average score */}
                    <div className="row">
                        <div className="col-12" style={backdropStyle}>
                            <div className="d-flex flex-column justify-content-end align-items-end p-4">
                                <div className="d-flex flex-column justify-content-center align-items-center"
                                     style={scoreStyle}>
                                    <h3 className="m-0">{movie.vote_average}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flexbox for movie details */}
                    <div className="d-flex h-100 p-4">
                        {/* Poster */}
                        <div className="d-flex flex-column justify-content-center align-items-center mr-4">
                            <img src={posterUrl} alt={movie.title}/>
                        </div>

                        {/* Movie information */}
                        <div className="d-flex flex-column justify-content-start">
                            {/* Title & overview */}
                            <h3 className="mb-2">{movie.title}</h3>
                            <p className="mb-2">{movie.overview}</p>

                            {/* Genres */}
                            <div className="genres">
                                {genresToDisplay}
                            </div>

                            {/* Other info */}
                            <div className="d-flex flex-column justify-content-between h-100 mt-4">
                                {/* Stats */}
                                <div className="stats">
                                    <div className="d-flex justify-content-between align-content-between mb-4">
                                        <div>
                                            <h4 className="lead">Language</h4>
                                            <p className="mb-0">{ISO6391.getName(movie.original_language)}</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-end align-items-end">
                                            <h4 className="lead">Release date</h4>
                                            <p className="mb-0">{movie.release_date}</p>
                                        </div>
                                    </div>
                                    <div className="votes d-flex justify-content-between">
                                        <div>
                                            <h4 className="lead">Total votes</h4>
                                            <p className="mb-0">{movie.vote_count}</p>
                                        </div>
                                        <div className="d-flex flex-column justify-content-end align-items-end">
                                            <h4 className="lead">Popularity</h4>
                                            <p className="mb-0">{movie.popularity}</p>
                                        </div>

                                    </div>
                                </div>

                                {/* Production companies */}
                                <div className="productionCompanies">
                                    <h3>Production companies</h3>
                                    <div className="productionCompanies d-flex">
                                        {productionCompanies}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <>
                {content}
            </>
        );
    }
}


// Export
/////////

export default Movie;