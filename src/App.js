import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import AssessedValueCard from "./components/AssessedValueCard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assessedValue: -1
    };
  }

  handleAssess = () => {
    this.setState({
      assessedValue: 50000
    });
  };
  render() {
    return (
      <div className="app">
        <Grid fluid>
          <Row className="hack-row">
            <Col xs={12}>
              <h1>二手车估值</h1>
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
              <button onClick={this.handleAssess}>估值</button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <AssessedValueCard assessedValue={this.state.assessedValue} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
