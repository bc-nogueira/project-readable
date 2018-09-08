import React, { Component } from 'react';
import * as Api from './utils/api';
import './App.css';

class App extends Component {
  state = {
    categories: [],
    posts: []
  }

  async componentDidMount() {
    try {
      const categories = await Api.fetchCategories();
      const posts = await Api.fetchPosts();
      this.setState({ categories, posts });
    } catch(err) {
      console.log('Erro ao carregar categorias: ' + err);
    }
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
