import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HikeList from './containers/hike_list'
import HikeDetail from './containers/hike-detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HikeList />
        <HikeDetail />
      </div>
    );
  }
}

export default App;
