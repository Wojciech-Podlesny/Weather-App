import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'
import { DateTimeDisplay } from '../DateAndTime/DateTimeDisplay'
import { WeatherIcon } from '../../utils/WeatherIcon'
import { Temperature } from '../Temperature/Temperature'
import { ButtonToogleUnit } from '../ButtonToogleUnit/ButtonToogleUnit'
import { ToastContainer } from 'react-toastify'

const CurrentWeather = () => {
	const { weatherData, location, error } = useWeather() // Pobierz error z kontekstu
	const { isDarkMode } = useTheme()


	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl p-10 col-start-1 col-end-6 row-start-2 row-end-3 lg:col-end-4`}>
			<div className='flex justify-between'>
				<p className='text-2xl font-semibold'>Current Weather</p>
				<div className='hidden lg:block'>
					<ButtonToogleUnit />
				</div>
			</div>

			{weatherData ? (
				<div className='flex flex-col justify-between sm:flex-row md:flex-row lg:flex-row'>
					<div className='flex flex-col sm:items-start md:items-start lg:items-start'>
						<WeatherIcon conditionCode={weatherData?.code} />
						<Temperature />
						<p className='lg:text-left'>{location}</p>
						<DateTimeDisplay />
					</div>
					<div className='mt-4 sm:ml-4 md:ml-4 lg:ml-32'>{/* <WeatherChart /> */}</div>
				</div>
			) : (
				<p className='text-center mt-5'>Brak danych pogodowych</p>
			)}

			<ToastContainer />
		</div>
	)
}

export { CurrentWeather }
