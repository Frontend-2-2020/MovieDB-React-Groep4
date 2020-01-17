// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';


// Component
////////////

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
            <div className="navbar-brand">Like movies</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Overview</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
