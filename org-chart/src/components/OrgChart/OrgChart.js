// OrgChart.js

import React, { Component } from 'react';
import './OrgChart.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

const OrgChart = ({ data = [] }) => {
    // Map initial read in data to be the root of the tree
    return (
        <div>
            {data.map((employee) => {
                return (
                    <EmployeeCard node={employee} />
                );
            })}
        </div>
    );
};

export default OrgChart;