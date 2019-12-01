import React, { Component } from 'react';
import './App.css';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'
import { Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import history from '../history'
import Home from './Home'

export class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LoginForm} />
              <Route path="/signup" exact component={SignupForm} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);