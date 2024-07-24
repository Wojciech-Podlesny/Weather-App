import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'
import { DateTimeDisplay } from '../DateAndTime/DateTimeDisplay'
import { WeatherIcon } from '../../utils/WeatherIcon'
import { Temperature } from '../Temperature/Temperature'
import { ButtonToogleUnit } from '../ButtonToogleUnit/ButtonToogleUnit'
import { WeatherChart } from '../WeatherChart/WeatherChart'

const CurrentWeather = () => {
	const { weatherData, location } = useWeather()
	const { isDarkMode } = useTheme()

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl p-10 col-start-1 col-end-6 row-start-2 row-end-3 lg:col-end-4`}>
			<div className='flex justify-between'>
				<p className='text-xl font-semibold'>Current Weather</p>
				<div className='hidden lg:block'>
					<ButtonToogleUnit />
				</div>
			</div>

			<div className='flex flex-col justify-between sm:flex-row md:flex-row lg:flex-row'>
				<div className='flex flex-col sm:items-start md:items-start lg:items-start'>
					<WeatherIcon conditionCode={weatherData?.code} />
					<Temperature />
					<p className='lg:text-left'>{location}</p>
					<DateTimeDisplay />
				</div>
				<div className='mt-4 sm:ml-4 md:ml-4 lg:ml-32'>
					<WeatherChart /> 
				</div>
			</div>
		</div>
	)
}

export { CurrentWeather }
