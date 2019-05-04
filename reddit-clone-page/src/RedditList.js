import React from 'react';
import RedditItem from './RedditItem';
import PropTypes from 'prop-types';
import './RedditList.css';

const RedditList = ({posts, voteUp, voteDown}) => {
    let redditList = posts.sort((a, b) => a.score - b.score);
    return(
        <ul>
            {redditList.map(post => (
                <RedditItem key={post.id} post={post} score={post.score} voteUp={voteUp} voteDown={voteDown}/>
            ))}
        </ul>
    );   
};

RedditList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default RedditList;