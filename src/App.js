import React, { Component } from "react";
import "./App.css";

import Login from "./Component/Login";
import Home from "./Component/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
//export default Beta;
