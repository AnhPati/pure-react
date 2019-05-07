import React from 'react';
import PropTypes from 'prop-types';
import './VoteBox.css';

const VoteBox = ({score, post, vote}) => {

    return (
        <div className="d-flex align-items-center flex-column">
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

export default VoteBox;