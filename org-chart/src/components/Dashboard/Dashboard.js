import React, { Component } from 'react';
import OrgChart from '../OrgChart/OrgChart';
import { data } from '../../data/data.js';

const Dashboard = () => {
    return (
        <div>
            <OrgChart data={data} />
        </div>
    );
};

export default Dashboard;