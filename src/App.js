import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';
import { Login } from './components/Login'
import './App.css';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/login" component={Login}/>
            {/* <Route path="/register" component={Register}/> */}
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </Provider>
      );
  }
}

const Home = () => {
  return <div> Home Page </div>
}

const Dashboard = () => {
  return <div> Dashboard </div>
}

export default App;