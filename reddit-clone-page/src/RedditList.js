import React from 'react';
import axios from 'axios';
import RedditItem from './RedditItem';
import PropTypes from 'prop-types';
import './RedditList.css';

class RedditList extends React.Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        axios.get('https://www.reddit.com/r/reactjs.json').then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({posts});
        });
    };

    handleVote = (post, action) => {
        let newStatePosts = this.state.posts.map(item => {
            if (post.id === item.id) {
                switch (action) {
                    case "increment":
                        {
                            item.score++;
                            break;
                        }
                    case "decrement":
                        {
                            item.score--;
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }
            }
            return item;
        });
        this.setState({
            posts: newStatePosts
        })
    };
    render() {
        let redditList = this.state.posts.sort((a, b) => b.score - a.score).map(post => {
            return (
                <li key={post.id}>
                    <RedditItem post={post} score={post.score} vote={this.handleVote}/>
                </li>
        )})

        return (
            <div className="container-fluid mainContainer">
                <ul className="list-group card shadow-sm redditList">
                    {redditList}
                </ul>
            </div>
        );
    }    
};

RedditList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default RedditList;