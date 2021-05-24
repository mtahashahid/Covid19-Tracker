import React, { Component } from "react";
import NumberFormat from 'react-number-format';
class AllCountries extends Component {
  render() {
      const {countries} = this.props;
    return (
        
        <tr style={{fontFamily: "Merriweather, serif",fontWeight:600}}>
            <td>{countries.Country}</td>
            <td><NumberFormat thousandSeparator={true} displayType={"text"} value= {countries.NewConfirmed}/></td>
            <td><NumberFormat thousandSeparator={true} displayType={"text"} value= {countries.TotalRecovered}/></td>
            <td><NumberFormat thousandSeparator={true} displayType={"text"} value= {countries.TotalDeaths}/></td>           
          </tr>
    );
  }
}

export default AllCountries;
