import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HikeList from './containers/hike_list'
import SearchBar from './containers/search_bar'
import Header from './containers/header'
import Login from './containers/login'
import FourOhFour from './containers/FourOhFour'
import Register from './containers/Register'
import { Router, Route, Switch } from 'react-router'
import history from './containers/History'

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <div>
          <Route path='/' component={SearchBar} />
          <Route path='/login' component={Login} />
          <Route path='/FourOhFour' component={FourOhFour} />
          <Route path='/register' component={Register} />
        </div>

      </Router>
    );
  }
}

export default App;
