import React from 'react';
import PropTypes from 'prop-types';
import './RedditList.css';

function RedditList({posts}) {
    return(
        <ul>
            {posts.map(post => (
                <li key={post.id} post={post}>
                {post.name}
                </li>
            ))}
        </ul>
    );
};

RedditList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default RedditList;