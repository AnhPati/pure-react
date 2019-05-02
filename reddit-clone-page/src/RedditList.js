import React from 'react';
import PropTypes from 'prop-types';
import './RedditList.css';

function RedditList({posts}) {
    return(
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <RedditItem post={post}/>
                </li>
            ))}
        </ul>
    );
};

RedditList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default RedditList;