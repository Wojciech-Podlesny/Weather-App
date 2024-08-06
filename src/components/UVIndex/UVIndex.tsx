import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'
import { LuSun } from 'react-icons/lu'

const UVIndex = () => {
	const { weatherData } = useWeather()
	const { isDarkMode } = useTheme()

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl col-start-1 col-end-3 row-start-6 row-end-7 lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-6 p-4 h-32`}>
			<div className='flex items-center px-4 py-3'>
				<LuSun className='flex-shrink-0' size={24} />
				<h1 className='text-xl pl-2 font-semibold'>UV</h1>
			</div>
			{weatherData && (
				 <div className='font-bold ml-6 mt-2'>
				 <p>{weatherData.uvIndex}</p>
			 </div>
			)}
		</div>
	)
}

export { UVIndex }
