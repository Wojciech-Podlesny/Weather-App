import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'

const FeelsLike = () => {
	const { weatherData } = useWeather()
	const { isDarkMode } = useTheme()
	return (
		<div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white : text-black'} rounded-xl col-start-1 col-end-3 row-start-6 row-end-7 lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-6`}>
			<div className='flex items-center m-3'>
				<h1 className='text-xl pl-2'>Feels Like</h1>
			</div>
			{weatherData && (
				<div className='font-bold ml-10'>
					<p>{weatherData.feelsLike}</p>
				</div>
			)}
		</div>
	)
}

export { FeelsLike }
