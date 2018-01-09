import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HikeList from './containers/hike_list'
import HikeDetail from './containers/hike-detail'
import SearchBar from './containers/search_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* <HikeList /> */}
        {/* <HikeDetail /> */}
      </div>
    );
  }
}

export default App;
