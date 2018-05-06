import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css'


export class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    // this.props.route.fakeAuth.authenticate(() => {
    //   this.setState({ redirectToReferrer: true });
    // });
  };

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
            <input className="input" type="email" placeholder="Email"/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password"/>
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={this.login}>
              Login
            </button>
          </p>
        </div>
      </div>
    );
  }
}