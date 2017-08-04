import React, { PureComponent } from "react";
import Transition from "react-transition-group/Transition";
import "./AssessedValueCard.css";

const duration = 300;

const defaultStyle = {
  transitionTimingFunction: "ease-in",
  transition: `${duration}ms`,
  transform: "translateX(200%)"
};

const transitionStyles = {
  entering: {
    transitionTimingFunction: "ease-out",
    transition: `${duration}ms`,
    transform: "translateX(0)"
  },
  entered: {
    transitionTimingFunction: "ease-out",
    transition: `${duration}ms`,
    transform: "translateX(0)"
  }
};

class AssessedValueCard extends PureComponent {
  render() {
    return (
      <div className="card">
        <h2>你的汽车估值是</h2>
        <Transition in={this.props.assessedValue > 0} timeout={duration}>
          {state =>
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              className="card-value"
            >
              参考价格：{this.props.assessedValue}
            </div>}
        </Transition>
      </div>
    );
  }
}

export default AssessedValueCard;
