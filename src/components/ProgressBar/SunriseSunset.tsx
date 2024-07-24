import { Doughnut } from 'react-chartjs-2'
import { LuSunrise } from 'react-icons/lu'
import { LuSunset } from 'react-icons/lu'
import { useTheme } from '../../hooks/useTheme'

type SunriseSunsetProps = {
	sunrise: string
	sunset: string
}

const SunriseSunset = ({ sunrise, sunset }: SunriseSunsetProps) => {
	
	const { isDarkMode } = useTheme()
	const calculateProgress = (): number => {
		const currentTime = new Date()
		const sunriseTime = new Date()
		const [sunriseHour, sunriseMinute] = sunrise.split(':').map(str => parseInt(str))
		sunriseTime.setHours(sunriseHour, sunriseMinute, 0)

		const sunsetTime = new Date()
		const [sunsetHour, sunsetMinute] = sunset.split(':').map(str => parseInt(str))
		sunsetTime.setHours(sunsetHour, sunsetMinute, 0)

		if (currentTime < sunriseTime) {
			return 0
		} else if (currentTime > sunsetTime) {
			return 100
		} else {
			const totalDaylight = sunsetTime.getTime() - sunriseTime.getTime()
			const elapsedDaylight = currentTime.getTime() - sunriseTime.getTime()
			return (elapsedDaylight / totalDaylight) * 100
		}
	}

	const progress = calculateProgress()
	const remaining = 100 - progress

	const data = {
		datasets: [
			{
				data: [progress, remaining],
				backgroundColor: ['rgb(163 230 53)', 'rgb(163 230 53)'],
				borderWidth: 0,
				hoverOffset: 0,
				cutout: '90%',
			},
		],
	}

	const options = {
		cutout: '80%',
		rotation: 270,
		circumference: 180,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
		},
	}

	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} flex flex-col items-center text-black p-4 rounded-lg w-full sm:w-64 mr-10`}>
			<div className='w-32 h-32 mb-4 relative'>
				<Doughnut data={data} options={options} />
			</div>
			<div className='flex justify-between w-full'>
				<div className='text-center'>
					<LuSunrise className='ml-7' size={'1.5em'} />
					<p className='text-sm'>Sunrise</p>
					<p className='text-lg font-bold'>{sunrise}</p>
				</div>
				<div className='text-center'>
					<LuSunset className='ml-7' size={'1.5em'} />
					<p className='text-sm'>Sunset</p>
					<p className='text-lg font-bold'>{sunset}</p>
				</div>
			</div>
		</div>
	)
}

export { SunriseSunset }
