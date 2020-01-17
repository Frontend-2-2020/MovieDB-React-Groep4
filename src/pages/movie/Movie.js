// Imports
//////////

// Base dependencies
import React, {Component} from 'react';
import axios from 'axios';

// Components
import { Spinner } from "../../components/spinner/Spinner";
import { Backdrop } from "../../components/backdrop/Backdrop";
import { MovieDetails } from "../../components/movieDetails/MovieDetails";


// Movie component
//////////////////

class Movie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: null
        }
    }

    // When the component mounts fetch the movie
    componentDidMount() {

        const baseUrlMovie = process.env.REACT_APP_BASEURL_MOVIE;
        const ApiKey = process.env.REACT_APP_API_KEY;

        // Fetch the movieId from the url params
        const movieId = this.props.match.params.id;

        // Generate url & do the AJAX request to get the movie
        const url = `${baseUrlMovie}${movieId}?api_key=${ApiKey}`;
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

            // Fill the content of the page
            content = (
                <div className="h-100">
                    {/* Row for movie backdrop & average score */}
                    <Backdrop movie={movie} />

                    {/* Flexbox for movie details */}
                    <MovieDetails movie={movie}/>
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