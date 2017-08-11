import React, { PureComponent } from "react";
import CountUp from 'react-countup';
import "./AssessedValueCard.css";

class AssessedValueCard extends PureComponent {
  render() {
    return (
      <div className="card">
        <div>
          <h2>您的汽车估值是</h2>
          <div className="card-value">
          <CountUp 
            className="fancy"
            start={0} 
            end={this.props.assessedValue} 
            decimals={2}/>
            万元
          </div>
        </div>
      </div>
    );
  }
}

export default AssessedValueCard;
