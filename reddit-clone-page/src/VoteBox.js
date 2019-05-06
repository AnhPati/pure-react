import React from 'react';
import PropTypes from 'prop-types';
import './VoteBox.css';

const VoteBox = ({score, post, vote}) => {

    return (
        <div>
            <button onClick={() => vote(post, "increment")}>
                +
            </button>
            {score}
            <button onClick={() => vote(post, "decrement")}>
                -
            </button>
        </div>
    )
}

export default VoteBox;