import React, { Component } from 'react';
import './App.css';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'
import Logout from './Logout'

export class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <div>
        <LoginForm />
        <Logout />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);