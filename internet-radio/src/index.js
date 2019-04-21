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
        <div className="card-body row justify-content-around align-items-center">
            {genres.map(genre => (
                <RadioButton key={genre.id} genre={genre}/>
            ))}
        </div>
    );
};

RadioContainer.prototypes = {
    genres: PropTypes.array.isRequired
};

function RadioButton({genre}) {
    return (
        <a className={genre.id > 30 ? "btn btn-light btn-sm mx-2 my-1" : genre.id > 15 ? "btn btn-light btn-md mx-2 my-1" : "btn btn-light btn-lg mx-2 my-1"} href="#">
            {genre.genre}
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
    {
        id: 5,
        genre: "Jazz"
    },
    {
        id: 6,
        genre: "Blues"
    },
    {
        id: 7,
        genre: "Rock"
    },
    {
        id: 8,
        genre: "Top 50"
    },
    {
        id: 9,
        genre: "Indie"
    },
    {
        id: 10,
        genre: "Electro"
    },
    {
        id: 11,
        genre: "Metal"
    },
    {
        id: 12,
        genre: "Variete"
    },
    {
        id: 13,
        genre: "Traditionnel"
    },
    {
        id: 14,
        genre: "World Music"
    },
    {
        id: 15,
        genre: "Psychedelics"
    },
    {
        id: 16,
        genre: "Transe"
    },
    {
        id: 17,
        genre: "Raggamuffin"
    },
    {
        id: 18,
        genre: "Dancehall"
    },
    {
        id: 19,
        genre: "Zouk"
    },
    {
        id: 20,
        genre: "Salsa"
    },
    {
        id: 21,
        genre: "Batchata"
    },
    {
        id: 22,
        genre: "Cumbia"
    },
    {
        id: 23,
        genre: "Kizomba"
    },
    {
        id: 24,
        genre: "Swing"
    },
    {
        id: 25,
        genre: "Zouk"
    },
    {
        id: 26,
        genre: "Salsa"
    },
    {
        id: 27,
        genre: "Batchata"
    },
    {
        id: 28,
        genre: "Cumbia"
    },
    {
        id: 29,
        genre: "Kizomba"
    },
    {
        id: 30,
        genre: "Swing"
    },
    {
        id: 31,
        genre: "Jungle"
    },
    {
        id: 32,
        genre: "SoudTracks"
    },
    {
        id: 33,
        genre: "RnB"
    },
    {
        id: 34,
        genre: "Soul"
    },
    {
        id: 35,
        genre: "Folk"
    },
    {
        id: 36,
        genre: "Country"
    },
    {
        id: 37,
        genre: "Classic"
    },
    {
        id: 38,
        genre: "Grunge"
    },
    {
        id: 39,
        genre: "Disco"
    },
    {
        id: 40,
        genre: "Chill"
    }
];

ReactDOM.render(<RadioComponent genres={radioDatas}/>, document.getElementById("root"));