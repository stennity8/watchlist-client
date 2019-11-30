import React, { Component } from 'react';
import './App.css';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'

export class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);