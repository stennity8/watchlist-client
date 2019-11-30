import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/currentUser';

export class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Username" value={this.state.username} name="username" type="text" onChange={this.handleChange}></input>
        <input placeholder="Password" value={this.state.password} name="password" type="text" onChange={this.handleChange}></input>
        <input type="submit" value="Log In" className="ui button primary" />
      </form>
    );
  }
}

export default connect(null, { login })(LoginForm);
