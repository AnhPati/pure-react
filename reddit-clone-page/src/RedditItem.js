import React from 'react';
import VoteBox from './VoteBox';
import ItemBox from './ItemBox';
import PropTypes from 'prop-types';
import './RedditItem.css';

function RedditItem({ score, post, voteUp, voteDown }) {
    return (
        <li>
            <VoteBox score={score} voteUp={voteUp} voteDown={voteDown}/>
            <ItemBox post={post} />
        </li>
    )
}

RedditItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default RedditItem;