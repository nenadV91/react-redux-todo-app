import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../actions';

// Auth
import Register from './auth/Register';
import Login from './auth/Login';
import auth from './auth/Auth';

// Layout
import Navbar from './navbar/Navbar';
import Home from './Home';
import NotFound from './NotFound';


class App extends Component {
  componentWillMount() {
    this.props.getUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
  
          <Switch>
            <Route exact path="/" component={auth(Home, 'requireAuth')} />
            <Route exact path="/login" component={auth(Login, 'isLoggedIn')} />
            <Route exact path="/register" component={auth(Register, 'isLoggedIn')} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {getUser})(App);
