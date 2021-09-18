// OrgChart.js

import React, { Component } from 'react';
import './OrgChart.css';
// import EmployeeCard from '../EmployeeCard/EmployeeCard';

const OrgChart = ({ data = [] }) => {
    // Map initial read in data to be the root of the tree
    return (
        <div>
            {data.map(employee => {
                console.log("hello");
                return (
                    <EmployeeCard node={employee} />
                );
            })}
        </div>
    );
};

const EmployeeCard = ({node}) => {

    // Does the current tree node have children (true) or not (false)
    const hasChild = node.children ? true : false

    // const hasChild = () => {
    //     if (node.children) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

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
    // Render current tree node 
    return (
        <div>
            <div class="container-style">
                <div>
                    <StatusBar status={node.status} />
                    {node.position} <br />
                    {node.location}
                </div>
            </div>

            <OrgChart data={node.children} />
        </div>
    );
};

export default OrgChart;