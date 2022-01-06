import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


import React from 'react';
import './Flowdata.css';



function FlowData(props) {

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
        data: props.data,
      },
    ],
  };

  return (
    <div className='flowData'>
      <div className='icon'>
        <img
          src={props.src}
          alt='links'
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
