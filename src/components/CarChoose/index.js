import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./CarChoose.css";

const mapStateToProps = state => {
  return {
    carType: state.carType 
  };
};

class CarChoose extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.carType}</div>;
  }
}

export default connect(mapStateToProps)(CarChoose);
