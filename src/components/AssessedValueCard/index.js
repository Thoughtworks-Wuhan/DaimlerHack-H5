import React, { PureComponent } from "react";
import Transition from "react-transition-group/Transition";
import "./AssessedValueCard.css";

const duration = 500;

const defaultStyle = {
  position: "absolute",
  left: "-100%",
  transition: `${duration}ms`,
  width: "100%"
};

const transitionStyles = {
  entering: {
    transition: `${duration}ms`,
    left: 0
  },
  entered: {
    transition: `${duration}ms`,
    left: 0
  }
};

class AssessedValueCard extends PureComponent {
  render() {
    return (
      <div className="card">
        <Transition in={this.props.assessedValue > 0} timeout={duration}>
          {state =>
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <h2>您的汽车估值是</h2>
              <div className="card-value">
                参考价格：{this.props.assessedValue} 元
              </div>
            </div>}
        </Transition>
      </div>
    );
  }
}

export default AssessedValueCard;
