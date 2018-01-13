import React from "react";
import { Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import App from "./App.js";
import TestPage from "./pages/TestPage"
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history.js';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <Main auth={auth} {...props} />} />
        <Route path="/main" render={(props) => <Main auth={auth} {...props} />} />
        <Route path="/biodiversity" render={(props) => <Main auth={auth} {...props} />} />
        <Route path="/test" render={(props) => <TestPage auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
        {/* <Articles /> */}
      </div>
    </Router>
  );
};
