import React from 'react';
/*import axios from 'axios';*/
import RedditList from './RedditList'
import './App.css';

class App extends React.Component {
  state = {
      posts: [
        {
          score: 3,
          author: "Joe",
        },
        {
          score: 13,
          author: "Jill",
        },
        {
          score: 31,
          author: "Jay",
        },
        {
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

  render() {
    return (
      <RedditList posts={this.state.posts}/>
    );
  };
  
};

export default App;