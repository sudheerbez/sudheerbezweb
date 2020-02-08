import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Help the Elderly',
    'Sankalp',
    'Annai-Fathima'
  ],
  datasets: [{
    data: [9000, 40000, 23000],
    backgroundColor: [
    '#B0E0E6',
    '#F08080',
    '#C0C0C0'
    ],
    hoverBackgroundColor: [
    '#B0E0E6',
    '#F08080',
    '#C0C0C0'
    ]
  }]
};

const DonutChart = () => ({
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h5>Expenses Breakdown</h5>
        <Doughnut data={data} />
      </div>
    );
  }
});

export default DonutChart;