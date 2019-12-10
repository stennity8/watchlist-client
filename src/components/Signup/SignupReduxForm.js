import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { signup } from '../../actions/currentUser';


export class SignupReduxForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    const inputType = `${label === "Username" ? "text" : "password"}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={inputType} />
        {this.renderError(meta)}
      </div>
    )
  }

  handleSubmit = (formValues) => {
    this.props.signup(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error">
        <Field name="username" component={this.renderInput} label="Username" />
        <Field name="password" component={this.renderInput} label="Password" />
        <Field name="password_confirmation" component={this.renderInput} label="Confirm Password" />
        <button className="ui button primary">Sign Up</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.username) {
    errors.username = "Invalid username"
  } else if (formValues.username.length < 4) {
    errors.username = "Username must be at least 4 characters in length"
  }

  if (!formValues.password) {
    errors.password = "Invalid password"
  } else if (formValues.password.length < 6) {
    errors.password = "Password must be at least 6 characters in length"
  }

  if (!formValues.password_confirmation) {
    errors.password_confirmation = "Passwords do not match"
  } else if (formValues.password_confirmation !== formValues.password) {
    errors.password_confirmation = "Passwords do not match"
  }

  return errors
}

SignupReduxForm = connect(null, { signup })(SignupReduxForm)

export default reduxForm({
  form: 'signup',
  validate
})(SignupReduxForm);
