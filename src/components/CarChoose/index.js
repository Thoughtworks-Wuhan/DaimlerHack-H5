import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { RadioGroup, Radio } from "react-radio-group";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./CarChoose.css";

const mapStateToProps = state => {
  const carTypes = ["奔驰", "宝马"];
  return {
    carType: state.carType,
    carTypes
  };
};

class CarChoose extends Component {
  constructor(props) {
    super(props);
    this.state = { carType: "奔驰" };
  }

  handleChange = value => {
    this.setState({ carType: value });
  };

  render() {
    return (
      <div className="car-choose">
        <div>
          <RadioGroup
            name="carType"
            selectedValue={this.state.carType}
            onChange={this.handleChange}
          >
            <ul>
              {this.props.carTypes.map(carType =>
                <li>
                  <label>
                    <Radio value={carType} />
                    {carType}
                  </label>
                </li>
              )}
            </ul>
          </RadioGroup>
        </div>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Link to="/">
                <button>确定选择</button>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CarChoose);
