import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";

const App = () => (
  <Router>
  <div>
    <Route exact path="/" component={Main} />
    <Route exact path="/biodiversity" component={Main} />
    {/* <Articles /> */}
  </div>
  </Router>
);


export default App;
