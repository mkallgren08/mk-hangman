import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Callback from '../../Callback/Callback.js';
import history from '../../history.js';
import Auth from '../../Auth/Auth.js';
// import Auth from './Auth/Auth.js';

// const auth = new Auth();
// auth.login();

//const history = require('history')

const auth = new Auth();


class Nav2 extends Component {
  componentDidMount() {
    console.log('History object: ' + JSON.stringify(history, 2, null));
    console.log('this.history: ' + this.history)
    console.log(history.replace)
    console.log('this.props.history: ' + this.props.history)
  }

  goTo(route) {
    //this.props.history.replace(`/${route}`)
    history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'profile')}
                >
                  Profile
                  </Button>
              )
            }
            {
              !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                  </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                  </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Nav2;
