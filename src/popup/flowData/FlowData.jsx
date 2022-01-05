import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


import React from 'react';
import './Flowdata.css';



function FlowData(props) {
  console.log("flow", (props.src))

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
          // src={props.src}
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

// <<<<<<< HEAD
export default FlowData;
// =======
// export default FlowData;
// >>>>>>> 0af5107a03104789e8819fadeea5c0e902a6544b
