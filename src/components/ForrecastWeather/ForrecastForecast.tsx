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
			} col-start-1 col-end-6 row-start-8 row-end-9 lg:col-start-4 lg:col-end-6 lg:row-start-2 lg:row-end-5 rounded-xl p-5 lg:p-0 space-y-4 lg:space-y-0`}>
			<div className='flex lg:flex-row lg:space-x-3 p-3 lg:m-5'>
				{days.map((day: any, index: number) => (
					<span
						key={index}
						className={`font-semibold cursor-pointer py-2 px-2 rounded mb-2 lg:mb-0 lg:mr-2  ${
							selectedDay === index
								? isDarkMode
									? 'underline decoration-white underline-offset-8'
									: 'underline decoration-black underline-offset-8'
								: ''
						}`}
						onClick={() => setSelectedDay(index)}>
						{day.date}
					</span>
				))}
			</div>
			<ScrollableList>
				{getEveryFourthHour(days[selectedDay].hour).map((hour: any, index: number) => (
					<li className='p-4  min-w-max  mb-4 lg:mb-0 lg:ml-0 m-3' key={index}>
						<div className='flex flex-col lg:flex-row items-center lg:items-start justify-start space-y-4 lg:space-y-0 lg:space-x-4 m-5'>
							<div>
								<WeatherIcon conditionCode={hour.condition.code} />
							</div>
							<div className='flex flex-col lg:flex-row justify-between lg:flex-grow'>
								<div className='lg:mr-8'>
									<p className='pb-1'>{formatTime(hour.time)}</p>
									<p className='flex-grow'>{hour.condition.text}</p>
									<p className='pt-2 pb-2'>
										{convertTemperature(hour.temp_c, celcius).toFixed(1)} {celcius ? '°C' : '°F'}
									</p>
								</div>

								<div>
									<p>Wind: {hour.wind_kph} kph</p>
									<p>Humidity: {hour.humidity}%</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</ScrollableList>
		</div>
	)
}

export default HourlyForecast
