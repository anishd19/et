import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './Navbar.css';

class Navbar extends Component {

  onLogoutClick = () => {
    this.props.logoutUser();
  }
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <div className="logo">Expense Tracker</div>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item">
                Dashboard
              </a>
              <a className="navbar-item" onClick={this.onLogoutClick}>
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const connectedNavbar = connect(mapStateToProps, { logoutUser })(Navbar);
export { connectedNavbar as Navbar };