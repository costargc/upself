import React, { Component } from "react";
import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage}/>
        {/* <Route exact path="/swag" render={() => { window.location.href = "./swag.html#!/all" }} /> */}
      </Router>
    );
  }
}

export default App;
