import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { login } from '../../actions/currentUser';


export class LoginReduxForm extends Component {
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
    this.props.login(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="ui form error">
        <Field name="username" component={this.renderInput} label="Username" />
        <Field name="password" component={this.renderInput} label="Password" />
        <button className="ui button primary">Log In</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.username) {
    errors.username = "Invalid username"
  }
  if (!formValues.password) {
    errors.password = "Invalid password"
  }

  return errors
}

LoginReduxForm = connect(null, { login })(LoginReduxForm)

export default reduxForm({
  form: 'login',
  validate
})(LoginReduxForm);
