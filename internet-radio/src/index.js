import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

function RadioComponent({genres}) {
    return (
        <div className="card">
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
        <header className="card-header">
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

function RadioButton({key, genre}) {
    return (
        <a className={key > 10 ? "btn btn-primary btn-md" : key > 20 ? "btn btn-primary btn-sm" : key > 30 ? "btn btn-primary btn-xs" : "btn btn-primary btn-lg"} href="#">
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