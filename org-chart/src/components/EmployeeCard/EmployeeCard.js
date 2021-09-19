import React from 'react';
import './EmployeeCard.css';
import OrgChart from '../OrgChart/OrgChart';

const EmployeeCard = ({node}) => {
    const StatusBarColor = ({color}) => {
        const statusBarStyle = {
            height: 20,
            width: '100%',
            backgroundColor: color,
            marginBottom: 20
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
                return <StatusBarColor color={"#ffcd38"} />;
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
                <StatusBar status={node.status} />
                <div class="position-style">
                    {node.position}
                </div>
                <div class="location-style">
                    {node.location}
                </div>
            </div>

            <OrgChart data={node.children} />
        </div>
    );
};

export default EmployeeCard;