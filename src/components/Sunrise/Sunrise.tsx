import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'
import { LuSunrise } from 'react-icons/lu'
import { LuSunset } from 'react-icons/lu'

const Sunrise = () => {
	const { isDarkMode } = useTheme()
	const { weatherData } = useWeather()

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl col-start-1 col-end-6 row-start-7 row-end-8 lg:col-start-3 lg:col-end-4 lg:row-start-5 lg:row-end-6 p-4`}>
			<div className='flex items-center'>
				<LuSunrise className='flex-shrink-0' size={24} />
				<h1 className='text-lg pl-2 font-semibold'>Sunrise</h1>
			</div>

			{weatherData && (
				<div className='flex flex-row lg:flex-col justify-evenly font-bold ml-4 mt-2'>
					<div className='flex flex-row gap-2'>
						<LuSunset size={18} />
						<h1>{weatherData.sunset} </h1>
					</div>
					<div className='flex flex-row gap-2'>
						<LuSunrise size={18} />
						<h1>{weatherData.sunrise} </h1>
					</div>
				</div>
			)}
		</div>
	)
}

export { Sunrise }
