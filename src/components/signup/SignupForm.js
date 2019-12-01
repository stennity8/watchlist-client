import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/currentUser';

export class SignupForm extends Component {
  state = {
    username: "",
    password_digest: "",
    confirm_password: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state)
    this.setState({
      username: "",
      password_digest: "",
      confirm_password: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form error">
        <h3>Sign Up</h3>
        <div className="field">
          <label>Username</label>
          <input placeholder="Username" value={this.state.username} name="username" type="text" onChange={this.handleChange} autoComplete="off"></input>
        </div>
        <div className="field">
          <label>Password</label>
          <input placeholder="Password" value={this.state.password_digest} name="password_digest" type="password" onChange={this.handleChange} autoComplete="off"></input>
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input placeholder="Confirm Password" value={this.state.confirm_password} name="confirm_password" type="password" onChange={this.handleChange} autoComplete="off"></input>
        </div>
        <input type="submit" value="Sign Up" className="ui button primary" />
      </form>
    );
  }
}

export default connect(null, { signup })(SignupForm);