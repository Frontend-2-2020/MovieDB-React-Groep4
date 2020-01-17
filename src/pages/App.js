// Imports
//////////

// Base dependencies
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import {Navbar} from '../components/navbar/Navbar';
import Overview from './overview/Overview';
import Movie from './movie/Movie';

// Styling
import '../assets/css/App.css';


// App component
////////////////

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <div className="container-fluid mt-4 mb-4">
                    <Switch>
                        <Route exact path="/" component={Overview}/>
                        <Route path={`/movie/:id`} component={Movie}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}


// Export
/////////

export default App;
