import React, { Component } from 'react';
import * as Api from './utils/api';
import './App.css';

class App extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    try {
      const categories = await Api.fetchCategories();
      this.setState({ categories });
      console.log(categories);
    } catch(err) {
      console.log('Erro ao carregar categorias: ' + err);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Categories</h1>
        <ul>
          {this.state.categories.map(category => (
            <li>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
