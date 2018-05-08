import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import './Register.css'


class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      username: '',
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth && this.props.auth.isAuthenticated) {
      this.setState({ redirectToReferrer: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.setState({ redirectToReferrer: true });
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    };

    this.props.registerUser(userData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container" id="login-form">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={this.onSubmit}>
              Register
            </button>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const connectedRegister = connect(mapStateToProps, { registerUser })(Register);
export { connectedRegister as Register };