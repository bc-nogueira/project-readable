import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../App.css';
import { getCategories } from './../actions/categories';
import { getPosts } from './../actions/posts';
import Navbar from './Navbar';
import Post from './Post';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
        <Navbar categories={this.props.categories} />
        <div className="row justify-content-center">
          {this.props.posts && this.props.posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return { 
    posts: posts.sort((a, b) => b.voteScore - a.voteScore),
    categories
  }
}

export default connect(mapStateToProps, { getPosts, getCategories })(App);
