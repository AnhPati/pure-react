import React from 'react';
/*import axios from 'axios';*/
import RedditList from './RedditList'
import './App.css';

class App extends React.Component {
  state = {
      posts: [
        {
          id: 1,
          score: 3,
          author: "Joe",
        },
        {
          id: 2,
          score: 13,
          author: "Jill",
        },
        {
          id: 3,
          score: 31,
          author: "Jay",
        },
        {
          id: 4,
          score: 23,
          author: "Jul",
        }
      ],
  };

  /*componentDidMount() {
      axios.get('https://www.reddit.com/r/reactjs.json').then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
      });
  };*/
  handleVoteUp = (item) => {
    console.log(item)
    this.setState({
      score: item + 1
    });
  };

  handleVoteDown = (item) => {
    console.log(item)
    this.setState({
      score: item - 1
    });
  };

  render() {
    return (
      <RedditList posts={this.state.posts} voteUp={this.handleVoteUp} voteDown={this.handleVoteDown}/>
    );
  };
  
};

export default App;