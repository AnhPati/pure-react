import React from 'react';
import RedditItem from './RedditItem';
import PropTypes from 'prop-types';
import './RedditList.css';

const RedditList = ({posts, vote}) => {
    let redditList = posts.sort((a, b) => a.score - b.score);
    return(
        <ul>
            {redditList.map(post => {

                return (
                    <li key={post.id}>
                        <RedditItem post={post} score={post.score} vote={vote}/>
                    </li>
            )})}
        </ul>
    );   
};

RedditList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default RedditList;