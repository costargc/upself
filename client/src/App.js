import React, { Component } from "react";
import HomePage from "./pages/HomePage"
import Page404 from "./pages/Page404"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/swag" render={() => { window.location.href = "./swag.html#!/all" }} />
          <Route component={Page404} />
        </Switch>
      </Router>

    );
  }
}

export default App;
