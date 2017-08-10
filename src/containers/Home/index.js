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
  setInsuranceMonth,
  setNewPrice
} from "../../actions";

import "./Home.css";
import "font-awesome/css/font-awesome.css";

const USE_DATE_MAX = 119;
const USE_DATE_MIN = 0;

const ROAD_HAUL_MAX = 35;
const ROAD_HAUL_MIN = 0;

const INSURANCE_DATE_MAX = 33;
const INSURANCE_DATE_MIN = -25;

const GEAR_BOX_MAX = 1;
const GEAR_BOX_MIN = 0;

const NEW_PRICE_MAX = 576;
const NEW_PRICE_MIN = 0;

const BRAND_INDEX_MAX = 139;
const BRAND_INDEX_MIN = 0;

const mapStateToProps = state => {
  const normalizedUseDate =
    (state.year * 12 + state.month - USE_DATE_MIN) /
    (USE_DATE_MAX - USE_DATE_MIN);

  const normalizedInsuranceDate =
    (state.insuranceYear * 12 + state.insuranceMonth - INSURANCE_DATE_MIN) /
    (INSURANCE_DATE_MAX - INSURANCE_DATE_MIN);

  const selectedCar = state.cars.find(car => car.title === state.carType);

  const normalizedNewPrice =
    (state.newPrice - NEW_PRICE_MIN) / (NEW_PRICE_MAX - NEW_PRICE_MIN);

  const normalizedRoalHaul =
    (state.roadHaul - ROAD_HAUL_MIN) / (ROAD_HAUL_MAX - ROAD_HAUL_MIN);

  const selectedGear = state.gears.find(gear => gear.title === state.gearType);

  const normalizedGearBox =
    (selectedGear.value - GEAR_BOX_MIN) / (GEAR_BOX_MAX - GEAR_BOX_MIN);

  const normalizedBrandIndex =
    (selectedCar.brandIndex - BRAND_INDEX_MIN) /
    (BRAND_INDEX_MAX - BRAND_INDEX_MIN);

  return {
    carType: state.carType,
    gearType: state.gearType,
    newPrice: state.newPrice,
    year: state.year,
    month: state.month,
    roadHaul: state.roadHaul,
    insuranceYear: state.insuranceYear,
    insuranceMonth: state.insuranceMonth,
    normalizedData: {
      inputs: [
        {
          roal_haul: {
            dataType: 40,
            dataValue: normalizedRoalHaul
          },
          new_price: {
            dataType: 40,
            dataValue: normalizedNewPrice
          },
          use_date: {
            dataType: 40,
            dataValue: normalizedUseDate
          },
          insurance_date: {
            dataType: 40,
            dataValue: normalizedInsuranceDate
          },
          gearbox: {
            dataType: 40,
            dataValue: normalizedGearBox
          },
          brand_index: {
            dataType: 40,
            dataValue: normalizedBrandIndex
          }
        }
      ]
    }
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
    },
    setNewPrice: newPrice => {
      dispatch(setNewPrice(newPrice));
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
    const that = this;
    axios
      .post("http://localhost:5555/estimate", this.props.normalizedData)
      .then(function(response) {
        that.setState({
          assessedValue: (Number(response.data.outputs[0].outputLabel) * 0.5).toFixed(2)
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
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
    if (/^\d*\.?\d*$/.test(e.target.value)) {
      this.props.setRoadHaul(e.target.value);
    }
  };

  handleSetPrice = e => {
    if (/^\d*\.?\d*$/.test(e.target.value)) {
      this.props.setNewPrice(e.target.value);
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
              <label htmlFor="">品牌选择</label>
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
              <label htmlFor="">变速箱</label>
            </Col>
            <Col xs={9}>
              <Link to="/gear-choose">
                <div className="hack-select-button">
                  <span className="car-type">
                    {this.props.gearType}
                  </span>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="hack-row hack-input-row">
            <Col xs={3}>
              <label htmlFor="">新车价格</label>
            </Col>
            <Col xs={9}>
              <input
                className="text-input"
                value={this.props.newPrice}
                type="text"
                onChange={this.handleSetPrice}
              />
              <span className="unit">万元</span>
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
              <span className="unit">万公里</span>
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
