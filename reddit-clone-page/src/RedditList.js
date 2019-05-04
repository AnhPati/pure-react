import React from 'react';
import RedditItem from './RedditItem';
import PropTypes from 'prop-types';
import './RedditList.css';

const RedditList = ({posts}) => {
    return(
        <ul>
            {posts.map(post => (
                <RedditItem key={post.id} post={post} score={post.score}/>
            ))}
        </ul>
    );   
};

RedditList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default RedditList;