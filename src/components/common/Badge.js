// Imports
//////////

// Base dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';


// Badge component
//////////////////

class Badge extends Component {
    render() {
        return (
            <span className="badge badge-pill badge-primary ml-2 mr-2 p-1">{this.props.genre}</span>
        );
    }
}


// Prop types for the component
Badge.propTypes = {
    genre: PropTypes.string.isRequired,
};


// Export
/////////

export default Badge;