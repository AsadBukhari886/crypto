import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import React from 'react';
import './Flowdata.css';

const chartOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    title: false,
    labels: false,
    tooltip: false,
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
    },
  },
};

const labels = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      borderColor: '#ccc',
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      pointRadius: 0,
      data: [14, 16, 15, 12, 14, 10, 13, 14, 16, 20, 10, 14, 13, 16, 11, 18, 12],
    },
  ],
};

function FlowData(props) {
  return (
    <div className='flowData'>
      <div className='icon'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/3/36/ETC_Logo.png'
          alt='icon'
        />
      </div>
      <Chart type='line' data={data} options={chartOptions} className='chart' />
      <div className='button'>
        <button
          style={{ backgroundColor: `${props.color}` }}
          onClick={() => alert('button clicked')}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default FlowData;