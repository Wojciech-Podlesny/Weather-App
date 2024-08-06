import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'
import { LuSun } from 'react-icons/lu'

const Sunrise = () => {
	const { isDarkMode } = useTheme()
	const { weatherData } = useWeather()

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl col-start-1 col-end-6 row-start-7 row-end-8 lg:col-start-3 lg:col-end-4 lg:row-start-5 lg:row-end-6 p-4 h-32`}>
			<div className='flex items-center px-4'>
				<LuSun className='ml-2' size={24} />
				<h1 className='text-xl pl-2 font-semibold'>Sunrise</h1>
			</div>

			{weatherData && (
				<div className='flex flex-col font-bold ml-6 mt-2'>
					<h1>{weatherData.sunset} </h1>
					<h1>{weatherData.sunrise} </h1>
				</div>
			)}
		</div>
	)
}

export { Sunrise }
