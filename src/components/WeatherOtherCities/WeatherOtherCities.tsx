import { useTheme } from '../../hooks/useTheme'
import { useState, useEffect } from 'react'
import ScrollableList from '../../utils/Scrollable'
import { WeatherIcon } from '../../utils/WeatherIcon'
import { useWeather } from '../../hooks/useWeather'
import { convertTemperature } from '../../utils/ConvertTemperature'
import { useUnit } from '../../hooks/useUnit'

type WeatherCities = {
	location: {
		name: string
	}
	current: {
		temp_c: number
		condition: {
			icon: string
		}
	}
}

const cities = ['Warsaw', 'Katowice', 'Rzeszów', 'Wroclaw', 'Gdansk']

const WeatherOtherCities = () => {
	const { isDarkMode } = useTheme()
	const [weather, setWeather] = useState<WeatherCities[]>([])
	const { weatherData } = useWeather()
	const { celcius } = useUnit()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await Promise.all(
					cities.map(city =>
						fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`).then(
							response => response.json()
						)
					)
				)
				setWeather(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	return (
		<div
			className={`rounded-xl col-start-1 col-end-6 lg:col-start-4 lg:col-end-6 lg:row-start-5 lg:row-end-6 ${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			}`}>
			<div className='mx-10 my-6'>
				<h1 className='text-xl font-semibold'>Weather Other Cities</h1>
			</div>
			<ScrollableList>
				<div className='flex justify-center gap-6 lg:mt-6 mt-5 mb-12'>
					{weather.map((data, index) => (
						<div className={`m-2 p-4 w-40 sm:w-48 lg:w-56 rounded-lg`} key={index}>
							<h2 className='text-lg font-bold mb-2 text-center'>{data.location.name}</h2>
							<h2 className='text-xl mb-1 text-center'>
								{convertTemperature(data.current.temp_c, celcius).toFixed(1)} {celcius ? '°C' : '°F'}
							</h2>
							<div className='flex items-center justify-center mb-2'>
								<WeatherIcon conditionCode={weatherData?.code}></WeatherIcon>
							</div>
						</div>
					))}
				</div>
			</ScrollableList>
		</div>
	)
}

export { WeatherOtherCities }
