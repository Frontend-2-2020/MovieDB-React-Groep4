// Imports
//////////

// Base dependencies
import React, { Component } from 'react';
import axios from 'axios';

// Components
import { MovieCard } from '../../components/movieCard/MovieCard';
import { Spinner } from '../../components/spinner/Spinner';
import { Pagination } from '../../components/pagination/Pagination';
import MovieDetailModal from '../../components/movieDetailModal/MovieDetailModal';


// Overview component
/////////////////////

class Overview extends Component {

    // Constructor for the component
    constructor(props) {
        super(props);

        this.state = {
            moviesLoading: true,
            movies: [],
            movie: {},
            currentPage: 1,
            pages: null
        }
    };


    // When the component mounts fetch the movies
    componentDidMount() {
        this.fetchMovies();
    }


    /******************
     * Event handlers *
     ******************/

    // Handler to fetch the movies
    fetchMovies = () => {

        const baseUrlOverview = process.env.REACT_APP_BASEURL_OVERVIEW;
        const ApiKey = process.env.REACT_APP_API_KEY;

        // Do the request to get the movies & set the state
        axios.get(`${baseUrlOverview}&api_key=${ApiKey}&page=${this.state.currentPage}`)
            .then(res => {
                this.setState({
                    moviesLoading: false,
                    movies: res.data.results,
                    pages: res.data.total_pages
                });
            })
    };

    // Handler to change the movie in the modal
    changeMovie = (movie) => {
        this.setState({
            movie: movie
        }, this.fetchMovies)
    };

    // Decrement page handler
    decrementPage = () => {
        this.state.currentPage > 1 &&
        this.setState({
            currentPage: this.state.currentPage - 1
        }, this.fetchMovies)
    };

    // Increment page handler
    incrementPage = () => {
        this.state.currentPage < this.state.pages &&
        this.setState({
            currentPage: this.state.currentPage + 1
        }, this.fetchMovies)
    };

    // Set first page handler
    setPageBegin = () => {
        this.setState({
            currentPage: 1
        }, this.fetchMovies)
    };

    // Set last page handler
    setPageEnd = () => {
        this.setState({
            currentPage: this.state.pages
        }, this.fetchMovies)
    };

    // Set page number handler
    selectPage = (value) => {
        Math.abs(value) <= this.state.pages
            ? this.setState({
                currentPage: Math.abs(value)
            }, this.fetchMovies)
            : this.setState({
                currentPage: this.state.pages
            }, this.fetchMovies)
    };

    /*************************
     * End of event handlers *
     *************************/


    render() {

        // Fetch stuff from the state
        const { movies, moviesLoading, pages, currentPage, movie } = this.state;

        // Generate the content, show a spinner of the movies are still loading
        const moviesContent = moviesLoading
            ? <Spinner/>
            : movies.map(movie => {
                const posterUrl = process.env.REACT_APP_BASEURL_CARDIMG + movie.poster_path;
                return <MovieCard key={movie.id} votes={movie.vote_average} overview={movie.overview} poster={posterUrl} relDate={movie.release_date} title={movie.title} movie={movie} changeMovie={this.changeMovie}/>
            });

        return (
            <div>
                <Pagination pages={pages} currentPage={currentPage} decrementPage={this.decrementPage} incrementPage={this.incrementPage}
                            setPageEnd={this.setPageEnd} setPageBegin={this.setPageBegin} selectPage={this.selectPage}/>

                <div className="row">
                    {moviesContent}
                    <MovieDetailModal movie={movie}/>
                </div>

                <Pagination pages={pages} currentPage={currentPage} decrementPage={this.decrementPage} incrementPage={this.incrementPage}
                            setPageEnd={this.setPageEnd} setPageBegin={this.setPageBegin} selectPage={this.selectPage}/>
            </div>

        );
    }
}

export default Overview;