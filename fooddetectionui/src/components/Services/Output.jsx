import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Output.css'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const Output = ({ foodProperty, imgSrc }) => {
  const chartData = {
    labels: ['Proteins', 'Calcium', 'Fat', 'Carbohydrates', 'Vitamins'],
    datasets: [
      {
        label: 'Nutritional Values',
        data: [
          foodProperty[0].protein,
          foodProperty[0].calcium,
          foodProperty[0].fat,
          foodProperty[0].carbohydrates,
          foodProperty[0].vitamins,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true, 
      },
    },
  };

  return (
    <div className="output">
      <h1 className="output-heading">Food Details</h1>

    <div className="output-div">
    {imgSrc && (
        <div>
          <img src={imgSrc} alt="Captured food" className="output-image" />
        </div>
      )}
      <div className="output-data">
        <h1 className="output-heading">Name: {foodProperty[0].name}</h1>
        <p className="output-data">Proteins: {foodProperty[0].protein}</p>
        <p className="output-data">Calcium: {foodProperty[0].calcium}</p>
        <p className="output-data">Fat: {foodProperty[0].fat}</p>
        <p className="output-data">Carbohydrates: {foodProperty[0].carbohydrates}</p>
        <p className="output-data">Vitamins: {foodProperty[0].vitamins}</p>
      </div>
      <div className="chart-container">
        <Pie className="chart-text" data={chartData} options={chartOptions} />
      </div>
    </div>


      
    </div>
  );
};

export default Output;

