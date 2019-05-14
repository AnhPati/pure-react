import React from 'react';
import PropTypes from 'prop-types';
import './PeopleBox.css';

function PeopleBox({people}) {
    return (
        <div>
            
            <ul className="cList-none d-flex flex-column align-items-start">
            <h5>
                PEOPLE
            </h5>
                {people.map(person => {
                    return (
                        <li key={person.id} className={person.active ? "personActive w-100" : "w-100"}>
                            <button className={person.news ? "btnChat news w-100" : "btnChat w-100"}>
                                #{person.name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

PeopleBox.propTypes = {
    people: PropTypes.array.isRequired
}

export default PeopleBox;