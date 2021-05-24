import React, { Component } from "react";
import deaths from "../Assets/Images/deaths.png";
import diagnosedCases from "../Assets/Images/diagnosed-cases.png";
import recovered from "../Assets/Images/recovered.png";
import totalPatient from "../Assets/Images/totalConfirmed.png";
import NumberFormat from 'react-number-format';
class Summary extends Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div>
        
        
        <div className="row container" style={{ marginTop: 16 }}>
        <div style={{fontFamily: "Fredoka One, cursive"}}>
          <h3>COVID-19 Global Stats</h3>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
        <hr style={{ opacity:0.6 }}/>
          <div className="col s12 m3">
            <div className="card-panel hoverable #80deea cyan lighten-3">
              <div className="black-text" style={styleBox.headerText}>
                <p>
                New Confirmed
                </p>
              </div>
              <span>
                <img style={styleBox.images} src={diagnosedCases} alt="new patients" />
              </span>
              <div className="black-text" style={styleBox.subText}>
                
                <NumberFormat thousandSeparator={true} displayType={"text"} value= {summary.NewConfirmed}/>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card-panel hoverable #ef5350 red lighten-1">
              <div className="black-text" style={styleBox.headerText}>               
                  <p>New Deaths</p>              
              </div>
              <span>
                <img style={styleBox.images} src={deaths} alt="deaths" />
              </span>
              <div className="black-text" style={styleBox.subText}>
                <NumberFormat thousandSeparator={true} displayType={"text"} value= {summary.NewDeaths}/>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card-panel hoverable #a5d6a7 green lighten-3">
              <div className="black-text" style={styleBox.headerText}>
              <p>
              New Recovered
                </p>
              </div>
              <span>
                <img style={styleBox.images} src={recovered} alt="recovered" />
              </span>
              <div className="black-text" style={styleBox.subText}>
               
                <NumberFormat thousandSeparator={true} displayType={"text"} value= {summary.NewRecovered}/>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card-panel hoverable #b3e5fc light-blue lighten-4">
              <div className="black-text" style={styleBox.headerText}>
               <p>
                Total Confirmed
               </p>
              </div>
              <span>
                <img style={styleBox.images} src={totalPatient} alt="totalPatient" />
              </span>
              <div className="black-text" style={styleBox.subText}>
                {/* {summary.TotalConfirmed} */}
                <NumberFormat thousandSeparator={true} displayType={"text"} value={summary.TotalConfirmed}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
var styleBox = {
  images: {
    width: "50%",
  },
  headerText: {
    fontFamily: "Fredoka One, cursive",
    fontSize: 20,
    width: 'auto'
  },
  subText: {
    fontSize: 25,
    fontFamily: "Merriweather, serif",
  },
};
export default Summary;
