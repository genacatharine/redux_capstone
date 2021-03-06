import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar'
import Login from './containers/login'
import FourOhFour from './containers/FourOhFour'
import toHikeList from './containers/tohikelist'
import Register from './containers/Register'
import { Router, Route} from 'react-router'
import history from './containers/History'
import Header from './containers/header'

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <div>
          {/* <Header /> */}
          <Route exact path='/' component={SearchBar} />
          <Route path='/login' component={Login} />
          <Route path='/FourOhFour' component={FourOhFour} />
          <Route path='/register' component={Register} />
          <Route path='/tohikelist' component={toHikeList} />
        </div>
      </Router>
    );
  }
}

export default App;
