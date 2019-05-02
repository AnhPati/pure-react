import React from 'react';
import PropTypes from 'prop-types';
import './RedditItem.css';

function RedditItem({ post }) {
    return (
        <div>
            <VoteBox number={post.number}/>
            <ItemBox post={post} />
        </div>
    )
}

RedditItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default RedditItem;