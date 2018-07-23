import React, { Component } from 'react';
import './Navbar.css';

export const Navbar = () => {
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
            <a className="navbar-item">
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}