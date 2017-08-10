import React, { Component } from "react";
import Home from "./containers/Home";
import CarChoose from "./containers/CarChoose";
import GearChoose from "./containers/GearChoose";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/car-choose" component={CarChoose} />
          <Route exact path="/gear-choose" component={GearChoose} />
          <footer>ThoughtWorks</footer>
        </div>
      </Router>
    );
  }
}

export default App;
