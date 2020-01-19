// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { PageNumbers } from './page-numbers/PageNumbers';
import { PageControls } from "./page-controls/PageControls";


// Pagination Component
///////////////////////

export const Pagination = ({ pages, currentPage, decrementPage, incrementPage, setPageEnd, setPageBegin, selectPage }) => {

    let paginationContent = '';

    // Hide the controls when there is no data
    if (!pages || !currentPage) {
        return (
            <div>{paginationContent}</div>
        )
    }

    // Generate the pagination content
    paginationContent = (
        <div className="mb-2">
            <PageNumbers
                currentPage={currentPage}
                pages={pages}
                selectPage={selectPage}
            />
            <PageControls
                decrementPage={decrementPage}
                incrementPage={incrementPage}
                setPageBegin={setPageBegin}
                setPageEnd={setPageEnd}
                selectPage={selectPage}/>
        </div>
    );

    return (
        <div className="mt-4">
            {paginationContent}
        </div>
    )
};


// Prop types for the component
Pagination.propTypes = {
    pages: PropTypes.number,
    currentPage: PropTypes.number.isRequired,
    setPageEnd: PropTypes.func.isRequired,
    setPageBegin: PropTypes.func.isRequired,
    incrementPage: PropTypes.func.isRequired,
    decrementPage: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired
};
