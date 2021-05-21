import React, { Component } from "react";

class Summary extends Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s12 m2">
            <div className="card-panel teal">
              <div className="white-text">NewConfirmed</div>
              <span className="white-text">{summary.NewConfirmed}</span>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card-panel teal">
              <div className="white-text">NewConfirmed</div>
              <span className="white-text">{summary.NewConfirmed}</span>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card-panel teal">
              <div className="white-text">NewConfirmed</div>
              <span className="white-text">{summary.NewConfirmed}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Summary;
