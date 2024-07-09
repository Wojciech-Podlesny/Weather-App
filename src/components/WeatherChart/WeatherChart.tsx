import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useWeather } from '../../hooks/useWeather';
import { useTheme } from '../../hooks/useTheme';
import { ChartData,ChartOptions} from '../../types/ChartOptions'
import { WeatherData } from '../../types/WeatherData';

const WeatherChart = () => {
  const { weatherData } = useWeather();
  const [chartData, setChartData] = useState<ChartData |null>(null); 
  const { isDarkMode } = useTheme();
  

  useEffect(() => {
    if (weatherData) {
      const processWeatherData = (data: WeatherData) => {
        const labels = data.forecast.forecastday.map((day) => day.date);
        const temperatures = data.forecast.forecastday.map((day) => day.day.maxtemp_c);
        return { labels, temperatures };
      };

      const { labels, temperatures } = processWeatherData(weatherData);
      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperatures,
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            tension: 0,
          },
        ],
      });
    }
  }, [weatherData]);

  const options: ChartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size:10
          }
        }
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size:10
          }
        },
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  if (!weatherData || !chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-5 rounded-xl col-start-1 col-end-6 lg:col-end-4 row-start-6 row-end-7`}>
      <h1 className='text-center'>Temperature</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export { WeatherChart };
