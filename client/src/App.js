// import React from "react";
// import { Router, Route } from "react-router-dom";
// import Main from "./pages/Main";
// import TestPage from "./pages/TestPage"
// import Callback from './Callback/Callback';
// import Auth from './Auth/Auth';
// import history from './history.js';

// const auth = new Auth();

// const handleAuthentication = ({ location }) => {
//   if (/access_token|id_token|error/.test(location.hash)) {
//     auth.handleAuthentication();
//   }
// }

// const App = () => (
//   <Router history={history}>
//     <div>
//       <Route exact path="/" render={(props) => <Main auth={auth} {...props} />} />
//       <Route exact path="/biodiversity" component={Main} />
//       <Route exact path="/test" component={TestPage} />
//       <Route path="/callback" render={(props) => {
//         handleAuthentication(props);
//         return <Callback {...props} />
//       }} />
//       {/* <Articles /> */}
//     </div>
//   </Router>
// );


// export default App;

import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
// import Auth from './Auth/Auth.js';

// const auth = new Auth();
// auth.login();

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
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

export default App;

