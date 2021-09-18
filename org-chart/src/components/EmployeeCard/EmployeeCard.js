import React, { useState } from 'react';
import './EmployeeCard.css';
import OrgChart from '../OrgChart/OrgChart';

const EmployeeCard = ({node}) => {
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
        <div class="chart-style">
            <div class="container-style">
                <div>
                    <StatusBar status={node.status} />
                    {node.position} <br />
                    {node.location}
                </div>
            </div>

            <div class="container">
                <OrgChart data={node.children} />
            </div>
        </div>
    );
};

export default EmployeeCard;