import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid fluid>
          <Row className="hack-row">
            <Col xs={4}>
              <label htmlFor="">车型选择</label>
            </Col>
            <Col xs={8}>
              <input type="text" />
            </Col>
          </Row>
          <Row className="hack-row">
            <Col xs={4}>
              <label htmlFor="">车型选择</label>
            </Col>
            <Col xs={8}>
              <input type="text" />
            </Col>
          </Row>
          <Row className="hack-row">
            <Col xs={4}>
              <label htmlFor="">车型选择</label>
            </Col>
            <Col xs={8}>
              <input type="text" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <button>估值</button>
            </Col>
          </Row>
        </Grid>
        <div />
      </div>
    );
  }
}

export default App;
