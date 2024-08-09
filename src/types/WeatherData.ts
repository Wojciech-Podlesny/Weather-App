import { ReactNode } from 'react'

export type WeatherData = {
	temperature: number
	wind: number
	humidity: number
	pressure: number
	visibility: number
	uvIndex: number
	precipitation: number
	airQuality: {
		pm2_5: number
		pm10: number
	}
	sunset: string
	sunrise: string
	cityName: string
	condition: string
	code: number
	forecast: {
		forecastday: Array<{
			date: string
			day: {
				maxtemp_c: number
			}
			hour: Array<{
				time: number
				temp_c: number
				humidity: number
				wind_kph: number
			}>
		}>
	}
	hourlyForecast: HourlyForecast[]
}

export type WeatherContextType = {
	weatherData: WeatherData | null
	location: string
	setLocation: (location: string) => void
	error:string | null
}

export type HourlyForecast = {
	time: string
	temp_c: number
	wind_kph: number
	humidity: number
}

export type Props = {
	children: ReactNode
}
