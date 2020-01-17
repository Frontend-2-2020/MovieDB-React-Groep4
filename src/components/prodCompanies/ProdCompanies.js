// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// ProdCompanies component
//////////////////////////

export const ProdCompanies = ({prodCompanies}) => {

    const baseUrlCardImage = process.env.REACT_APP_BASEURL_CARDIMG;

    // Generate production company logo's if available
    const productionCompanies = prodCompanies.map((prodComp, index) => {
        if(prodComp.logo_path) {
            return (
                <img key={index} className="ml-2 mr-2" height="40px"
                     src={`${baseUrlCardImage}${prodComp.logo_path}`} alt={prodComp.name}/>
            )
        } else {
            return ""
        }
    });

    return (
        <div>
            <h3>Production companies</h3>
            <div className="productionCompanies d-flex">
                { productionCompanies }
            </div>
        </div>
    );
};


// Prop types for the component
ProdCompanies.propTypes = {
    prodCompanies : PropTypes.array.isRequired,
};