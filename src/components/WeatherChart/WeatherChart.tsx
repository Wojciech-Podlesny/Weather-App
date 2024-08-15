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
				const labels = ['Monday', 'Tomorrow', 'After Tomorrow']
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
						fill: true,
						backgroundColor: isDarkMode ? 'rgb(240,248, 255)' : 'rgb(240,248, 255)',
						borderColor: isDarkMode ? 'rgb(240,248, 255)' : 'rgb(240,248, 255)',
						borderWidth: 2.1,
						tension: 0.8,
						pointRadius: 0,
						pointHoverRadius: 0,
					},
				],
			})
		}
	}, [weatherData, celcius, isDarkMode])

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
					color: isDarkMode ? 'rgb(255,255,255)' : 'rgb(0,0,0)',
				},
				border: {
					color: isDarkMode ? 'rgb(255,255,255)' : 'rgb(0,0,0)',
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
					color: isDarkMode ? 'rgb(255,255,255)' : 'rgb(0,0,0)',
				},
				border: {
					color: isDarkMode ? 'rgb(255,255,255)' : 'rgb(0,0,0)',
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
		<div>
			<h1
				className={`${
					isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
				} text-center font-semibold text-xl`}>
				Temperature
			</h1>
			<Line data={chartData} options={options} />
		</div>
	)
}

export { WeatherChart }
