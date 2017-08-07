import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import AssessedValueCard from "../../components/AssessedValueCard";
import {
  setYear,
  setMonth,
  setRoadHaul,
  setInsuranceYear,
  setInsuranceMonth
} from "../../actions";

import "./Home.css";
import "font-awesome/css/font-awesome.css";

const mapStateToProps = state => {
  return {
    carType: state.carType,
    year: state.year,
    month: state.month,
    insuranceYear: state.insuranceYear,
    insuranceMonth: state.insuranceMonth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setRoadHaul: roadHaul => {
      dispatch(setRoadHaul(roadHaul));
    },
    setYear: year => {
      dispatch(setYear(year));
    },
    setMonth: month => {
      dispatch(setMonth(month));
    },
    setInsuranceYear: year => {
      dispatch(setInsuranceYear(year));
    },
    setInsuranceMonth: month => {
      dispatch(setInsuranceMonth(month));
    }
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
    axios
      .post("http://localhost:5555/estimate", {
        inputs: [
          {
            roal_haul: {
              dataType: 40,
              dataValue: 0.1036
            },
            new_price: {
              dataType: 40,
              dataValue: 0.102
            },
            use_date: {
              dataType: 40,
              dataValue: 0.254
            },
            insurance_date: {
              dataType: 40,
              dataValue: 0.198
            }
          }
        ]
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({
      assessedValue: 50000
    });
  };

  handleSetYear = e => {
    if (/^\d*$/.test(e.target.value)) {
      this.props.setYear(e.target.value);
    }
  };

  handleSetMonth = e => {
    if (/^\d*$/.test(e.target.value)) {
      this.props.setMonth(e.target.value);
    }
  };

  handleSetinsuranceYear = e => {
    if (/^\d*$/.test(e.target.value)) {
      this.props.setInsuranceYear(e.target.value);
    }
  };

  handleSetinsuranceMonth = e => {
    if (/^\d*$/.test(e.target.value)) {
      this.props.setInsuranceMonth(e.target.value);
    }
  };

  handleSetRoadHaul = e => {
    if (/^\d*$/.test(e.target.value)) {
      this.props.setRoadHaul(e.target.value);
    }
  };

  render() {
    return (
      <div className="home">
        <Grid fluid>
          <Row className="hack-row">
            <Col xs={12}>
              <h1>智能二手车估值</h1>
            </Col>
          </Row>
          <Row className="hack-row hack-input-row">
            <Col xs={3}>
              <label htmlFor="">车型选择</label>
            </Col>
            <Col xs={9}>
              <Link to="/car-choose">
                <div className="hack-select-button">
                  <span className="car-type">
                    {this.props.carType}
                  </span>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="hack-row hack-input-row">
            <Col xs={3}>
              <label htmlFor="">行驶里程</label>
            </Col>
            <Col xs={9}>
              <input
                className="text-input"
                value={this.props.roadHaul}
                type="text"
                onChange={this.handleSetRoadHaul}
              />
              <span className="unit">公里</span>
            </Col>
          </Row>
          <Row className="hack-row hack-input-row">
            <Col xs={3}>
              <label htmlFor="">使用年限</label>
            </Col>
            <Col xs={5} className="hack-col">
              <input
                maxLength="2"
                className="text-input"
                type="text"
                onChange={this.handleSetYear}
                value={this.props.year}
              />
              <span className="year">年</span>
            </Col>
            <Col xs={4} className="hack-col">
              <input
                maxLength="2"
                className="text-input"
                type="text"
                onChange={this.handleSetMonth}
                value={this.props.month}
              />
              <span className="month">月</span>
            </Col>
          </Row>
          <Row className="hack-row hack-input-row">
            <Col xs={3}>
              <label htmlFor="">保险到期</label>
            </Col>
            <Col xs={5} className="hack-col">
              <input
                maxLength="2"
                className="text-input"
                type="text"
                onChange={this.handleSetinsuranceYear}
                value={this.props.insuranceYear}
              />
              <span className="year">年</span>
            </Col>
            <Col xs={4} className="hack-col">
              <input
                maxLength="2"
                className="text-input"
                type="text"
                onChange={this.handleSetinsuranceMonth}
                value={this.props.insuranceMonth}
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
