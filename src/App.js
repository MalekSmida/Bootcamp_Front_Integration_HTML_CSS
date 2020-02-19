import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import calltoaction from "./challenge/callToAction";
import card from "./challenge/card";
import list from "./challenge/list";
import signin from "./challenge/signIn";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={signin} />
          <Route exact path="/card" component={card} />
          <Route exact path="/list" component={list} />
          <Route exact path="/calltoaction" component={calltoaction} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;