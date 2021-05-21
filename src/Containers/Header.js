import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper #e53935 red darken-1">
            <a href="!#" className="brand-logo center " style={{fontFamily: 'Fredoka One, cursive'}}>
              COVID-19 Tracker
            </a>
            {/* <h>font-family: 'Quicksand', sans-serif;</h> */}
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
