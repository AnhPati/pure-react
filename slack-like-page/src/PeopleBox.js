import React from 'react';
import PropTypes from 'prop-types';
import './PeopleBox.css';

function PeopleBox({people}) {
    return (
        <ul>
            {people.map(person => {
                return (
                    <li key={person.id} className={person.active ? "personActive" : ""}>
                        #{person.name}
                    </li>
                )
            })}
        </ul>
    )
}

PeopleBox.propTypes = {
    people: PropTypes.array.isRequired
}

export default PeopleBox;