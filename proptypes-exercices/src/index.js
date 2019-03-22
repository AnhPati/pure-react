import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

function Exercices() {
    return (
        <div className="mainContainer">
            <h1 className="title-xl u-marginBottom-md">PropTypes Exercices</h1>
            <ul className="exercicesContainer c-listeNone u-flexBox centered column">
                <li className="exercicesItem u-flexBox centered column">
                    <h2 class="title-md u-marginBottom-md">Exercice 1 :</h2>
                    <ExerciceUn/>
                </li>
            </ul>
        </div>
    );
};

function ExerciceUn() {
    return (
        <div className="u-flexBox centered">
            <AdressLabel person={defaultPerson}/>
        </div>
    );
};

function AdressLabel({person}) {
    return (
        <div>
            <ul className="c-listeNone u-flexBox column">
                <li className="u-flexBox fullname paragraph-md">
                    {person.fullname}
                </li>
                <li className="u-flexBox adress paragraph-sm">
                    {person.adress}
                </li>
                <li className="u-flexBox city paragraph-md bold">
                    {person.city}
                </li>
            </ul>
        </div>
    );
};

AdressLabel.propTypes = {
    person: PropTypes.shape({
        fullname: PropTypes.string,
        adress: PropTypes.string,
        city: PropTypes.string
    }).isRequired
}

var defaultPerson = {
    fullname: "Full Name",
    adress: "123 Fake St.",
    city: "Boston, MA 02118"
}

ReactDOM.render(<Exercices/>, document.getElementById("root"))