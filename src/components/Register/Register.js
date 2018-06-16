import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import './Register.css'

import { Logo } from '../Logo';

class Register extends Component {

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
      <section class="hero is-fullheight landing">
        <div class="hero-body">
          <div className="container has-text-centered" id="login-form">
            <div className="box">
            <div>
                <Logo />
              </div>
              <h3 class="title">Register</h3>
              <form>
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
                <button class="button is-block is-info is-large is-fullwidth" onClick={this.onSubmit}>Submit</button>
              </form>
              <div>
                <p class="has-text-grey sub-menu">
                  <Link to="/login">Login</Link> &nbsp;·&nbsp;
                  <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                  <a href="../">Need Help?</a>
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>
        );
      }
    }
    
const mapStateToProps = state => ({
          auth: state.auth,
        errors: state.errors
      });
      
const connectedRegister = connect(mapStateToProps, {registerUser})(Register);
export {connectedRegister as Register};