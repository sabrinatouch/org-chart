import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import Data from '../../data.json';

class OrgChart extends Component {
    render() {
        return (
            <div>
                <EmployeeCard />
            </div>
        )
    }
}

export default OrgChart;