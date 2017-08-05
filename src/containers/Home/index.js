import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import AssessedValueCard from "../../components/AssessedValueCard";
import { setYear, setMonth, setRoadHaul } from "../../actions";

import "./Home.css";
import "font-awesome/css/font-awesome.css";

const mapStateToProps = state => {
  return {
    carType: state.carType,
    year: state.year,
    month: state.month
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
                  <span className="car-type">
                    {this.props.carType}
                  </span>
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
            <Col xs={4}>
              <label htmlFor="">使用年限</label>
            </Col>
            <Col xs={4} className="hack-col">
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
