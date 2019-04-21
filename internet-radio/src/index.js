import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

function RadioComponent({genres}) {
    return (
        <div>
            <RadioHeader/>
            <RadioContainer genres={genres}/>
        </div>
    );
};

RadioComponent.prototypes = {
    genres: PropTypes.array.isRequired
}

const RadioHeader = () => {
    return (
        <header>
            <div>
                <h3>
                    <i></i> Popular Genres
                </h3>
            </div>
        </header>
    );
};

function RadioContainer({genres}) {
    return (
        <div>
            {genres.map(genre => (
                <RadioButton key={genre.id} genre={genre.genre}/>
            ))}
        </div>
    );
};

RadioContainer.prototypes = {
    genres: PropTypes.array.isRequired
};

function RadioButton({genre}) {
    return (
        <a href="#">
            {genre}
        </a>
    );
};

RadioButton.propTypes = {
    genre: PropTypes.string.isRequired
};

var radioDatas = [
    {
        id: 1,
        genre: "Reggae"
    },
    {
        id: 2,
        genre: "Hip-Hop"
    },
    {
        id: 3,
        genre: "Alternative"
    },
    {
        id: 4,
        genre: "Latino"
    },
];

ReactDOM.render(<RadioComponent genres={radioDatas}/>, document.getElementById("root"));