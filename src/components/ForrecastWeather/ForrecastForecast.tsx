import React, { useState } from 'react'
import { useWeather } from '../../hooks/useWeather'
import { WeatherIcon } from '../../utils/WeatherIcon'
import { useTheme } from '../../hooks/useTheme'
import { useUnit } from '../../hooks/useUnit'
import { convertTemperature } from '../../utils/ConvertTemperature'
import ScrollableList from '../../utils/Scrollable'

const HourlyForecast = () => {
	const { weatherData } = useWeather()
	const [selectedDay, setSelectedDay] = useState<number>(0)
	const { isDarkMode } = useTheme()
	const { celcius } = useUnit()

	if (!weatherData) {
		return <div>Loading...</div>
	}

	const { forecast } = weatherData
	const days = forecast.forecastday

	const getEveryFourthHour = (hours: any[]) => {
		return hours.filter((_, index) => index % 4 === 0).slice(0, 6)
	}

	const formatTime = (timeString: string) => {
		const date = new Date(timeString)
		return date.getHours().toString().padStart(2, '0') + ':00'
	}

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} col-start-1 col-end-6 row-start-8 row-end-9 lg:col-start-4 lg:col-end-6 lg:row-start-2 lg:row-end-5 rounded-xl p-5`}>
			<div className='flex space-x-8'>
				{days.map((day: any, index: number) => (
					<button
						key={index}
						className={`py-2 px-4 rounded ${selectedDay === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
						onClick={() => setSelectedDay(index)}>
						{day.date}
					</button>
				))}
			</div>
			<ScrollableList>
				{getEveryFourthHour(days[selectedDay].hour).map((hour: any, index: number) => (
					<li className='p-4 border-b min-w-max inline-block' key={index}>
						<div className='flex flex-col justify-between lg:flex-row rounded-xl'>
							<div>
								<WeatherIcon conditionCode={hour.condition.code} />
							</div>
							<div className=''>
								<p className='pb-1'>{formatTime(hour.time)}</p>
								<p>{hour.condition.text}</p>
							</div>
							<div>
								<p className='pt-2 pb-2'>
									{convertTemperature(hour.temp_c, celcius).toFixed(1)} {celcius ? '°C' : '°F'}
								</p>
							</div>
							<div className='pb-2'>
								<p className='pb-2'>Wind: {hour.wind_kph} kph</p>
								<p>Humidity: {hour.humidity}%</p>
							</div>
						</div>
					</li>
				))}
			</ScrollableList>
		</div>
	)
}

export default HourlyForecast
