import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import classnames from "classnames";
import { RadioGroup, Radio } from "react-radio-group";
import { Link } from "react-router-dom";

import "./Choose.css";

class Choose extends Component {

  handleChange = value => {
    this.props.select(value);
  };

  render() {
    return (
      <div className="choose">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <h4>
                {this.props.title}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <RadioGroup
                name={this.props.name}
                selectedValue={this.props.selectedOption}
                onChange={this.handleChange}
              >
                <ul>
                  {this.props.options.map(option =>
                    <li key={option}>
                      <label
                        className={classnames({
                          active: this.props.selectedOption === option
                        })}
                      >
                        <Radio value={option} />
                        {option}
                      </label>
                    </li>
                  )}
                </ul>
              </RadioGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="choose-button">
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

export default Choose;
