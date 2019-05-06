import React from 'react';
import PropTypes from 'prop-types';
import './VoteBox.css';

const VoteBox = ({score, post, voteUp, voteDown}) => {

    return (
        <div>
            <button onClick={() => voteUp(post)}>
                +
            </button>
            {score}
            <button onClick={() => voteDown(post)}>
                -
            </button>
        </div>
    )
}

export default VoteBox;