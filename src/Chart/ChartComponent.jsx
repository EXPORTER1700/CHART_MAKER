import React from 'react';
import {Bar, Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

const ChartComponent = ({labels, datasets, type}) => {
    const data = {
        labels,
        datasets
    }
    switch (type) {
        case('bar'):
            return <Bar data={data}/>
        case('line'):
            return <Line data={data}/>
        default:
            return <Bar data={data}/>
    }
};

export default ChartComponent;