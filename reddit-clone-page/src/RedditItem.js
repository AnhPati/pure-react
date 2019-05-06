import React from 'react';
import VoteBox from './VoteBox';
import ItemBox from './ItemBox';
import PropTypes from 'prop-types';
import './RedditItem.css';

function RedditItem({ score, post, voteUp, voteDown }) {
    return (
        <div>
            <VoteBox score={score} post={post} voteUp={voteUp} voteDown={voteDown}/>
            <ItemBox post={post} />
        </div>
    )
}

RedditItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default RedditItem;