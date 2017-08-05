import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import classnames from "classnames";
import Choose from "../../components/Choose";
import { connect } from "react-redux";
import { RadioGroup, Radio } from "react-radio-group";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { addCarType } from "../../actions";

const mapStateToProps = state => {
  const carTypes = ["奔驰", "宝马"];
  return {
    selectedOption: state.carType,
    options: carTypes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select: id => {
      dispatch(addCarType(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose);
