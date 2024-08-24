import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'
import { LuWind } from 'react-icons/lu'

const Wind = () => {
	const { weatherData } = useWeather()
	const { isDarkMode } = useTheme()

	return (
		<div
			className={`bg-${
				isDarkMode ? 'gray-800 text-white' : 'white text-black'
			} rounded-xl col-start-3 col-end-6 row-start-6 row-end-7 lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-6 p-4 `}>
			<div className='flex items-center'>
				<LuWind className='flex-shrink-0' size={24} />
				<h1 className='text-lg pl-2 font-semibold'>Wind</h1>
			</div>

			{weatherData && (
				<div className='font-bold ml-6 mt-2'>
					<p>{weatherData.wind} km/h</p>
				</div>
			)}
		</div>
	)
}

export { Wind }
