import React, { Component, useState, useEffect } from 'react';
import OrgChart from '../OrgChart/OrgChart';
import { data } from '../../data/data.js';
import { data1 } from '../../data/data1.js'

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {employeeData: []};
    }

    // This method runs AFTER the component output
    // has been rendered to the DOM
        // For presentation purposes
        // Call the fakeFetchData function every 3s
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.fakeFetchData(),
            3000
        );
    }

    // Prevents memory leaks ?
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    // Just for presentation purposes
    // That the new data can be shown as new data is fetched
        // In practice, would instead implement an API call
        // utilizing fetch() to collect the new data
    fakeFetchData() {
        console.log("New data is being has been fetched.")

        if (this.state.employeeData == data) {
            this.setState({
                employeeData: data1
            })
        } else if (this.state.employeeData == data1) {
            this.setState({
                employeeData: data
            })
        } else if (this.state.employeeData = []) (
            this.setState({
                employeeData: data
            })
        )

        console.log("Updated: employeeData")
    }

    render() {
        return (
            <div>
                <OrgChart data={this.state.employeeData} />
                {/* <OrgChart data={data} /> */}
            </div>
        )
    }
    
}

export default Dashboard;