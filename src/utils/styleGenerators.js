// Back drop base style
let backdropBaseStyle = {
    height: '450px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
};

// Score base style
const scoreBaseStyle = {
    height: '50px', width: '50px', borderRadius: '50%'
};


/**
 * Function to generate the score style
 * @param {number} vote - Average score the movie has been given
 * @returns {{borderRadius, width, height}&{backgroundColor: string}}
 */
export const generateScoreStyle = vote => {
    // Discern scoreStyle
    if (vote <= 10 && vote >= 8.5) {
        return {...scoreBaseStyle, backgroundColor: 'rgb(3, 173, 252)'};
    } else if (vote < 8.5 && vote >= 7) {
        return {...scoreBaseStyle, backgroundColor: 'rgb(3, 252, 211)'};
    } else if (vote < 7 && vote >= 5.5) {
        return {...scoreBaseStyle, backgroundColor: 'rgb(169, 252, 3)'};
    } else if (vote < 5.5 && vote >= 4) {
        return {...scoreBaseStyle, backgroundColor: 'rgb(252, 198, 3)'};
    } else {
        return {...scoreBaseStyle, backgroundColor: 'rgb(252, 61, 3)'};
    }
};


/**
 * Function to generate the backdrop style
 * @param {string} backDrop - Url part for the backdrop image
 * @returns {{backgroundSize, backgroundPosition, backgroundRepeat, height}&{backgroundImage: string}}
 */
export const generateBackdropStyle = backDrop => {
    const baseUrlBackdrop = process.env.REACT_APP_BASEURL_BACKDROP;
    return {...backdropBaseStyle, backgroundImage: `url('${baseUrlBackdrop}${backDrop}')`};
};


