import React from 'react';
import PropTypes from 'prop-types';
import './VoteBox.css';

const VoteBox = ({score, voteUp, voteDown}) => {
    return (
        <div>
            <button onClick={() => voteUp(score)}>
                +
            </button>
            {score}
            <button onClick={() => voteDown(score)}>
                -
            </button>
        </div>
    )
}

export default VoteBox;