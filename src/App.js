import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Home from "./containers/Home";
import CarChoose from "./containers/CarChoose";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/car-choose" component={CarChoose} />
        </div>
      </Router>
    );
  }
}

export default App;
