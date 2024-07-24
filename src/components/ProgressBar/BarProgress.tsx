
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ProgressBarProps {
  value: number;
  maxValue: number;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

const BarProgress: React.FC<ProgressBarProps> = ({ value, maxValue, backgroundColor = 'rgb(163 230 53)' }) => {
  const data = {
    labels: ['Value', ''],
    datasets: [
      {
        data: [value, maxValue - value],
        backgroundColor: [backgroundColor, '#e0e0e0'],
        hoverBackgroundColor: [backgroundColor, '#f5f5f5'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '90%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} width={150} height={150} />;
};

export { BarProgress };
