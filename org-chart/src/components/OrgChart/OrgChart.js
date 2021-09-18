// OrgChart.js

import React, { Component } from 'react';
import './OrgChart.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import { data } from '../../data/data.js';

const Employee = ({employee}) => {
    return (
        <div class="container-style">
            {employee.status + " " + employee.position + " " + employee.location}
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