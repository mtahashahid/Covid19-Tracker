  import React, { Component } from "react";
  import deaths from "../Assets/Images/deaths.png";
  class Summary extends Component {
    render() {
      const { summary, currentDate } = this.props;
      return (
        <div >
          <div className="row container" style={{marginTop:16}}>
            <div className="col s12 m3" >
              <div className="card-panel teal">
                <div className="black-text" style={styleBox.headerText}>New Confirmed</div>
                <span>
                  <img style={styleBox.images} src={deaths} alt="deaths" />
                </span>
              <div className="white-text" style={styleBox.subText}>
              {summary.NewConfirmed}
              </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card-panel red">
                <div className="black-text" style={styleBox.headerText}>New Deaths</div>
                <span>
                  <img style={styleBox.images} src={deaths} alt="deaths" />
                </span>
              <div className="white-text" style={styleBox.subText}>
              {summary.NewDeaths}
              </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card-panel green">
                <div className="black-text" style={styleBox.headerText}>New Confirmed</div>
                <span>
                  <img style={styleBox.images} src={deaths} alt="deaths" />
                </span>
              <div className="white-text" style={styleBox.subText}>
              {summary.NewRecovered}
              </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card-panel teal">
                <div className="black-text" style={styleBox.headerText}>New Confirmed</div>
                <span>
                  <img style={styleBox.images} src={deaths} alt="deaths" />
                </span>
              <div className="white-text" style={styleBox.subText}>
              {summary.TotalConfirmed}
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  var styleBox = {
    images:{
      width:"50%"
    },
    headerText:{
      fontFamily: 'Fredoka One, cursive',
      fontSize:20
    },
    subText:{
      fontSize: 25,
      fontFamily: 'Merriweather, serif'
    }
  }
  export default Summary;
