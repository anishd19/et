import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Login } from './Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login}/>
          {/* <Route path="/register" component={Register}/> */}
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return <div> Home Page </div>
}

const Dashboard = () => {
  return <div> Dashboard </div>
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;