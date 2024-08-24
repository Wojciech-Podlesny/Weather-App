import { useTheme } from '../../hooks/useTheme'
import { useWeather } from '../../hooks/useWeather'
import { LuGauge } from 'react-icons/lu'
import { convertPressure } from '../../utils/ConvertTemperature'

const Pressure = () => {
	const { weatherData } = useWeather()
	const { isDarkMode } = useTheme()

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl col-start-3 col-end-6 row-start-3 row-end-4 lg:col-start-2 lg:col-end-3 p-4`}>
			<div className='flex items-center'>
				<LuGauge className='flex-shrink-0' size={24} />
				<h1 className='text-lg pl-2 font-semibold'>Pressure</h1>
			</div>

			{weatherData && (
				<div className='font-bold ml-6 mt-2'>
					<p>{convertPressure(Math.round(weatherData.pressure))} pa</p>
				</div>
			)}
		</div>
	)
}

export { Pressure }
