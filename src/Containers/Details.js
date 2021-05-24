import React, { Component } from "react";
import axios from "axios";
import Summary from "./Summary";
import AllCountries from "./AllCountries";
class Details extends Component {
  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    console.log(res);
    this.setState({
      countries: res.data.Countries,
      global: res.data.Global,
      currentDate: res.data.Date,
      // loading: true
    });
  }
  state = {
    countries: [],
    global: [],
    currentDate: null,
  };

  render() {
    return (
      <div>
        <Summary
          summary={this.state.global}
          currentDate={this.state.currentDate}
        />
        <div className="row container">
            <div>
            <h3 style={{fontFamily: "Fredoka One, cursive"}} >All Countries</h3>
            <hr/>
            </div>

          <table>
            <thead style={{ fontFamily: "Fredoka One, cursive" }}>
              <tr>
                <th>Country</th>
                <th>New Confirmed</th>
                <th>Total Recovered</th>
                <th>Total Deaths</th>
              </tr>
            </thead>

            <tbody>
              {this.state.countries.map((country) => (
                <AllCountries countries={country} key={country.Country} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Details;
