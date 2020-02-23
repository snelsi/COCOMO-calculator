import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Cocomo, NoResult } from "pages";
import { Nav } from "./components/Nav";

export const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/calc">
        <Cocomo />
      </Route>
      <Route path="*">
        <NoResult />
      </Route>
    </Switch>
  </Router>
);
