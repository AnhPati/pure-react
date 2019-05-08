import React from 'react';
import PropTypes from 'prop-types';
import './VoteBox.css';

const VoteBox = ({score, post, vote}) => {

    return (
        <div className="d-flex align-items-center flex-column py-4">
            <button className="btnNone btnVote" onClick={() => vote(post, "increment")}>
                <i className="fas fa-arrow-up font-weight-bold"></i>
            </button>
            <span className="scoreVote font-weight-bold">{score}</span>
            <button className="btnNone btnVote" onClick={() => vote(post, "decrement")}>
                <i className="fas fa-arrow-down font-weight-bold"></i>
            </button>
        </div>
    )
}

VoteBox.prototypes = {
    score: PropTypes.number.isRequired,
    post: PropTypes.object.isRequired,
    vote: PropTypes.func.isRequired
}

export default VoteBox;