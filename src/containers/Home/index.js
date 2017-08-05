import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AssessedValueCard from "../../components/AssessedValueCard";

import "./Home.css";
import "font-awesome/css/font-awesome.css";

const mapStateToProps = state => {
  return {
    carType: state.carType
  };
};

class Home extends Component {
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
      <div className="home">
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
              <Link to="/car-choose">
                <div className="hack-select-button">
                  <span className="car-type">{this.props.carType}</span>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="hack-row hack-input-row">
            <Col xs={4}>
              <label htmlFor="">行驶里程</label>
            </Col>
            <Col xs={8}>
              <input className="text-input" type="text" />
              <span className="unit">公里</span>
            </Col>
          </Row>
          <Row className="hack-row hack-input-row">
            <Col xs={4}>
              <label htmlFor="">使用年限</label>
            </Col>
            <Col xs={4} className="hack-col">
              <input className="text-input" type="text" />
              <span className="year">年</span>
            </Col>
            <Col xs={4} className="hack-col">
              <input className="text-input" type="text" />
              <span className="month">月</span>
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

export default connect(mapStateToProps)(Home);
