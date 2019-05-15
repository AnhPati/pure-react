import React from 'react';
import PropTypes from 'prop-types';
import './PeopleBox.css';

function PeopleBox({person, chatChoice}) {
    return (
        <div className={person.active ? "personActive w-100" : "w-100"}>
            <button onClick={() => chatChoice(person)}className={person.news ? "btnChat news w-100" : "btnChat w-100"}>
                #{person.name}
            </button>
        </div>
    )
}

PeopleBox.propTypes = {
    people: PropTypes.array.isRequired,
    chatChoice: PropTypes.func.isRequired
}

export default PeopleBox;