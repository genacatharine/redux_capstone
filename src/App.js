import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HikeList from './containers/hike_list'
import SearchBar from './containers/search_bar'
import Header from './containers/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
