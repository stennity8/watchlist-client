import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'


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
    this.props.updateLoginForm(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Username" name="username" type="text" onChange={this.handleChange}></input>
        <input placeholder="Password" name="password" type="text" onChange={this.handleChange}></input>
        <input type="submit" value="Log In" className="ui button primary" />
      </form>
    );
  }
}

export default connect(null, { updateLoginForm })(LoginForm);
