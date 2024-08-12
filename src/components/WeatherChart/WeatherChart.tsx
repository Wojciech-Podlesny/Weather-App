import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { useWeather } from '../../hooks/useWeather'
import { useUnit } from '../../hooks/useUnit'
import { useTheme } from '../../hooks/useTheme'
import { ChartData, ChartOptions } from '../../types/ChartOptions'
import { WeatherData } from '../../types/WeatherData'
import { convertTemperature } from '../../utils/ConvertTemperature'

const WeatherChart = () => {
	const { weatherData } = useWeather()
	const [chartData, setChartData] = useState<ChartData | null>(null)
	const { isDarkMode } = useTheme()
	const { celcius } = useUnit()

	useEffect(() => {
		if (weatherData) {
			const processWeatherData = (data: WeatherData) => {
				const labels = data.forecast.forecastday.map(day => day.date)
				const temperatures = data.forecast.forecastday.map(day => convertTemperature(day.day.maxtemp_c, celcius))
				return { labels, temperatures }
			}

			const { labels, temperatures } = processWeatherData(weatherData)
			setChartData({
				labels: labels,
				datasets: [
					{
						label: `Temperature (${celcius ? '°C' : '°F'})`,
						data: temperatures,
						fill: false,
						backgroundColor: 'rgb(0,0,205)',
						borderColor: 'rgb(0,0,205)',
						borderWidth: 2.1,
						tension: 0.4,
						pointRadius: 0,
						pointHoverRadius: 0,
					},
				],
			})
		}
	}, [weatherData, celcius])

	const options: ChartOptions = {
		scales: {
			x: {
				grid: {
					display: false,
				},
				ticks: {
					font: {
						size: 12,
					},
					color: 'rgb(0,0,205)',
				},
				border: {
					color: 'rgb(0,0,205)',
				},
			},
			y: {
				grid: {
					display: false,
				},
				ticks: {
					font: {
						size: 12,
					},
					color: 'rgb(0,0,205)',
				},
				border: {
					color: 'rgb(0,0,205)',
				},
				beginAtZero: false,
			},
		},
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
			},
		},
	}

	if (!weatherData || !chartData) {
		return <div>Loading...</div>
	}

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} p-5 rounded-xl col-start-1 col-end-6 lg:col-end-4 row-start-6 row-end-7`}>
			<h1 className='text-center font-semibold text-xl text-blue-800 mt-4'>Temperature</h1>
			<Line data={chartData} options={options} />
		</div>
	)
}

export { WeatherChart }
