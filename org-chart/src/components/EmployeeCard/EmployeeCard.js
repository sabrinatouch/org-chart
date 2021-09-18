import React, { Component } from 'react';
import './EmployeeCard.css';


export const EmployeeCard = ({employee}) => {
    
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

export default EmployeeCard;