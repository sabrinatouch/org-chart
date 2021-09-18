// OrgChart.js

import React, { Component } from 'react';
import './OrgChart.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { data } from '../../data/data.js';

const StatusBarColor = ({color}) => {
    const statusBarStyle = {
        height: 20,
        width: '100%',
        backgroundColor: color
    }

    return (
        <div style={statusBarStyle} />
    );
}

// Conditional Rendering ?
const StatusBar = ({status}) => {
    switch (status) {
        case "normal":
            return <StatusBarColor color={"#4caf50"} />;
            break;
        case "warning":
            return <StatusBarColor color={"#ffeb3b"} />;
            break;
        case "critical":
            return <StatusBarColor color={"#f44336"} />;
            break;
    }
};

const Employee = ({employee}) => {
    return (
        <div class="container-style">
            <StatusBar status={employee.status} />
            {/* <StatusBar color={} /> */}
            <div>
                {employee.position} <br />
                {employee.location}
            </div>
        </div>
    );
};

export const OrgChart = () => {
    return (
        <div>
            {data.map((employee, key) => {
                return (
                    <div key={key}>
                        <Employee employee={employee} />
                    </div>
                );
            })}
        </div>
    );
};

export default OrgChart;