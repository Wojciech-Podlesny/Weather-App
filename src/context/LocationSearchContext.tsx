import { createContext, useState, useEffect} from 'react'
import { WeatherContextType, WeatherData,HourlyForecast,Props } from '../types/WeatherData'

export const WeatherContext = createContext<WeatherContextType | null>(null)

export const WeatherProvider = ({ children }: Props) => {
	const [location, setLocation] = useState<string>('Warsaw')
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

	useEffect(() => {
		if (location) {
			fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&aqi=yes&q=${location}&days=5&alerts=yes`
			)
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok')
					}
					return response.json()
				})
				.then(data => {
					const extractedHourlyData: HourlyForecast[] = data.forecast.forecastday[0].hour.map((hour: any) => ({
						time: hour.time,
						temp_c: hour.temp_c,
						condition: hour.condition,
						wind_kph: hour.wind_kph,
						humidity: hour.humidity,
					}))

					const extractedData: WeatherData = {
						temperature: data.current.temp_c,
						wind: data.current.wind_kph,
						humidity: data.current.humidity,
						visibility: data.current.vis_km,
						pressure: data.current.pressure_mb,
						uvIndex: data.current.uv,
						precipitation: data.current.precip_mm,
						feelsLike: data.current.feelslike_c,
						airQuality: {
							pm2_5: data.current.air_quality.pm2_5,
							pm10: data.current.air_quality.pm10,
						},
						sunset: data.forecast.forecastday[0].astro.sunset,
						sunrise: data.forecast.forecastday[0].astro.sunrise,
						cityName: data.location.name,
						condition: data.current.condition.text,
						code: data.current.condition.code,
						forecast: data.forecast,
						hourlyForecast: extractedHourlyData,
					}
					setWeatherData(extractedData)
					setLocation(extractedData.cityName)
				})
				.catch(error => console.error('Error fetching weather data:', error))
		}
	}, [location])

	return <WeatherContext.Provider value={{ weatherData, setLocation, location }}>{children}</WeatherContext.Provider>
}

