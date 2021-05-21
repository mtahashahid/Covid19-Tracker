import React, { Component } from 'react'
import axios from "axios"
import Summary from './Summary'

class Details extends Component {
    async componentDidMount(){
        const res = await axios.get("https://api.covid19api.com/summary")
        console.log(res)
        this.setState({
            countries: res.data.Countries,
            global: res.data.Global,
            currentDate: res.data.Date,
            // loading: true
        })
    }
    state = {
        countries: [],
        global: [],
        currentDate: null
    }
    render() {
        return (
            <div>
                <Summary summary={this.state.global} currentDate= {this.state.currentDate}/>
            </div>
        )
    }
}
export default Details;