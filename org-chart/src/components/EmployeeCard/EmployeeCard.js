import React, { Component } from 'react';
import './EmployeeCard.css';

class EmployeeCard extends Component {
    render() {
        return (
            <div class="container-style">
                <div class="text-style">
                    employee.status <br />
                    employee.position <br />
                    employee.location <br />
                </div>
            </div>
        )
    }
}

export default EmployeeCard;