// OrgChart.js

import React, { Component } from 'react';
import './OrgChart.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { data } from '../../data/data.js';

export const OrgChart = () => {
    return (
        <div>
            {data.map((employee, key) => {
                return (
                    <div key={key}>
                        <EmployeeCard employee={employee} />
                    </div>
                );
            })}
        </div>
    );
};

export default OrgChart;