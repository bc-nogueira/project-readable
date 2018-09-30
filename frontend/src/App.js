import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getPosts } from './actions/posts';
import Post from './components/Post';

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
        <div className="row justify-content-center">
          {this.props.posts && this.props.posts.map(post => (
            <Post post={post} />
          ))}
      </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, { getPosts })(App);
