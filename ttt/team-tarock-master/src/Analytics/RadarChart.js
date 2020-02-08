import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Krishna', 'Guntur', 'Prakasam', 'Hyderabad', 'Nellore-Chittoor', 'Kadapa-Ananthapur', 'Vizag', 'Godavari', 'Chennai'],
  datasets: [
    {
      label: 'Participants counts / Reach',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [25, 20, 30, 30, 40, 20, 15, 40, 30]
    }
  ]
};

const RadarChart = () => {
    return (
      <div style={{textAlign: 'center'}}>
        <h5> Region Based Reach/Participation Count</h5>
        <Radar data={data} />
      </div>
    );
}

export default RadarChart;