// OrgChart.js

import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

const OrgChart = ({ data = [] }) => {
    // Map initial read in data to be the root of the tree
        return (
            <div>
                {data.map((employee, key) => {
                    return (
                        <div key={key}>
                            <EmployeeCard node={employee} />
                        </div>
                    );
                })}
            </div>
        );
    
}

export default OrgChart;