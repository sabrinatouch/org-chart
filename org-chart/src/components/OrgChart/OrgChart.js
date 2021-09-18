// OrgChart.js

import React, { Component } from 'react';
import './OrgChart.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { data } from '../../data/data.js';

const StatusBar = ({status}) => {
    const statusBarStyle = {
        height: 20,
        width: '100%',
        backgroundColor: "#ffffff",
    }

    // // Conditional Rendering ?
    // const statusColor = ({status}) => {
    //     switch (status) {
    //         case "normal":
    //             return "#4caf50";
    //             break;
    //         case "warning":
    //             return "#ffeb3b";
    //             break;
    //         case "critical":
    //             return "#f44336";
    //             break;
    //     }
    // };

    return (
        <div style={statusBarStyle} />
    );
}

const Employee = ({employee}) => {
    return (
        <div class="container-style">
            <StatusBar />
            {employee.position + " " + employee.location}
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