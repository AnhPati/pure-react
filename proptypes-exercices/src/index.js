import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function Exercices() {
    return (
        <div>
            <h1>PropTypes Exercices</h1>
            <ul>
                <li>
                    <h2>Exercice 1 :</h2>
                    <ExerciceUn/>
                </li>
                
            </ul>
        </div>
    );
};

function ExerciceUn() {
    return (
        <div>
            <AdressLabel person={defaultPerson}/>
        </div>
    );
};

function AdressLabel({person}) {
    return (
        <div>
            <ul>
                <li>
                    {person.fullName}
                </li>
                <li>
                    {person.adress}
                </li>
                <li>
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