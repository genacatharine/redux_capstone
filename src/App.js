import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HikeList from './containers/hike_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HikeList />
      </div>
    );
  }
}

export default App;
